import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

interface ProductState {
  products: Product[];
  categories: string[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [
    {
      id: '1',
      name: 'Business Cards',
      category: 'Business',
      basePrice: 299,
      image: '/api/placeholder/300/200',
      description: 'Professional business cards with premium finish',
      customizable: true,
      sizes: ['Standard', 'Mini', 'Square'],
      colors: ['White', 'Cream', 'Black']
    },
    {
      id: '2',
      name: 'Custom T-Shirts',
      category: 'Apparel',
      basePrice: 599,
      image: '/api/placeholder/300/200',
      description: 'High-quality custom printed t-shirts',
      customizable: true,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Navy', 'Red', 'Green']
    },
    {
      id: '3',
      name: 'Photo Mugs',
      category: 'Gifts',
      basePrice: 399,
      image: '/api/placeholder/300/200',
      description: 'Personalized mugs with your photos',
      customizable: true,
      sizes: ['11oz', '15oz'],
      colors: ['White', 'Black', 'Blue']
    },
    {
      id: '4',
      name: 'Flyers',
      category: 'Marketing',
      basePrice: 199,
      image: '/api/placeholder/300/200',
      description: 'Eye-catching flyers for your business',
      customizable: true,
      sizes: ['A4', 'A5', 'A6']
    },
    {
      id: '5',
      name: 'Letterheads',
      category: 'Stationery',
      basePrice: 249,
      image: '/api/placeholder/300/200',
      description: 'Professional letterheads for your company',
      customizable: true,
      sizes: ['A4']
    },
    {
      id: '6',
      name: 'Canvas Prints',
      category: 'Gifts',
      basePrice: 899,
      image: '/api/placeholder/300/200',
      description: 'Beautiful canvas prints of your memories',
      customizable: true,
      sizes: ['12x16', '16x20', '20x24']
    }
  ],
  categories: ['Business', 'Apparel', 'Gifts', 'Marketing', 'Stationery'],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;