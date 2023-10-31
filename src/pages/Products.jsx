import { useContext } from "react";
import Product from "../components/product";
import { ShopContext } from "../context/shopContext";

const Shop = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div className="m">
      <div className="grid grid-col-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3 gap-4 w-[90%] mx-auto">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
