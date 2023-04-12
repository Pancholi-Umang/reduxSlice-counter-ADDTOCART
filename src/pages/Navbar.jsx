import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const getNumbers = useSelector((state) => state.cart.cartItems);
  return (
    <>
        <Link to="/cart" className="cart-icon">
          <i className="fa fa-shopping-cart"></i>
          <span className="cart-counter">{getNumbers.length}</span>
        </Link>
    </>
  )
}

export default Navbar