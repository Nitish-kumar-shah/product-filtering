import Input from "../../components/Input";
import "./Color.css";

function Color({ handleCheckBoxChange }) {
  return (
    <div className="color-container">
      <h2 className="sidebar-title price-title">Colors</h2>

      <label className="sidebar-label-container">
        <input
          onChange={handleCheckBoxChange}
          type="radio"
          value=""
          name="test2"
        />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleCheckBoxChange={handleCheckBoxChange}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />
      <Input
        handleCheckBoxChange={handleCheckBoxChange}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />
      <Input
        handleCheckBoxChange={handleCheckBoxChange}
        value="red"
        title="Red"
        name="test3"
        color="red"
      />
      <Input
        handleCheckBoxChange={handleCheckBoxChange}
        value="green"
        title="Green"
        name="test3"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleCheckBoxChange}
          value="white"
          name="test3"
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "1px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
}

export default Color;
