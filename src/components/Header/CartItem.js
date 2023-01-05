import React from "react";
import { useCart } from "react-use-cart";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();
  return (
    <div className="mini-cart-product">
      <a href="#" className="thumb">
        <img src="/assets/images/products/mini-cart/product-1.jpg" alt="" />
      </a>
      <div className="content">
        <a href="#" className="title">
          {item.name}
        </a>
        <span className="quantity">
          1 x <span className="price">₹ {item.price}</span>
        </span>
      </div>
      <a className="remove" onClick={() => removeItem(item.id)}>
        <i className="far fa-times"></i>
      </a>
    </div>
  );
};

export default CartItem;
