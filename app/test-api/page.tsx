import { getDesignGalleryBySlug, getRoomGalleryBySlug } from "@/lib/api-client"

export default async function TestAPIPage() {
  console.log('Testing API connection...')
  
  // Test design gallery
  const designGallery = await getDesignGalleryBySlug('nepali-traditional')
  console.log('Design gallery result:', designGallery)
  
  // Test room gallery
  const roomGallery = await getRoomGalleryBySlug('nepali-traditional')
  console.log('Room gallery result:', roomGallery)
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">API Connection Test</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Design Gallery Test</h2>
        {designGallery ? (
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-800">✓ Design gallery found!</p>
            <pre className="mt-2 text-sm">{JSON.stringify(designGallery, null, 2)}</pre>
          </div>
        ) : (
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-800">✗ Design gallery not found or API error</p>
          </div>
        )}
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Room Gallery Test</h2>
        {roomGallery ? (
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-800">✓ Room gallery found!</p>
            <pre className="mt-2 text-sm">{JSON.stringify(roomGallery, null, 2)}</pre>
          </div>
        ) : (
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-800">✗ Room gallery not found or API error</p>
          </div>
        )}
      </div>
      
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">Troubleshooting Steps</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Check if Django backend is running on localhost:8000</li>
          <li>Run <code className="bg-gray-200 px-2 py-1 rounded">python manage.py seed_galleries</code> in backend</li>
          <li>Check browser console for any errors</li>
          <li>Verify API URL: {process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'}</li>
          <li>Try accessing: <a href="http://127.0.0.1:8000/api/rooms/design-galleries/" target="_blank" className="text-blue-600 underline">http://127.0.0.1:8000/api/rooms/design-galleries/</a></li>
        </ol>
      </div>
    </div>
  )
}