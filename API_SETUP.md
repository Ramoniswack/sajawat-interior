# Backend API Configuration

To connect the frontend with the Django backend, follow these steps:

## 1. Create Environment File

Create a `.env.local` file in the root directory with the following content:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 2. Start the Backend

Navigate to the backend directory and start the Django development server:

```bash
cd C:\Users\ACER NITRO\Desktop\backend\sajawat
python manage.py runserver
```

The backend will be available at `http://localhost:8000`

## 3. Start the Frontend

Navigate to the frontend directory and start the Next.js development server:

```bash
cd C:\Users\ACER NITRO\Desktop\sajawat-interior
npm run dev
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/` - Home page data
- `GET /api/rooms/rooms/` - All rooms
- `GET /api/rooms/rooms/featured/` - Featured rooms
- `GET /api/rooms/rooms/by_style/?style=slug` - Rooms by style
- `GET /api/rooms/rooms/by_location/?location=slug` - Rooms by location
- `GET /api/rooms/types/` - Room types
- `GET /api/rooms/styles/` - Room styles
- `GET /api/rooms/locations/` - Room locations
- `GET /api/services/` - Services
- `GET /api/design-ideas/` - Design ideas
- `GET /api/portfolio/` - Portfolio
- `GET /api/pricing/` - Pricing packages
- `POST /api/contact/` - Submit contact form
- `GET /api/testimonials/` - Testimonials
- `GET /api/media/` - Media files

## API Client Usage

The API client is available in `lib/api.ts`:

```typescript
import { api } from '@/lib/api';

// Get home page data
const homeData = await api.getHomePage();

// Get all rooms
const rooms = await api.getRooms();

// Get featured rooms
const featuredRooms = await api.getFeaturedRooms();

// Get rooms by style
const modernRooms = await api.getRoomsByStyle('modern');

// Get room types
const roomTypes = await api.getRoomTypes();
```

## CORS Configuration

The backend is already configured to allow CORS from:
- `http://localhost:3000`
- `http://localhost:3001`
- `http://127.0.0.1:3000`
- `http://127.0.0.1:3001`

If you need to add more origins, update `CORS_ALLOWED_ORIGINS` in the backend settings.
