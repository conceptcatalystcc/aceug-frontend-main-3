import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../shared/baseUrl";
import { firebase, auth } from "../firebase";
import { A11y, Navigation, Scrollbar, Pagination } from "swiper";
import { useCart } from "react-use-cart";
import { Navbar } from "reactstrap";

const Landing = () => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([]);
  const [series, setSeries] = useState([]);
  const navigate = useNavigate();
  const { addItem, items } = useCart();
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios
      .get(baseURL + "testSeries/0")
      .then((data) => data.data)
      .then((testSeries) => {
        setSeries(testSeries.slice(0, 4));
        console.log(testSeries);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(baseURL + "blogs/0")
      .then((data) => data.data)
      .then((blog) => {
        if (blog === null) {
          setBlogs([]);
        } else {
          setBlogs(blog);
          console.log(blog);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div id="page">
        <div
          className="intro9-section section"
          style={{ backgroundColor: "#eff2f6" }}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6" data-aos="fade-up">
                <div className="intro9-content text-md-left">
                  <span className="sub-title">
                    Your Journey to College Admission Begins Here
                  </span>
                  <h2 className="title">
                    School ke Sath Bhi, School ke Baad Bhi
                  </h2>
                  <div className="desc">
                    <p>GET ADMISSION INTO TOP CENTRAL UNIVERSITIES OF INDIA</p>
                  </div>
                  <a
                    href="JavaScript:Void(0);"
                    className="btn btn-primary btn-hover-secondary"
                  >
                    {" "}
                    Get Free Counselling
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" data-aos="fade-up">
                <div className="intro9-image-wrap">
                  <div className="intro9-image">
                    <div className="inner-img-one">
                      <img
                        className="worldRotate"
                        src="assets/images/intro/intro9/home-business-hero-global-image.png"
                        alt=""
                      />
                    </div>
                    <div className="inner-img-two">
                      <img
                        src="/assets/ace-images/anupamsir.png"
                        width={"70%"}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-section section section-fluid section-padding">
          <div className="container">
            <div className="section-title-two text-center" data-aos="fade-up">
              <span className="sub-title">
                92% Students Don't Get Admission Into Top Colleges <br />
                Because They Did Not Practice Right
              </span>
              <h2 className="title fz-48">
                Practice With Us and Join 8% League
              </h2>
            </div>

            <div className="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1 max-mb-n30">
              {series.map((serie) => {
                return (
                  <div className="col max-mb-30">
                    <div className="course-6">
                      <div className="thumbnail">
                        <a
                          className="image"
                          href={"/test-series-detail/" + serie._id}
                        >
                          <img
                            src={serie.thumbnail}
                            alt=""
                            style={{ minHeight: "380px" }}
                          />
                          <div className="course-overlay-bg"></div>
                        </a>
                      </div>
                      <div className="info">
                        <div className="course-caption-main">
                          {serie.price === 0 ? (
                            <span className="price">FREE</span>
                          ) : (
                            <span className="price">₹ {serie.price}</span>
                          )}

                          <h3 className="title">
                            <a href={"/test-series-detail/" + serie._id}>
                              {serie.name}
                            </a>
                          </h3>
                        </div>
                        <div className="course-caption-collapse">
                          <ul className="meta">
                            <li>
                              <i className="far fa-file-alt"></i>
                              {serie.tests.length} Tests
                            </li>
                            <li>
                              <i className="far fa-user-alt"></i>2,834 Students
                            </li>
                          </ul>
                          <div className="desc">
                            <button
                              className="btn btn-primary btn-hover-secondary btn-width-100"
                              onClick={() => {
                                items.pop();
                                addItem({
                                  id: serie._id,
                                  price: serie.price,
                                  name: serie.name,
                                  quantity: 1,
                                  type: "Test Series",
                                  subject: serie.subject,
                                });
                                navigate("/checkout");
                              }}
                            >
                              Enroll
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row max-mt-70">
              <div className="text-center col-xl-4 col-lg-7  mx-auto">
                <a className="link link-lg" href="/test-series">
                  Didn't find the desired Mock Series? Explore and Enroll in the
                  Best Curated Mock Test Series by Experienced Educators <br />
                  <mark style={{ fontSize: "26px" }}>
                    View all Mock Tests{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </mark>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="section section-padding"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="container">
            <div className="section-title-two text-center" data-aos="fade-up">
              <span className="sub-title">
                {" "}
                Out of 480 Students who Joined Us, 462 Students Got 99
                Percentile{" "}
              </span>
              <h2 className="title">
                We are pioneers of education with a decade of experience, using
                leading-edge technology to simplify learning
              </h2>
            </div>

            <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 max-mb-n60">
              <div className="col max-mb-60" data-aos="fade-up">
                <div className="icon-box-list" data-vivus-hover>
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-lightbulb.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">One to One</h3>
                    <div className="desc">
                      <p>
                        Experience personalized attention with our one-to-one
                        sessions and ace your exams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col max-mb-60" data-aos="fade-up">
                <div className="icon-box-list" data-vivus-hover>
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-map.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Anywhere</h3>
                    <div className="desc">
                      <p>
                        Study from anywhere, at any time with our online courses
                        accessible on multiple devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col max-mb-60" data-aos="fade-up">
                <div className="icon-box-list" data-vivus-hover>
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-clockwise.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Flexible Scheduling</h3>
                    <div className="desc">
                      <p>
                        Study at your own pace and on your own schedule with
                        AceUG.in's flexible online courses.
                      </p>
                    </div>
                    <span className="link">
                      Get Free Quote <i className="far fa-long-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col max-mb-60" data-aos="fade-up">
                <div className="icon-box-list" data-vivus-hover>
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-laptop.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Online Coures</h3>
                    <div className="desc">
                      <p>
                        Transform your studies with our flexible and convenient
                        online courses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col max-mb-60" data-aos="fade-up">
                <div className="icon-box-list" data-vivus-hover>
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-life-buoy.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Consulting</h3>
                    <div className="desc">
                      <p>
                        Get personalized guidance from experts to help you
                        achieve your academic goals with our online consulting
                        services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col max-mb-60" data-aos="fade-up">
                <div className="icon-box-list" data-vivus-hover>
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-gear.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Self Development</h3>
                    <div className="desc">
                      <p>
                        Unlock your full potential and achieve success with
                        personalized self-development resources at aceug.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row max-mt-50">
              <div className="col text-center">
                <a
                  href="/about-us"
                  className="btn btn-outline-primary learn-more-btn btn-hover-secondary margin-15"
                >
                  Learn more{" "}
                </a>
                <a
                  href="/test-series"
                  className="btn btn-primary btn-hover-secondary margin-15"
                >
                  {" "}
                  Get started today{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="service-section section section-padding">
          <div className="container">
            <div className="section-title-two text-center" data-aos="fade-up">
              <span className="sub-title">
                2 Lakh+ Students were not able to appear in CUET in 2022 Because
                They Didn't know How to Fill the Form
              </span>
              <h2 className="title fz-48">
                Get Latest Information About All Undergraduate Exams
              </h2>
            </div>

            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            >
              {blogs &&
                blogs.slice(0, 5).map((blog) => {
                  return (
                    <SwiperSlide>
                      {" "}
                      <a
                        href={"/blog-detail/" + encodeURIComponent(blog.title)}
                        className="service"
                      >
                        <div className="image">
                          <img src={blog.thumbnail} alt="" />
                        </div>
                        <div className="content">
                          <h3 className="title">{blog.title} </h3>
                          <p
                            class="ellipsis"
                            style={{
                              "text-overflow": "ellipsis",
                              "white-space": "nowrap",
                              display: "block",
                              overflow: "hidden",
                              width: "20em",
                            }}
                          >
                            {blog.meta_desc}
                          </p>

                          <div className="button-wrap">
                            <span className="link">
                              Read Now{" "}
                              <i className="far fa-long-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>

        <div
          className="testimonial-section section section-padding"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="container-fluid pl-80 pl-lg-15 pl-md-15 pl-sm-15 pl-xs-15 pr-80 pr-lg-15 pr-md-15 pr-sm-15 pr-xs-15">
            <div className="section-title-two text-center" data-aos="fade-up">
              <span className="sub-title">
                Just Some Students out of those 462 Students
              </span>
              <h2 className="title fz-48">What makes them love us?</h2>
            </div>
            <div class="card-group">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    width: 640,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  {" "}
                  <div className="testimonial-two testimonial-three">
                    <div className="content">
                      <p>
                        Thankyou ever teacher for helping in my cucet exam for
                        helping in my preparation. With your help I cracked my
                        cucet exam with a very good score and specially akilesh
                        sir for converting my weakness into my strength in
                        quantitative aptitude.
                      </p>
                    </div>
                    <div className="author-info">
                      <div className="image">
                        <img
                          src="https://media.licdn.com/dms/image/C4E03AQEVEOuE4guuag/profile-displayphoto-shrink_800_800/0/1639151351309?e=2147483647&v=beta&t=2zheKalUE3iyp70nxVHl0Rnyu9iSGaGo5EG8EGVaDNg"
                          alt=""
                        />
                      </div>
                      <div className="cite">
                        <h6 className="name">VIJAY KUMAR JHA</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="testimonial-two testimonial-three">
                    <div className="content">
                      <p>
                        The institute is best for IPMAT and CUET coaching. They
                        truly care about the students. The environment is very
                        warm and welcoming. The teachers are experienced,
                        helpful and amicable. They have both facilitated and
                        demonstrative type of teaching methodology and they
                        evaluate your progress at each point.
                      </p>
                    </div>
                    <div className="author-info">
                      <div className="image">
                        <img
                          src="https://media.licdn.com/dms/image/C4E03AQFu1NsRCa2PvQ/profile-displayphoto-shrink_800_800/0/1609343750150?e=2147483647&v=beta&t=TaEhutx9ByhOYQ4mnG9OFq6aAGWZW8bwdoiVUqpxzRQ"
                          alt=""
                        />
                      </div>
                      <div className="cite">
                        <h6 className="name">Ishita </h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="testimonial-two testimonial-three">
                    <div className="content">
                      <p>
                        Thanks to ACE-ug for my splendid success in CUET 2022. I
                        scored 100 in Political Science and English in
                        percentile . All credit goes to Team ACE-ug for my CUET
                        success. I studied in Shiv Vani School Palam.
                      </p>
                    </div>
                    <div className="author-info">
                      <div className="image">
                        <img
                          src="https://media.licdn.com/dms/image/D5603AQFE-ke3YUkBzg/profile-displayphoto-shrink_800_800/0/1669782922409?e=2147483647&v=beta&t=Cj-URuwvcvr64_CIrlt8laN8vq5ewo0zJdrphsHVIDA"
                          alt=""
                        />
                      </div>
                      <div className="cite">
                        <h6 className="name">Simarjeet Singh </h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="testimonial-two testimonial-three">
                    <div className="content">
                      <p>
                        I really like the way of teaching and amicable atittude
                        of teachers. In case of any query,the approach towards
                        teacher concerned is not a difficult task. ACE-ug is
                        stepping stone towards success and joining this coaching
                        was one of my best decision.
                      </p>
                    </div>
                    <div className="author-info">
                      <div className="image">
                        <img
                          src="https://media.licdn.com/dms/image/C5603AQEiWu4MH0JyfQ/profile-displayphoto-shrink_200_200/0/1643184532804?e=1681344000&v=beta&t=VvqCu2IwV3vmRpaJGPfH9saXtKVXTQivWeHuZxHEqrc"
                          alt=""
                        />
                      </div>
                      <div className="cite">
                        <h6 className="name">himanshi chaudhary</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
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

        <a href="#" className="scroll-top" id="scroll-top">
          <i className="arrow-top fal fa-long-arrow-up"></i>
          <i className="arrow-bottom fal fa-long-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Landing;
