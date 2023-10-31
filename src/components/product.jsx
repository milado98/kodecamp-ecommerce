import { useContext } from "react";
import { ShopContext } from '../context/shopContext';
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, image, rating } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="px-4 py-5 border rounded-md shadow-lg">
      <Link className="" to={`/products/${id}`}>
        <div
          className={`w-[90%] h-[200px] bg-no-repeat bg-center bg-contain mb-3`}
          style={{
            
            backgroundImage: `url(${image})`,
          }}
        >
        </div>
        <div className="description">
          <div className="w-[250px] truncate">
            <b className="font-semibold">{title}</b>
          </div>
          <p className="font-semibold">Rating: {rating.rate}/5</p>
          <p className="font-semibold">
            <span>Price: </span>${price}
          </p>
        </div>
      </Link>
      <div className="flex-col justify-center items-center">
        <button className="p-2 mt-2 rounded bg-gray-300 font-semibold" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
