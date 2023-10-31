import { useContext } from "react";
import { ShopContext } from '../context/shopContext';
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import '../../src/App.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div>
        <h1 className="font-bold text-center text-xl">Cart</h1>
      </div>
      <div className="cartItems">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="flex-col justify-center items-center mx-auto mt-8">
          <p className="font-bold"> Subtotal: ${totalAmount} </p>
          <div className="flex gap-2">
            <button className="p-2 mt-2 rounded bg-gray-300 font-semibold" onClick={() => navigate("/")}> Continue Shopping </button>
            <button className="p-2 mt-2 rounded bg-gray-300 font-semibold"> Checkout </button>
          </div>
        </div>
      ) : (
        <h1> Your Cart is Empty </h1>
      )}
    </div>
  );
};

export default Cart;
