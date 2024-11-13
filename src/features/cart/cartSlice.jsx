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
    increase: (state, { payload }) => {
      //! payload sẽ chứa một đối tượng, có thể có dạng { id: 1 }
      const cartItem = state.cartItems.find((item) => item.id === payload.id); //! Tìm sản phẩm trong giỏ hàng có ID trùng với payload.id.
      cartItem.amount = cartItem.amount + 1; //! Tăng số lượng (amount) của sản phẩm đó lên 1.
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
