export type BookPage = {
  kind: 'room'
  title: string
  image: string
  description: string
  variant: 'cover' | 'paper'
}

export type Sheet = {
  front: BookPage
  back: BookPage
}

const cover: BookPage = {
  kind: 'room',
  title: 'Room Designs',
  image: '/rooms-book/cover.png',
  description: 'Explore our collection of stunning room designs',
  variant: 'cover'
}

const livingRoom: BookPage = {
  kind: 'room',
  title: 'Living Room',
  image: '/rooms-book/coast.png',
  description: 'Transform your living space into a warm, inviting gathering place. From cozy minimalism to luxurious entertaining spaces.',
  variant: 'paper'
}

const bedroom: BookPage = {
  kind: 'room',
  title: 'Bedroom',
  image: '/rooms-book/lighthouse.png',
  description: 'Create your personal sanctuary with bedroom designs that prioritize comfort, tranquility, and personal style.',
  variant: 'paper'
}

const kitchen: BookPage = {
  kind: 'room',
  title: 'Kitchen',
  image: '/rooms-book/ocean-sunset.png',
  description: 'Design the heart of your home with functional, beautiful kitchen spaces with modern layouts.',
  variant: 'paper'
}

const diningRoom: BookPage = {
  kind: 'room',
  title: 'Dining Room',
  image: '/rooms-book/palm.png',
  description: 'Elevate your dining experience with elegant dining room designs for memorable gatherings.',
  variant: 'paper'
}

const bathroom: BookPage = {
  kind: 'room',
  title: 'Bathroom',
  image: '/rooms-book/red-mountains.png',
  description: 'Transform your bathroom into a spa-like retreat with luxurious fixtures and calming colors.',
  variant: 'paper'
}

const cafe: BookPage = {
  kind: 'room',
  title: 'Cafe',
  image: '/rooms-book/red-sky.png',
  description: 'Design inviting cafe spaces that blend comfort with functionality for memorable experiences.',
  variant: 'paper'
}

const backCover: BookPage = {
  kind: 'room',
  title: 'Room Designs',
  image: '/rooms-book/waterfall.png',
  description: 'Contact us to transform your space',
  variant: 'cover'
}

// Build sheets: front cover -> room pages -> back cover.
export const sheets: Sheet[] = [
  { front: cover, back: livingRoom },
  { front: bedroom, back: kitchen },
  { front: diningRoom, back: bathroom },
  { front: cafe, back: backCover },
]
