import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import useUser from "../../Hooks/useUser";
import { baseURL } from "../../shared/baseUrl";

const CheckoutWithStudent = ({ student }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,

    cartTotal,
  } = useCart();
  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title"> Checkout</h1>
          </div>
        </div>
        <div className="page-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current"> Checkout</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="checkout-section section section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" className="checkout-form">
                <div className="row row-40">
                  <div className="col-lg-7">
                    <div id="billing-form" className="mb-10">
                      <h4 className="checkout-title">Billing Address</h4>

                      <div className="row">
                        <div className="col-md-6 col-12 mb-20">
                          <label>First Name*</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={student.name}
                            disabled
                          />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Email Address*</label>
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={student.email}
                            disabled
                          />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Phone no*</label>
                          <input
                            type="text"
                            placeholder="Phone number"
                            value={student.phone}
                            disabled
                          />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Aspired Degree*</label>
                          <select>
                            <option>Bangladesh</option>
                            <option>China</option>
                            <option>country</option>
                            <option>India</option>
                            <option>Japan</option>
                          </select>
                        </div>

                        <div className="col-md-12 col-12 mb-20">
                          <label>Aspired College*</label>
                          <select>
                            <option>Bangladesh</option>
                            <option>China</option>
                            <option>country</option>
                            <option>India</option>
                            <option>Japan</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div id="shipping-form">
                      <h4 className="checkout-title">Shipping Address</h4>

                      <div className="row">
                        <div className="col-md-6 col-12 mb-20">
                          <label>Full Name*</label>
                          <input type="text" placeholder="First Name" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Email Address*</label>
                          <input type="email" placeholder="Email Address" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Phone no*</label>
                          <input type="text" placeholder="Phone number" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-12 max-mb-60">
                        <h4 className="checkout-title">Cart Total</h4>

                        <div className="checkout-cart-total">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {items.map((item, itemIndex) => (
                                <tr>
                                  <td>
                                    <b>{itemIndex + 1}</b>
                                  </td>
                                  <td>
                                    <b> {item.name} </b>
                                    <br></br>
                                    <span class="badge bg-primary">
                                      {item.type}
                                    </span>{" "}
                                    <span class="badge bg-primary">
                                      {item.subject}
                                    </span>
                                  </td>
                                  <td>{item.price}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          <h4>
                            Grand Total <span> {cartTotal}.00</span>
                          </h4>
                        </div>

                        <div className="col-lg-12 col-12 max-mb-30 my-3">
                          <div className="discount-coupon">
                            <form action="#">
                              <div className="row max-mb-n30">
                                <div className="col-md-6 col-12 max-mb-30">
                                  <input
                                    type="text"
                                    placeholder="Coupon Code"
                                  />
                                </div>
                                <div className="col-md-6 col-12 max-mb-30">
                                  <button className="btn btn-primary btn-hover-secondary">
                                    Apply Code
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>

                        <button className="btn btn-primary btn-hover-secondary btn-width-100 mt-40">
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CheckOutPageNew = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,

    cartTotal,
  } = useCart();

  const student = useUser();

  if (student) {
    return <CheckoutWithStudent student={student} />;
  }

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title"> Checkout</h1>
          </div>
        </div>
        <div className="page-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current"> Checkout</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="checkout-section section section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" className="checkout-form">
                <div className="row row-40">
                  <div className="col-lg-7">
                    <div id="billing-form" className="mb-10">
                      <h4 className="checkout-title">Billing Address</h4>

                      <div className="row">
                        <div className="col-md-6 col-12 mb-20">
                          <label>First Name*</label>
                          <input type="text" placeholder="First Name" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Email Address*</label>
                          <input type="email" placeholder="Email Address" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Phone no*</label>
                          <input type="text" placeholder="Phone number" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Aspired Degree*</label>
                          <select>
                            <option>Bangladesh</option>
                            <option>China</option>
                            <option>country</option>
                            <option>India</option>
                            <option>Japan</option>
                          </select>
                        </div>

                        <div className="col-md-12 col-12 mb-20">
                          <label>Aspired College*</label>
                          <select>
                            <option>Bangladesh</option>
                            <option>China</option>
                            <option>country</option>
                            <option>India</option>
                            <option>Japan</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div id="shipping-form">
                      <h4 className="checkout-title">Shipping Address</h4>

                      <div className="row">
                        <div className="col-md-6 col-12 mb-20">
                          <label>Full Name*</label>
                          <input type="text" placeholder="First Name" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Email Address*</label>
                          <input type="email" placeholder="Email Address" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                          <label>Phone no*</label>
                          <input type="text" placeholder="Phone number" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-12 max-mb-60">
                        <h4 className="checkout-title">Cart Total</h4>

                        <div className="checkout-cart-total">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {items.map((item, itemIndex) => (
                                <tr>
                                  <td>
                                    <b>{itemIndex + 1}</b>
                                  </td>
                                  <td>
                                    <b> {item.name} </b>
                                    <br></br>
                                    <span class="badge bg-primary">
                                      {item.type}
                                    </span>{" "}
                                    <span class="badge bg-primary">
                                      {item.subject}
                                    </span>
                                  </td>
                                  <td>{item.price}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          <h4>
                            Grand Total <span> {cartTotal}.00</span>
                          </h4>
                        </div>

                        <div className="col-lg-12 col-12 max-mb-30 my-3">
                          <div className="discount-coupon">
                            <form action="#">
                              <div className="row max-mb-n30">
                                <div className="col-md-6 col-12 max-mb-30">
                                  <input
                                    type="text"
                                    placeholder="Coupon Code"
                                  />
                                </div>
                                <div className="col-md-6 col-12 max-mb-30">
                                  <button className="btn btn-primary btn-hover-secondary">
                                    Apply Code
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>

                        <button className="btn btn-primary btn-hover-secondary btn-width-100 mt-40">
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPageNew;
