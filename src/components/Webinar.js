import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Webinar = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <div class="page-title-section section">
        <div class="page-title">
          <div class="container">
            <h1 class="title">CUET Webinar 2023</h1>
          </div>
        </div>
      </div>

      <div class="section section-padding-bottom">
        <div class="container">
          <div class="row max-mb-n50">
            <div class="col-lg-8 col-12 order-lg-1 max-mb-50">
              <div class="zoom-event-details-wrapper">
                <div class="image">
                  <img
                    src="/assets/images/event/event-details/event-details.jpg"
                    alt=""
                  />
                </div>
                <div class="content">
                  <h3 class="title">I. Marketing Budget</h3>
                  <ol>
                    <li>2013 carry over – 12,000$</li>
                    <li>2014 budget – $16,500</li>
                  </ol>
                  <h3 class="title">II. Marketing Plan</h3>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
              <div class="sidebar-widget-wrapper pr-0 pl-30 pl-md-0 pl-sm-0 pl-xs-0">
                <div class="sidebar-widget">
                  <div class="sidebar-widget-content">
                    <div class="sidebar-entry-event-info">
                      <h3 class="title">Details</h3>
                      <div class="event-meta">
                        <div class="event-content-list">
                          <span class="name">Hosted By</span>
                          <span class="value">AceUG</span>
                        </div>

                        <div class="event-content-list">
                          <span class="name">Start</span>
                          <span class="value">Feb 15, 2023 8:30 PM</span>
                        </div>

                        <div class="event-content-list">
                          <span class="name">Duration</span>
                          <span class="value">45 minutes</span>
                        </div>
                      </div>
                      <div class="lp-event-buttons">
                        <button
                          class="btn btn-primary btn-hover-secondary btn-width-100"
                          onClick={handleShow}
                        >
                          Register for FREE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            We just need some details to let you in the Webinar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form name="contact" method="post">
            <div class="form-group">
              <label for="exampleInputPassword1">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Full Name"
                name="fullname"
              />
            </div>

            <input type="hidden" name="form-name" value="contact" />

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Whatsapp Number"
                name="phone"
              />
            </div>
            <br />
            <center>
              {" "}
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </center>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Webinar;
