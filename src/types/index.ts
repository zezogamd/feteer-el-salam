export type CategoryId = 'all' | 'pizza' | 'feteer' | 'sandwiches' | 'sides' | 'drinks' | 'offers';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  sizes?: { name: string; price: number }[];
  isPopular?: boolean;
  isOffer?: boolean;
  badge?: string;
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  selectedSize?: string;
  price: number;
  quantity: number;
  notes?: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  items: string[];
  image: string;
  expiresIn?: string;
}
