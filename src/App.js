import { useState } from "react";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";

//Database----------------------
import products from "./db/data";
import Card from "./components/Card";

function App() {
  //-------------useState--------
  const [selectedCtegory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //----------------Input Filter---------------

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //----------------Radio Filter---------------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //----------------Button Filter---------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviwes, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviwes={reviwes}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
