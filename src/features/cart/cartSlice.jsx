import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //! clearCart là một action
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload; //! Lấy id của sản phẩm từ action.payload
      //! filter() tạo ra mảng mới chứa tất cả các phần tử mà hàm callback trả về true.
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
