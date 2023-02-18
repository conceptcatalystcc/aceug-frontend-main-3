import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import { useAuth } from "../../contexts/AuthContext";
import CartItem from "./CartItem";
import { baseURL } from "../../shared/baseUrl";

const Header = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,

    cartTotal,
  } = useCart();

  const { currentUser } = useAuth();

  return (
    <>
      <div className="header-inner">
        <div className="container position-relative">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-2 col-auto">
              <div className="header-logo">
                <a href="/">
                  <img
                    className="dark-logo"
                    src="/assets/images/logo/aceug_logo.jpg"
                    alt="Learts Logo"
                    width="100px"
                    height="100px"
                  />
                  <img
                    className="light-logo"
                    src="/assets/images/logo/aceug_logo.jpg"
                    alt="Learts Logo"
                  />
                </a>
              </div>
            </div>

            <div className="col d-none d-xl-block position-static">
              <nav className="site-main-menu menu-hover-1">
                <ul>
                  <li className="has-children position-static">
                    <a href="/">Home</a>
                  </li>
                  <li className="has-children">
                    <a href="/courses">Courses</a>
                  </li>
                  <li className="has-children">
                    <a href="/test-series">Test Series</a>
                  </li>
                  <li className="has-children">
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li className="has-children">
                    <a href="/about-us">About</a>
                  </li>
                  {currentUser ? (
                    <>
                      <li className="has-children">
                        <a href="/student-dashboard">Student Dashboard</a>
                      </li>
                      <li className="has-children">
                        <a href="/logout">Logout</a>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}
                </ul>
              </nav>
            </div>

            <div className="col-xl-2 col-auto">
              <div className="header-right">
                <div className="inner">
                  <div className="header-cart">
                    <a className="header-cart-btn" href="/cart">
                      <span className="cart-count">{totalUniqueItems}</span>
                      <i className="far fa-shopping-cart"></i>
                    </a>

                    <div className="header-mini-cart">
                      <div className="inner">
                        <div className="mini-cart-products">
                          {items.map((item) => {
                            return <CartItem item={item} />;
                          })}
                        </div>

                        {items.length === 0 ? (
                          <>Your Cart Is Empty</>
                        ) : (
                          <div className="mini-cart-footer">
                            <div className="mini-cart-total">
                              <b>Total:</b>
                              <span className="amount">${cartTotal}.00</span>
                            </div>
                            <div className="mini-cart-buttons">
                              <a
                                href="/cart"
                                className="btn btn-primary btn-hover-secondary"
                              >
                                View Cart
                              </a>
                              <a
                                href="/checkout"
                                className="btn btn-primary btn-hover-secondary"
                              >
                                Checkout
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="header-login">
                    <a href={currentUser ? "/profile" : "/login"}>
                      <i className="far fa-user-circle"></i>
                    </a>
                  </div>

                  <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                    <button className="toggle">
                      <i className="icon-top"></i>
                      <i className="icon-middle"></i>
                      <i className="icon-bottom"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
