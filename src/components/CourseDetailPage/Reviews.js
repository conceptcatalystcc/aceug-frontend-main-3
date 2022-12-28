import React from "react";

const Reviews = ({ reviews, rating }) => {
  return (
    <>
      <div id="reviews" className="tab-pane fade">
        <div className="course-reviews">
          <div className="course-rating">
            <h3 className="title">Reviews</h3>
            <div className="course-rating-content">
              <div className="average-rating">
                <p className="rating-title secondary-color">Average Rating</p>
                <div className="rating-box">
                  <div className="average-value primary-color">{rating}</div>
                  <div className="review-star">
                    <div className="tm-star-rating">
                      <span className="fas fa-star"></span>
                      <span className="fas fa-star"></span>
                      <span className="fas fa-star"></span>
                      <span className="fas fa-star"></span>
                      <span className="fas fa-star-half-alt"></span>
                    </div>
                  </div>
                  <div className="review-amount">
                    ({reviews ? 20 : 50} ratings)
                  </div>
                </div>
              </div>
              <div className="detailed-rating">
                <p className="rating-title secondary-color">Detailed Rating</p>
                <div className="rating-box">
                  <div className="rating-rated-item">
                    <div className="rating-point">
                      <div className="tm-star-rating">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                      </div>
                    </div>
                    <div className="rating-progress">
                      <div className="single-progress-bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="rating-count">1</div>
                  </div>

                  <div className="rating-rated-item">
                    <div className="rating-point">
                      <div className="tm-star-rating">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="far fa-star"></span>
                      </div>
                    </div>
                    <div className="rating-progress">
                      <div className="single-progress-bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="rating-count">1</div>
                  </div>

                  <div className="rating-rated-item">
                    <div className="rating-point">
                      <div className="tm-star-rating">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="far fa-star"></span>
                        <span className="far fa-star"></span>
                      </div>
                    </div>
                    <div className="rating-progress">
                      <div className="single-progress-bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="rating-count">0</div>
                  </div>

                  <div className="rating-rated-item">
                    <div className="rating-point">
                      <div className="tm-star-rating">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="far fa-star"></span>
                        <span className="far fa-star"></span>
                        <span className="far fa-star"></span>
                      </div>
                    </div>
                    <div className="rating-progress">
                      <div className="single-progress-bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="rating-count">0</div>
                  </div>

                  <div className="rating-rated-item">
                    <div className="rating-point">
                      <div className="tm-star-rating">
                        <span className="fas fa-star"></span>
                        <span className="far fa-star"></span>
                        <span className="far fa-star"></span>
                        <span className="far fa-star"></span>
                        <span className="far fa-star"></span>
                      </div>
                    </div>
                    <div className="rating-progress">
                      <div className="single-progress-bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="rating-count">0</div>
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

export default Reviews;
