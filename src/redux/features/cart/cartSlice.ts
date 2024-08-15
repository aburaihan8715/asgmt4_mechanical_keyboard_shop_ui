import { TProduct } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TCartState = {
  products: TProduct[];
  quantity: number;
  total: number;
};

const initialState: TCartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const product = action.payload;
      const productQuantity = product.quantity ?? 1;

      state.quantity += productQuantity;
      state.products.push({ ...product });
      state.total += product.price * productQuantity;
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (item) => item._id === action.payload
      );

      if (product) {
        product.quantity = (product.quantity ?? 1) + 1;
        state.total += product.price;
        state.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (item) => item._id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
        state.quantity -= 1;
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (item) => item._id === action.payload
      );

      if (product) {
        const productQuantity = product.quantity ?? 1;
        state.quantity -= productQuantity;
        state.total -= product.price * productQuantity;

        state.products = state.products.filter(
          (item) => item._id !== action.payload
        );
      }
    },
    completedOrder: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  completedOrder,
} = cartSlice.actions;
export default cartSlice.reducer;
