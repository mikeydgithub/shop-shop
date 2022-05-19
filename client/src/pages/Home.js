import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  // currentCategory is passed to the ProductList component as a prop and instructs which categorys products should be retrieved using Apollo.
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      {/*setCatgeory is set a value */}
      <CategoryMenu setCategory={setCategory} />
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
