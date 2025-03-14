import { FiHeart } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { RiUserAddFill } from "react-icons/ri";

import "./Nav.css";

function Nav({ handleInputChange }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          className="search-input"
          type="text"
          placeholder="Enter your search shoes"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icon" />
          <TiShoppingCart className="nav-icon" />
          <RiUserAddFill className="nav-icon" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
