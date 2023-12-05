import React from "react";
import { CartPage } from "../pages/CartPage";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="carrito-modal">
        <button onClick={closeModal}>X</button>
        <div>
            <p className="shopping_cart_title">Shopping Cart Kleidung</p>
            <CartPage></CartPage>
        </div>
        
    </div>
  );
};

export default Modal;