// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// API response types
export interface Room {
  id: number;
  title: string;
  description: string;
  room_type: number;
  style: number;
  location: number;
  featured: boolean;
  image: string | null;
  span: string;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface RoomType {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string | null;
}

export interface RoomStyle {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface RoomLocation {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface HomePage {
  hero_title: string;
  hero_subtitle: string;
  statistics: {
    projects_completed: number;
    expert_designers: number;
    happy_clients: number;
    design_styles: number;
  };
}

// API Client class
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Home page API
  async getHomePage(): Promise<HomePage> {
    return this.request<HomePage>('/api/');
  }

  // Rooms API
  async getRooms(params?: {
    style?: string;
    location?: string;
    room_type?: string;
    featured?: boolean;
  }): Promise<Room[]> {
    const queryParams = new URLSearchParams();
    if (params?.style) queryParams.append('style', params.style);
    if (params?.location) queryParams.append('location', params.location);
    if (params?.room_type) queryParams.append('room_type', params.room_type);
    if (params?.featured !== undefined) queryParams.append('featured', params.featured.toString());

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/api/rooms/rooms/?${queryString}` : '/api/rooms/rooms/';
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: Room[] }>(endpoint);
    return response.results;
  }

  async getFeaturedRooms(): Promise<Room[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: Room[] }>('/api/rooms/rooms/featured/');
    return response.results;
  }

  async getRoomsByStyle(styleSlug: string): Promise<Room[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: Room[] }>(`/api/rooms/rooms/by_style/?style=${styleSlug}`);
    return response.results;
  }

  async getRoomsByLocation(locationSlug: string): Promise<Room[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: Room[] }>(`/api/rooms/rooms/by_location/?location=${locationSlug}`);
    return response.results;
  }

  async getRoomTypes(): Promise<RoomType[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: RoomType[] }>('/api/rooms/types/');
    return response.results;
  }

  async getRoomStyles(): Promise<RoomStyle[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: RoomStyle[] }>('/api/rooms/styles/');
    return response.results;
  }

  async getRoomLocations(): Promise<RoomLocation[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: RoomLocation[] }>('/api/rooms/locations/');
    return response.results;
  }

  async getRoom(id: number): Promise<Room> {
    return this.request<Room>(`/api/rooms/rooms/${id}/`);
  }

  // Services API
  async getServices(): Promise<any[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: any[] }>('/api/services/');
    return response.results;
  }

  // Design Ideas API
  async getDesignIdeas(params?: { style?: string; location?: string }): Promise<any[]> {
    const queryParams = new URLSearchParams();
    if (params?.style) queryParams.append('style', params.style);
    if (params?.location) queryParams.append('location', params.location);

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/api/design-ideas/?${queryString}` : '/api/design-ideas/';
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: any[] }>(endpoint);
    return response.results;
  }

  // Portfolio API
  async getPortfolio(): Promise<any[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: any[] }>('/api/portfolio/');
    return response.results;
  }

  // Pricing API
  async getPricing(): Promise<any[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: any[] }>('/api/pricing/');
    return response.results;
  }

  // Contact API
  async submitContactForm(data: any): Promise<any> {
    return this.request<any>('/api/contact/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Testimonials API
  async getTestimonials(): Promise<any[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: any[] }>('/api/testimonials/');
    return response.results;
  }

  // Media API
  async getMedia(): Promise<any[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: any[] }>('/api/media/');
    return response.results;
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export class for custom instances if needed
export { ApiClient };
