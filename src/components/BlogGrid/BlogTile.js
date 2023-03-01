import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseDirectusURL, baseURL } from "../../shared/baseUrl";

export const BlogTile = ({ blog }) => {
  return (
    <>
      <div className="col max-mb-30" data-aos="fade-up">
        <div className="course-2">
          <div className="thumbnail">
            <Link to={"/blog-detail/" + blog.id} className="image">
              <img
                src={baseDirectusURL + "assets/" + blog.poster}
                alt="Course Image"
                height={200}
              />
            </Link>
          </div>
          <div className="info">
            <span className="date">{blog.createdOn}</span>
            <h3 className="title">
              <Link to={"/blog-detail/" + blog.id}>{blog.title}</Link>
            </h3>
            <div className="lp-course-buttons mt-2">
              <button className="btn btn-primary btn-hover-secondary btn-width-100">
                Read Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
