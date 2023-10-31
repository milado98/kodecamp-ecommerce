import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { ShopContext } from "../context/shopContext";

export const CartItem = (props) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="w-[100%] flex justify-between gap-1 h-[200px] mt-10 mx-auto rounded-2xl shadow-lg border-2 p-4">
      <Link to={`/products/${id}`} className='basis-[40%]'><img src={image} className="h-[100%]"/></Link>
      <div className="basis-[59%] pt-10">
        <Link to={`/products/${id}`}><p className="mb-3 font-bold truncate w-[160px]">{title}</p></Link>
        <p className="mb-3 font-bold">${price}</p>
        <div className="flex">
          <button className="font-bold" onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="w-[30px] text-center font-semibold"
          />
          <button className="font-bold" onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
