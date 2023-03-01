import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SideBar from "./SideBar";
import { baseDirectusURL, baseURL } from "../../shared/baseUrl";
import axios from "axios";

import Loader from "../Loader";
import TestCard from "./TestCard";

const TestSeries = ({ testSeries }) => {
  return (
    <>
      <div
        class="page-banner-section section overlay section-padding"
        style={{
          backgroundImage: "url(/assets/images/page-banner/course-bg.jpg)",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="page-banner-title course-banner-title">
                <h1 class="title">{testSeries.name}</h1>
              </div>

              <div class="page-title-bar-meta">
                {/*   <div class="course-instructor post-author">
                  <span class="meta-icon meta-image">
                    <img
                      alt="User Avatar"
                      src="/assets/images/author/author.jpg"
                      class="avatar"
                    />
                  </span>
                  <span class="meta-value">Blanche Fields</span>
                </div> */}
                <div class="course-duration">
                  <span class="meta-icon far fa-clock"></span>
                  <span class="meta-value">15 Days</span>
                </div>
                <div class="course-lesson">
                  <span class="meta-icon far fa-file-alt"></span>
                  <span class="meta-value">6 Tests</span>
                </div>

                <div class="course-students">
                  <span class="meta-icon far fa-user-alt"></span>
                  <span class="meta-value">49 Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section mt-50 mb-50">
        <div className="container">
          <div className="row max-mb-n50">
            <div className="col-lg-8 col-12 order-lg-1 max-mb-50">
              <div className="course-details-wrapper">
                <div className="row"></div>
                <div className="card-group">
                  {testSeries.tests.map((test) => {
                    return <TestCard test={test} testSeries={testSeries} />;
                  })}
                </div>
              </div>
            </div>

            <SideBar testSeries={testSeries} />
          </div>
        </div>
      </div>

      <div
        className="potentials-section section section-padding"
        style={{ backgroundColor: "#f5f7fa" }}
      >
        <div className="container">
          <div
            className="section-title text-center margin-bottom-100"
            data-aos="fade-up"
          >
            <span className="sub-title">
              Maximize your chances of getting a better rank and a better
              college
            </span>
            <h2 className="title fz-48">
              How This Test Series <span>Can Help</span> You.
            </h2>
          </div>

          <div className="row row-cols-lg-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="row row-cols-xl-2 row-cols-sm-2 row-cols-1">
                <div className="col max-mb-60" data-aos="fade-up">
                  <a
                    href="courses-grid-1.html"
                    className="icon-box icon-box-left text-left"
                    data-vivus-hover
                  >
                    <div className="icon">
                      <img
                        className="svgInject"
                        src="/assets/images/svg/linea/linea-basic-flag2.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h3 className="title fz-20">Made By Ace Teachers </h3>
                      <div className="desc">
                        <p>
                          Empowering students to achieve their fullest potential
                          with expert guidance from Ace Teachers.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col max-mb-60" data-aos="fade-up">
                  <a
                    href="courses-grid-1.html"
                    className="icon-box icon-box-left text-left"
                    data-vivus-hover
                  >
                    <div className="icon">
                      <img
                        className="svgInject"
                        src="/assets/images/svg/linea/linea-basic-gear.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h3 className="title fz-20">Monitor Your Progress</h3>
                      <div className="desc">
                        <p>
                          Track your success and stay motivated with constant
                          progress monitoring on Ace-UG.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col max-mb-60" data-aos="fade-up">
                  <a
                    href="courses-grid-1.html"
                    className="icon-box icon-box-left text-left"
                    data-vivus-hover
                  >
                    <div className="icon">
                      <img
                        className="svgInject"
                        src="/assets/images/svg/linea/linea-basic-life-buoy.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h3 className="title fz-20">Ask Doubts to Teachers</h3>
                      <div className="desc">
                        <p>
                          Unlock your full potential with 24/7 access to expert
                          teachers, ready to answer all your doubts on Ace-UG
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col max-mb-60" data-aos="fade-up">
                  <a
                    href="courses-grid-1.html"
                    className="icon-box icon-box-left text-left"
                    data-vivus-hover
                  >
                    <div className="icon">
                      <img
                        className="svgInject"
                        src="/assets/images/svg/linea/linea-basic-display.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h3 className="title fz-20">Unlimited Access</h3>
                      <div className="desc">
                        <p>
                          Accelerate your learning journey with endless
                          opportunities for growth and discovery through
                          Unlimited Access on Ace-UG
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="potentials-image">
                <img
                  src="/assets/images/about/about03/about-us-03-image-02.png"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-section section section-padding">
        <div className="container">
          <div
            className="section-title text-center margin-bottom-100"
            data-aos="fade-up"
          >
            <h2 className="title fz-48">
              Some of the <span>Successful Students</span> Who Took This Test
              Series
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider-three swiper-container"
                data-aos="fade-up"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-five">
                      <div className="author-image">
                        <img
                          src="/assets/images/testimonial/200/testimonial-avata-01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="author-content">
                        <div className="content">
                          <h3 className="title">
                            I am happy with their arrangement of lessons and
                            subjects. They reflect a scientific investigation.
                          </h3>
                        </div>
                        <div className="author-info">
                          <div className="cite">
                            <h6 className="name">Luvic Dubble</h6>
                            <span className="position">/ Private Tutor</span>
                          </div>
                        </div>
                      </div>

                      <div className="shape shape-1 scene">
                        <span data-depth="3">
                          <img
                            src="/assets/images/shape-animation/shape-2.svg"
                            alt=""
                            className="svgInject"
                          />
                        </span>
                      </div>
                      <div className="shape shape-2 scene">
                        <span data-depth="-3">
                          <img
                            src="/assets/images/shape-animation/shape-3.png"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-five">
                      <div className="author-image">
                        <img
                          src="/assets/images/testimonial/200/testimonial-avata-02.jpg"
                          alt=""
                        />
                      </div>
                      <div className="author-content">
                        <div className="content">
                          <h3 className="title">
                            I'm a very strict person so I require everything to
                            be organized and neat. MaxCoach guys just got me.
                          </h3>
                        </div>
                        <div className="author-info">
                          <div className="cite">
                            <h6 className="name">Florence Themes</h6>
                            <span className="position">/ Multimedia Admin</span>
                          </div>
                        </div>
                      </div>

                      <div className="shape shape-1 scene">
                        <span data-depth="3">
                          <img
                            src="assets/images/shape-animation/shape-2.svg"
                            alt=""
                            className="svgInject"
                          />
                        </span>
                      </div>
                      <div className="shape shape-2 scene">
                        <span data-depth="-3">
                          <img
                            src="assets/images/shape-animation/shape-3.png"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-five">
                      <div className="author-image">
                        <img
                          src="assets/images/testimonial/200/testimonial-avata-03.jpg"
                          alt=""
                        />
                      </div>
                      <div className="author-content">
                        <div className="content">
                          <h3 className="title">
                            I am free to learn at my own pace, follow my own
                            schedule and choose the subject I like. Great study
                            portal for people like me.
                          </h3>
                        </div>
                        <div className="author-info">
                          <div className="cite">
                            <h6 className="name">Mina Hollace</h6>
                            <span className="position">/ Freelancer</span>
                          </div>
                        </div>
                      </div>

                      <div className="shape shape-1 scene">
                        <span data-depth="3">
                          <img
                            src="assets/images/shape-animation/shape-2.svg"
                            alt=""
                            className="svgInject"
                          />
                        </span>
                      </div>
                      <div className="shape shape-2 scene">
                        <span data-depth="-3">
                          <img
                            src="assets/images/shape-animation/shape-3.png"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-five">
                      <div className="author-image">
                        <img
                          src="assets/images/testimonial/200/testimonial-avata-04.jpg"
                          alt=""
                        />
                      </div>
                      <div className="author-content">
                        <div className="content">
                          <h3 className="title">
                            MaxCoach is my best choice. Their tutors are smart
                            and professional when dealing with students.
                          </h3>
                        </div>
                        <div className="author-info">
                          <div className="cite">
                            <h6 className="name">Madley Pondor</h6>
                            <span className="position">/ IT Specialist</span>
                          </div>
                        </div>
                      </div>

                      <div className="shape shape-1 scene">
                        <span data-depth="3">
                          <img
                            src="assets/images/shape-animation/shape-2.svg"
                            alt=""
                            className="svgInject"
                          />
                        </span>
                      </div>
                      <div className="shape shape-2 scene">
                        <span data-depth="-3">
                          <img
                            src="assets/images/shape-animation/shape-3.png"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="faq-section section section-padding position-relative my-5"
        style={{ backgroundColor: "#f5f7fa" }}
      >
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="faq-left-image">
                <img
                  src="/assets/images/about/about03/about-us-03-image-01.png"
                  alt="about"
                />

                <div className="shape shape-1 scene">
                  <span data-depth="3">
                    <img
                      src="/assets/images/shape-animation/shape-2.svg"
                      alt=""
                      className="svgInject"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="faq-content-area">
                <div
                  className="section-title text-left mb-50"
                  data-aos="fade-up"
                >
                  <span className="sub-title">
                    <strong>Frequently Asked Questions</strong>
                  </span>
                  <h2 className="title fz-48">
                    Get a better <span>rank</span> and Ace your Career
                  </h2>
                </div>

                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-bottom-shape d-md-block d-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            height="100"
          >
            <path
              className="elementor-shape-fill"
              d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
            ></path>
          </svg>
        </div>
      </div>

      <div className="newsletter-section-two section fix section-padding position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-content">
                <h2 className="title fz-48">
                  Get Latest Information{" "}
                  <span>About All Undergraduate Exams</span>
                </h2>
                <p>
                  Enter your email address to register to our FREE Information
                  Subscription <br className="d-none d-md-block" />
                  delivered through Whatsapp on a regular basis!{" "}
                </p>
                <div className="newsletter-form">
                  <form action="#">
                    <input type="email" placeholder="Your E-mail" />
                    <button className="btn btn-primary btn-hover-secondary">
                      Subscribe
                    </button>
                  </form>
                </div>

                <div className="shape shape-1 scene">
                  <span data-depth="4">shape 3</span>
                </div>
                <div className="shape shape-2 scene">
                  <span data-depth="4">
                    <img
                      src="assets/images/shape-animation/nwesletter-shape-1.png"
                      alt=""
                    />
                  </span>
                </div>
                <div className="shape shape-3 scene">
                  <span data-depth="4">
                    <img
                      src="assets/images/shape-animation/nwesletter-shape-2.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TestSeriesDetailDirectus = () => {
  const [testSeries, setTestSeries] = useState();

  const params = useParams();
  const id = params.testSeriesId;

  useEffect(() => {
    const url = baseDirectusURL + "items/testSeries/" + id + "?fields=*.*.*";

    axios
      .get(url)
      .then((response) => response.data)
      .then((fetchedTestSeries) => {
        setTestSeries(fetchedTestSeries.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!testSeries) {
    return <Loader />;
  }

  return <TestSeries testSeries={testSeries} />;
};
