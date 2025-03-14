import "./Sidebar.css";
import { IoCartSharp } from "react-icons/io5";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";

function Sidebar({ handleCheckBoxChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <IoCartSharp className="cart-icon" />
        </div>

        <Category handleCheckBoxChange={handleCheckBoxChange} />
        <Price handleCheckBoxChange={handleCheckBoxChange} />
        <Color handleCheckBoxChange={handleCheckBoxChange} />
      </section>
    </>
  );
}

export default Sidebar;
