import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1 className="text-center md:text-xl text-sm font-bold mb-6 mt-4 w-11/12 mx-auto">
        {product.title}
      </h1>
      <div className="w-[80%] mx-auto flex justify-between rounded-2xl shadow-lg border-2 p-4">
        <div
          className="basis-[40%] h-[400px] bg-contain bg-no-repeat bg-center items-center"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        >
          {/* <img src={product.image} alt={product.title} /> */}
        </div>
        <div className="basis-[58%] relative pt-7 pb-10">
          <p className="mb-4 text-sm md:text-xl">
            <span className="font-bold">Description : </span>
            {product.description}
          </p>
          <p className="mb-4 text-sm md:text-xl">
            <span className="font-bold">Catergory : </span>
            {product.category}
          </p>
          <p className="text-sm md:text-xl">
            <span className="font-bold">Price:</span> ${product.price}
          </p>
          <div className="absolute inset-x-0 bottom-0">
            <button className="p-2 mt-2 rounded bg-gray-300 font-semibold" onClick={() => addToCart(id)}>
              Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
          </div>
        </div>
      </div>
      {/* Add more product details here */}
    </div>
  );
}

export default SingleProduct;
