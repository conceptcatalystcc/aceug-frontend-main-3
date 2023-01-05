import React, { useState } from "react";
import { useCart } from "react-use-cart";

export const Cart = () => {
  const { items, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <>
        <div className="page-title-section section">
          <div className="page-title">
            <div className="container">
              <h1 className="title">Your Cart is Empty</h1>
            </div>
          </div>
          <div className="page-breadcrumb">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">Cart</h1>
          </div>
        </div>
        <div className="page-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Cart</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cart-section section section-padding-bottom">
        <div className="container faq-wrapper">
          <div className="row">
            <div className="col-12">
              <div className="cart-table table-responsive max-mb-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="pro-title">Product</th>
                      <th className="pro-price">Price</th>

                      <th className="pro-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      return (
                        <tr>
                          <td className="pro-title">
                            <a href="#">{item.name}</a>
                          </td>
                          <td className="pro-price">
                            <span>{item.price}</span>
                          </td>

                          <td className="pro-remove">
                            <a onClick={() => removeItem(item.id)}>
                              <i className="far fa-trash-alt"></i>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
