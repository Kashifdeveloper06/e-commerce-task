import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
}

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (!state.products.some((p) => p.id === product.id)) {
        state.products.push(product);
      }
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(
        (item) => item.id !== productIdToRemove
      );
    },
    emptyCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
