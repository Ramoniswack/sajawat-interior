export const pricingData = {
  currency: "NPR",
  currencySymbol: "Rs",
  country: "Nepal",
  pricingNote:
    "All prices are estimated and may vary depending on materials, dimensions, brands, location, labour and project complexity.",

  pricingPage: {
    title: "Interior Design Pricing",
    subtitle: "Flexible interior design solutions for every space and budget.",
    description:
      "Choose from predefined design packages or create a custom interior project based on your space, style and requirements.",
    cta: {
      primary: "Get a Free Consultation",
      secondary: "Calculate Your Estimate",
    },
  },

  packages: [
    {
      id: "basic",
      name: "Basic",
      price: 25000,
      priceLabel: "Starting from Rs 25,000",
      billingType: "fixed",
      popular: false,
      description: "Essential design solutions for small spaces and individual rooms.",
      features: [
        "2D Floor Plan",
        "Basic Furniture Layout",
        "Colour Scheme",
        "Basic Material Suggestions",
        "1 Design Revision",
      ],
    },
    {
      id: "standard",
      name: "Standard",
      price: 55000,
      priceLabel: "Starting from Rs 55,000",
      billingType: "fixed",
      popular: true,
      description: "A complete design package for apartments and residential spaces.",
      features: [
        "2D Floor Plan",
        "3D Interior Design",
        "Furniture Planning",
        "Lighting Plan",
        "Material Selection",
        "2 Design Revisions",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: 120000,
      priceLabel: "Starting from Rs 1,20,000",
      billingType: "fixed",
      popular: false,
      description: "Detailed interior planning with realistic visualization and material guidance.",
      features: [
        "Detailed 2D Drawings",
        "Photorealistic 3D Design",
        "Furniture Planning",
        "Lighting Design",
        "Material Selection",
        "Custom Design Suggestions",
        "3 Design Revisions",
      ],
    },
    {
      id: "luxury",
      name: "Luxury",
      price: 250000,
      priceLabel: "Starting from Rs 2,50,000",
      billingType: "fixed",
      popular: false,
      description: "Premium interior design for high-end homes and luxury properties.",
      features: [
        "Complete Space Planning",
        "Photorealistic 3D Visualization",
        "Custom Furniture Design",
        "Premium Material Selection",
        "Lighting Design",
        "Smart Home Planning",
        "Site Consultation",
        "Unlimited Design Revisions",
      ],
    },
  ],

  roomPricing: [
    {
      id: "living-room",
      name: "Living Room",
      icon: "sofa",
      pricing: { basic: 15000, standard: 30000, premium: 55000, luxury: 100000 },
    },
    {
      id: "master-bedroom",
      name: "Master Bedroom",
      icon: "bed",
      pricing: { basic: 12000, standard: 25000, premium: 45000, luxury: 80000 },
    },
    {
      id: "bedroom",
      name: "Bedroom",
      icon: "bed-single",
      pricing: { basic: 10000, standard: 20000, premium: 35000, luxury: 65000 },
    },
    {
      id: "kitchen",
      name: "Kitchen",
      icon: "chef-hat",
      pricing: { basic: 15000, standard: 30000, premium: 50000, luxury: 100000 },
    },
    {
      id: "dining",
      name: "Dining Room",
      icon: "utensils",
      pricing: { basic: 8000, standard: 18000, premium: 30000, luxury: 55000 },
    },
    {
      id: "bathroom",
      name: "Bathroom",
      icon: "bath",
      pricing: { basic: 7000, standard: 15000, premium: 25000, luxury: 45000 },
    },
    {
      id: "home-office",
      name: "Home Office",
      icon: "briefcase",
      pricing: { basic: 10000, standard: 20000, premium: 35000, luxury: 60000 },
    },
    {
      id: "balcony",
      name: "Balcony",
      icon: "flower",
      pricing: { basic: 5000, standard: 12000, premium: 20000, luxury: 35000 },
    },
  ],

  areaPricing: [
    { id: "basic", name: "Basic Interior", minPrice: 1200, maxPrice: 1800, unit: "sq.ft." },
    { id: "standard", name: "Standard Interior", minPrice: 1800, maxPrice: 2800, unit: "sq.ft." },
    { id: "premium", name: "Premium Interior", minPrice: 2800, maxPrice: 4500, unit: "sq.ft." },
    { id: "luxury", name: "Luxury Interior", minPrice: 4500, maxPrice: 7500, unit: "sq.ft." },
    { id: "ultra-luxury", name: "Ultra Luxury", minPrice: 7500, maxPrice: 12000, unit: "sq.ft." },
  ],

  styles: [
    { id: "minimalist", name: "Minimalist", priceRange: { min: 1500, max: 3000 }, unit: "sq.ft." },
    { id: "modern", name: "Modern", priceRange: { min: 1800, max: 3500 }, unit: "sq.ft." },
    { id: "scandinavian", name: "Scandinavian", priceRange: { min: 2000, max: 3800 }, unit: "sq.ft." },
    { id: "contemporary", name: "Contemporary", priceRange: { min: 2500, max: 4500 }, unit: "sq.ft." },
    { id: "traditional-nepali", name: "Traditional Nepali", priceRange: { min: 2500, max: 5000 }, unit: "sq.ft." },
    { id: "newari", name: "Newari Inspired", priceRange: { min: 3000, max: 6000 }, unit: "sq.ft." },
    { id: "modern-nepali", name: "Modern Nepali", priceRange: { min: 3000, max: 5500 }, unit: "sq.ft." },
    { id: "himalayan-rustic", name: "Himalayan Rustic", priceRange: { min: 3000, max: 6000 }, unit: "sq.ft." },
    { id: "luxury-modern", name: "Luxury Modern", priceRange: { min: 4000, max: 7500 }, unit: "sq.ft." },
    { id: "classic-luxury", name: "Classic Luxury", priceRange: { min: 5000, max: 9000 }, unit: "sq.ft." },
  ],

  materials: {
    flooring: [
      { id: "ceramic", name: "Ceramic Tiles", minPrice: 120, maxPrice: 250, unit: "sq.ft." },
      { id: "vitrified", name: "Vitrified Tiles", minPrice: 180, maxPrice: 400, unit: "sq.ft." },
      { id: "marble", name: "Marble", minPrice: 350, maxPrice: 900, unit: "sq.ft." },
      { id: "granite", name: "Granite", minPrice: 300, maxPrice: 800, unit: "sq.ft." },
      { id: "wood", name: "Wooden Flooring", minPrice: 400, maxPrice: 1200, unit: "sq.ft." },
      { id: "spc", name: "SPC Flooring", minPrice: 250, maxPrice: 600, unit: "sq.ft." },
    ],
    walls: [
      { id: "standard-paint", name: "Standard Paint", minPrice: 35, maxPrice: 70, unit: "sq.ft." },
      { id: "premium-paint", name: "Premium Paint", minPrice: 60, maxPrice: 120, unit: "sq.ft." },
      { id: "wallpaper", name: "Wallpaper", minPrice: 100, maxPrice: 350, unit: "sq.ft." },
      { id: "decorative-panel", name: "Decorative Wall Panel", minPrice: 250, maxPrice: 700, unit: "sq.ft." },
      { id: "wood-panel", name: "Wood/Laminate Panel", minPrice: 400, maxPrice: 1000, unit: "sq.ft." },
      { id: "stone-wall", name: "Stone Feature Wall", minPrice: 500, maxPrice: 1500, unit: "sq.ft." },
    ],
  },

  kitchen: [
    { id: "basic", name: "Basic Modular Kitchen", minPrice: 200000, maxPrice: 350000 },
    { id: "standard", name: "Standard Modular Kitchen", minPrice: 350000, maxPrice: 600000 },
    { id: "premium", name: "Premium Kitchen", minPrice: 600000, maxPrice: 1000000 },
    { id: "luxury", name: "Luxury Kitchen", minPrice: 1000000, maxPrice: 2000000 },
  ],

  furniture: [
    { id: "sofa", name: "Sofa Set", minPrice: 60000, maxPrice: 400000 },
    { id: "bed", name: "Bed", minPrice: 40000, maxPrice: 300000 },
    { id: "wardrobe", name: "Wardrobe", minPrice: 50000, maxPrice: 300000 },
    { id: "dining-table", name: "Dining Table", minPrice: 35000, maxPrice: 250000 },
    { id: "tv-unit", name: "TV Unit", minPrice: 25000, maxPrice: 150000 },
    { id: "study-table", name: "Study Table", minPrice: 15000, maxPrice: 80000 },
    { id: "coffee-table", name: "Coffee Table", minPrice: 10000, maxPrice: 60000 },
  ],

  lighting: [
    { id: "downlight", name: "LED Downlight", minPrice: 500, maxPrice: 2000, unit: "piece" },
    { id: "pendant", name: "Pendant Light", minPrice: 3000, maxPrice: 25000, unit: "piece" },
    { id: "chandelier", name: "Chandelier", minPrice: 15000, maxPrice: 200000, unit: "piece" },
    { id: "cove", name: "Cove Lighting", minPrice: 250, maxPrice: 600, unit: "ft" },
    { id: "track", name: "Track Lighting", minPrice: 2000, maxPrice: 8000, unit: "set" },
    { id: "smart", name: "Smart Lighting Setup", minPrice: 25000, maxPrice: 150000, unit: "project" },
  ],

  services: [
    { id: "consultation", name: "Initial Consultation", price: 3000, unit: "session" },
    { id: "site-visit", name: "Site Visit", minPrice: 3000, maxPrice: 10000, unit: "visit" },
    { id: "floor-plan", name: "2D Floor Plan", minPrice: 5000, maxPrice: 20000, unit: "project" },
    { id: "3d-design", name: "3D Interior Design", minPrice: 8000, maxPrice: 30000, unit: "room" },
    { id: "walkthrough", name: "3D Walkthrough", minPrice: 20000, maxPrice: 75000, unit: "project" },
    { id: "material-selection", name: "Material Selection", minPrice: 10000, maxPrice: 30000, unit: "project" },
    { id: "furniture-planning", name: "Furniture Planning", minPrice: 10000, maxPrice: 35000, unit: "project" },
    { id: "lighting-plan", name: "Lighting Plan", minPrice: 8000, maxPrice: 25000, unit: "project" },
  ],

  additionalCosts: [
    { id: "designer-fee", name: "Designer Fee", minPercent: 5, maxPercent: 15, type: "percentage" },
    { id: "project-management", name: "Project Management", minPercent: 5, maxPercent: 10, type: "percentage" },
    { id: "execution", name: "Execution & Labour", minPercent: 10, maxPercent: 25, type: "percentage" },
    { id: "transport", name: "Transportation", minPrice: 5000, maxPrice: 50000, type: "fixed" },
    { id: "smart-home", name: "Smart Home Integration", minPrice: 50000, maxPrice: 500000, type: "project" },
    { id: "contingency", name: "Contingency", minPercent: 5, maxPercent: 10, type: "percentage" },
  ],

  calculator: {
    enabled: true,
    formula: "area × pricePerSqFt",
    qualityLevels: [
      { id: "basic", name: "Basic", multiplier: 1.0 },
      { id: "standard", name: "Standard", multiplier: 1.4 },
      { id: "premium", name: "Premium", multiplier: 2.0 },
      { id: "luxury", name: "Luxury", multiplier: 3.0 },
    ],
  },

  payment: {
    depositPercent: 30,
    designApprovalPercent: 30,
    executionPercent: 30,
    completionPercent: 10,
  },

  quotation: {
    validityDays: 15,
    taxIncluded: false,
    customQuotation: true,
    siteVisitRequired: true,
    note: "Final quotation will be prepared after reviewing the site, measurements, materials and client requirements.",
  },
} as const
