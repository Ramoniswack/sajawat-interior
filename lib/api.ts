// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Log the API URL for debugging
if (typeof window !== 'undefined') {
  console.log('API Base URL:', API_BASE_URL);
  console.log('Environment variable NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
}

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

export interface RoomsPage {
  hero_subtitle: string;
  hero_title: string;
  hero_description: string;
  hero_cta_text: string;
  hero_cta_link: string;
  hero_secondary_cta_text: string;
  hero_secondary_cta_link: string;
  hero_badge_text: string;
  hero_badge_subtext: string;
  design_styles_title: string;
  design_styles_description: string;
  cta_title: string;
  cta_description: string;
  cta_button_text: string;
  cta_button_link: string;
  meta_title: string;
  meta_description: string;
}

export interface Designer {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string | null;
  image_url: string | null;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProcessStep {
  id: number;
  step_number: number;
  title: string;
  short_title: string;
  description: string;
  image: string | null;
  image_url: string | null;
  order: number;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Page content types
export interface HomePage {
  hero_title: string;
  hero_subtitle: string;
  hero_cta_text: string;
  hero_cta_link: string;
  statistics: {
    projects_completed: number;
    expert_designers: number;
    happy_clients: number;
    design_styles: number;
  };
  hero_phrases: string[];
  featured_section_title: string;
  featured_section_subtitle: string;
  featured_section_description: string;
  technology_section_title: string;
  technology_section_description: string;
  collection_section_title: string;
  collection_section_description: string;
  design_styles_section_title: string;
  design_styles_section_description: string;
  main_cta_title: string;
  main_cta_description: string;
  main_cta_button_text: string;
  main_cta_button_link: string;
  meta_title: string;
  meta_description: string;
}

export interface ServicePage {
  hero_title: string;
  hero_description: string;
  service_cards: Array<{
    number: string;
    title: string;
    description: string;
    href: string;
  }>;
  timing_title: string;
  timing_description: string;
  timing_steps: any[];
  field_visit_title: string;
  field_visit_description: string;
  field_visit_steps: any[];
  payment_title: string;
  payment_description: string;
  payment_steps: any[];
  pricing_title: string;
  pricing_description: string;
  pricing_packages: any[];
  cta_title: string;
  cta_description: string;
  cta_button_text: string;
  cta_button_link: string;
}

export interface ContactPage {
  hero_subtitle: string;
  hero_title: string;
  hero_description: string;
  location_address: string;
  location_city: string;
  phone_number: string;
  email_address: string;
  instagram_url: string;
  facebook_url: string;
  form_fields: any[];
  project_types: string[];
  success_title: string;
  success_subtitle: string;
  meta_title: string;
  meta_description: string;
}

export interface DesignIdeaPage {
  hero_title: string;
  hero_description: string;
  stats_projects_completed: number;
  stats_expert_designers: number;
  stats_happy_clients: number;
  stats_design_styles: number;
  how_it_works_title: string;
  how_it_works_description: string;
  how_it_works_steps: any[];
  designers_title: string;
  designers_description: string;
  designers_list: any[];
  gallery_title: string;
  gallery_subtitle: string;
  meta_title: string;
  meta_description: string;
}

export interface DesignIdea {
  id: number;
  title: string;
  description: string;
  style: string;
  location: string;
  image: string | null;
  created_at: string;
  updated_at: string;
}

export interface DesignIdeaCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
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
    
    console.log(`API Request: ${url}`);
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        // Add mode for CORS (no credentials when using allow all origins)
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      console.error(`API Base URL: ${this.baseUrl}`);
      throw error;
    }
  }

  // Home page API
  async getHomePage(): Promise<HomePage> {
    return this.request<HomePage>('/api/');
  }

  // Page content APIs
  async getServicePage(): Promise<ServicePage> {
    return this.request<ServicePage>('/api/services/page/');
  }

  async getContactPage(): Promise<ContactPage> {
    return this.request<ContactPage>('/api/contact/page/');
  }

  async getDesignIdeaPage(): Promise<DesignIdeaPage> {
    return this.request<DesignIdeaPage>('/api/design-ideas/page/');
  }

  async getDesignIdeas(params?: {
    style?: string;
    location?: string;
  }): Promise<DesignIdea[]> {
    const queryParams = new URLSearchParams();
    if (params?.style) queryParams.append('style', params.style);
    if (params?.location) queryParams.append('location', params.location);

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/api/design-ideas/design-ideas/?${queryString}` : '/api/design-ideas/design-ideas/';
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: DesignIdea[] }>(endpoint);
    return response.results;
  }

  async getDesignIdeaCategories(): Promise<DesignIdeaCategory[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: DesignIdeaCategory[] }>('/api/design-ideas/categories/');
    return response.results;
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

  async getRoomsPage(): Promise<RoomsPage> {
    return this.request<RoomsPage>('/api/rooms/page/');
  }

  async getDesigners(): Promise<Designer[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: Designer[] }>('/api/rooms/designers/');
    return response.results;
  }

  async getProcessSteps(): Promise<ProcessStep[]> {
    const response = await this.request<{ count: number; next: string | null; previous: string | null; results: ProcessStep[] }>('/api/design-ideas/process-steps/');
    return response.results;
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
