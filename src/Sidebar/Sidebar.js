import "./Sidebar.css";
import { IoCartSharp } from "react-icons/io5";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <IoCartSharp className="cart-icon" />
        </div>

        <Category />
        <Price />
        <Color />
      </section>
    </>
  );
}

export default Sidebar;
