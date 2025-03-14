import { FaBagShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function Card() {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg"
        alt="shoe"
        className="card-img"
      />
      <div className="card-details">
        <h3 className="card-titel">Shoe</h3>
        {/* card-reviews */}
        <section className="card-reviews">
          <FaStar className="rating-star" /> <FaStar className="rating-star" />{" "}
          <FaStar className="rating-star" /> <FaStar className="rating-star" />
          <span className="total-reviews">123</span>
        </section>
        {/* card-price */}
        <section className="card-price">
          <div className="price">
            <del>$300</del> 200
          </div>
          <FaBagShopping className="bag-icon" />
        </section>
      </div>
    </section>
  );
}

export default Card;
