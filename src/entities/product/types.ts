export interface ProductStory {
  inspiration: string
  creation: string
  meaning: string
  vibe: string
}

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  categoryLabel: string
  sizes: string[]
  colors: string[]
  description: string
  story: ProductStory
  isNew: boolean
  isFeatured: boolean
  tags: string[]
}
