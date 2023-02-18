import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">Contact Us</h1>
          </div>
        </div>
      </div>
      <div class="contact-information-section section section-padding-bottom">
        <div class="container">
          <div class="row margin-bottom-85">
            <div class="col-12">
              <div class="contact-title max-width-740">
                <h2 class="title">
                  For more information about our courses, get in touch with
                  MaxCoach via contacts
                </h2>
              </div>
            </div>
          </div>
          <div class="row row-30 row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
            <div class="col max-mb-30">
              <div class="contact-info">
                <div class="icon">
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div class="info">
                  <h4 class="title"> Address</h4>
                  <span class="info-text">
                    {" "}
                    3, 28/5A, First Floor, Double Storey, Ashok Nagar Near Metro
                    Station, Tilak Nagar, New Delhi, Delhi 110018
                  </span>
                </div>
              </div>
            </div>
            <div class="col max-mb-30">
              <div class="contact-info">
                <div class="icon">
                  <i class="fal fa-phone"></i>
                </div>
                <div class="info">
                  <h4 class="title"> Contact</h4>
                  <span class="info-text">
                    {" "}
                    Mobile:{" "}
                    <a href="tel:+919873334599">
                      <strong>(+91) 9873334599</strong>
                    </a>
                    <br /> Mail:{" "}
                    <b>
                      {" "}
                      <a href="mailto:aceug365@gmail.com">aceug365@gmail.com</a>
                    </b>
                  </span>
                </div>
              </div>
            </div>
            <div class="col max-mb-30">
              <div class="contact-info">
                <div class="icon">
                  <i class="fal fa-clock"></i>
                </div>
                <div class="info">
                  <h4 class="title"> Hour of operation</h4>
                  <span class="info-text">
                    {" "}
                    Monday – Friday : 09:00 – 20:00 <br /> Sunday &amp;
                    Saturday: 10:30 – 22:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="google-map-area section text-center">
        <div class="container">
          <div
            class="ht-gmap3"
            id="htmap2"
            data-height="500"
            data-width="100%"
            data-zoom_enable=""
            data-zoom="10"
            data-map_type="roadmap"
            data-map_style="style11"
          ></div>
        </div>
      </div>

      <div class="contact-form-section section section-padding">
        <div class="container">
          <div class="row">
            <div class="offset-lg-2 col-lg-8">
              <div class="contact-title max-width-600">
                <h2 class="title">
                  Fill out this form for booking a consultant advising session.
                </h2>
              </div>
              <div class="contact-form">
                <form
                  action="https://live.hasthemes.com/html/4/maxcoach-preview/maxcoach/assets/php/contact-mail.php"
                  id="contact-form"
                  method="post"
                >
                  <div class="row max-mb-n30">
                    <div class="col-md-6 col-12 max-mb-30">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        name="name"
                      />
                      <input type="hidden" name="form-name" value="contact" />
                    </div>
                    <div class="col-md-6 col-12 max-mb-30">
                      <input type="email" placeholder="Email *" name="email" />
                    </div>
                    <div class="col-md-12 col-12 max-mb-30">
                      <input
                        type="text"
                        placeholder="Subject *"
                        name="subject"
                      />
                    </div>
                    <div class="col-12 max-mb-30">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div class="col-12 text-center max-mb-30">
                      <button class="btn btn-primary btn-hover-secondary btn-width-180 btn-height-60">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <p class="form-messege"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
