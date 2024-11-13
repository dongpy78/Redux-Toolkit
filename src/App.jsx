import { useEffect } from "react";

import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  //! useSelector là một hook của React Redux dùng để truy xuất dữ liệu từ store Redux.
  const { cartItems } = useSelector((state) => state.cart); //! state.cart chứa thông tin giỏ hàng
  const dispatch = useDispatch(); //! để gửi action vào Redux store.
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals()); //! Gửi dispatch(calculateTotals()) đến action để xử lý
  }, [cartItems]); //!  Khi cartItems thay đổi, useEffect sẽ được kích hoạt lại
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
