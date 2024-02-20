import React, { useContext } from "react";
import CartItems from "../Components/CartItems/CartItems";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <CartItems />
      <Footer />
    </>
  );
};

export default Cart;
