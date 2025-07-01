export interface Product {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  image: string;
  description: string;
  customizable: boolean;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  customization?: {
    text?: string;
    images?: string[];
    size?: string;
    color?: string;
  };
  totalPrice: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: Address;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}