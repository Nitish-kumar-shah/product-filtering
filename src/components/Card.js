import { FaBagShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function Card({ img, title, star, reviwes, newPrice, prevPrice }) {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-titel">{title}</h3>
        {/* card-reviews */}
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews">{reviwes}</span>
        </section>
        {/* card-price */}
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <FaBagShopping className="bag-icon" />
        </section>
      </div>
    </section>
  );
}

export default Card;
