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
  productsPerPage: 3,
  totalPages: null,
  currentPage: 1,
  loading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products.push(...action.payload);
      state.totalPages = state.products.length / state.productsPerPage;
      state.loading = false;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setOnPreviousPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    setOnNextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
  },
});

export const { setProducts, setCurrentPage, setOnPreviousPage, setOnNextPage } =
  productsSlice.actions;
export default productsSlice.reducer;
