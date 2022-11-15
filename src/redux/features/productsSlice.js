import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../api/api";

export const fetchUsers = createAsyncThunk(
  "products/fetchProducts",
  async (_, { dispatch }) => {
    const response = await productsApi.getProducts();
    dispatch(setProducts(response?.data?.products));
  }
);

const initialState = {
  products: [],
  currentPage: 1,
  productsPerPage: 4,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products.push(...action.payload);
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { setProducts, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;
