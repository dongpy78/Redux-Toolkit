import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

function Navbar() {
  //! useSelector là một hook trong react redux cho phép truy xuất dữ liệu từ Redux store.
  const { amount } = useSelector((store) => store.cart);
  console.log(amount);
  return (
    <nav className="nav-center">
      <h3>Redux tookit</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
