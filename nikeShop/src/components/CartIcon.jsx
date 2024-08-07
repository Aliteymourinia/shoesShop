import React, { useContext } from "react";
import { CartContext } from "../Context/Cart";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container relative">
      <Link to="/cart" className="cart-icon relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m10-8l2 8m-6-4h4"
          />
        </svg>
        {cartItemCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs h-4 w-4 flex items-center justify-center">
            {cartItemCount}
          </div>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
