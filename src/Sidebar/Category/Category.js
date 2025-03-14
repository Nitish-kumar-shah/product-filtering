import Input from "../../components/Input";
import "./Category.css";

function Category({ handleCheckBoxChange }) {
  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleCheckBoxChange}
            type="radio"
            value=""
            name="test"
          />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleCheckBoxChange={handleCheckBoxChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleCheckBoxChange={handleCheckBoxChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleCheckBoxChange={handleCheckBoxChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleCheckBoxChange={handleCheckBoxChange}
          value="heals"
          title="Helas"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
