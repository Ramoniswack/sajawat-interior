// Simple test to verify API connection
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'

async function testConnection() {
  console.log('Testing API connection to:', API_BASE_URL)
  
  try {
    // Test a simple endpoint
    const response = await fetch(`${API_BASE_URL}/rooms/galleries/`)
    console.log('Response status:', response.status)
    console.log('Response ok:', response.ok)
    
    if (response.ok) {
      const data = await response.json()
      console.log('API Response:', data)
      console.log('Number of galleries:', data.results?.length || data.length || 0)
    } else {
      console.error('API request failed with status:', response.status)
    }
  } catch (error) {
    console.error('Connection error:', error)
  }
}

// Test specific gallery
async function testSpecificGallery() {
  console.log('\nTesting specific gallery endpoint...')
  
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/design-galleries/by_slug/?slug=nepali-traditional`)
    console.log('Response status:', response.status)
    
    if (response.ok) {
      const data = await response.json()
      console.log('Gallery data:', data)
    } else {
      console.error('Gallery request failed')
    }
  } catch (error) {
    console.error('Gallery test error:', error)
  }
}

// Run tests
testConnection()
testSpecificGallery()