export interface Shoe {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
}

export interface CartItem extends Shoe {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}