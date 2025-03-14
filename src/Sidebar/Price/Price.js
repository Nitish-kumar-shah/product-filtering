import Input from "../../components/Input";
import "./Price.css";

function Price({ handleCheckBoxChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleCheckBoxChange}
          type="radio"
          value=""
          name="test2"
        />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleCheckBoxChange={handleCheckBoxChange}
        value={50}
        title="$ - 50"
        name="test2"
      />
      <Input
        handleCheckBoxChange={handleCheckBoxChange}
        value={100}
        title="$50 - 100"
        name="test2"
      />
      <Input
        handleCheckBoxChange={handleCheckBoxChange}
        value={150}
        title="$100 - 150"
        name="test2"
      />
      <Input
        handleCheckBoxChange={handleCheckBoxChange}
        value={200}
        title="$150 - 200"
        name="test2"
      />
    </div>
  );
}

export default Price;
