import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../shared/baseUrl";
import { BlogTile } from "./BlogTile";

export const BlogGridPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios
      .get(baseURL + "blogs/", { params: { page: page } })
      .then((response) => response.data)
      .then((newBlogs) => {
        if (newBlogs) {
          setBlogs(newBlogs);
        }
      });
  }, []);

  useEffect(() => {
    axios
      .get(baseURL + "blogs/", { params: { page: page } })
      .then((response) => response.data)
      .then((newBlogs) => {
        if (newBlogs) {
          setBlogs(blogs.concat(newBlogs));
        }
      });
  }, [page]);

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">Blog</h1>
          </div>
        </div>
      </div>

      <div className="section section-padding-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center max-mb-20">
            <div className="col-sm-auto col-12 max-mb-10">
              <p className="result-count">
                We found <span>{blogs.length}</span> blog available for you
              </p>
            </div>
          </div>

          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
            {blogs.map((blog) => (
              <BlogTile blog={blog} />
            ))}
          </div>

          <div className="row max-mt-50">
            <div className="col text-center">
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className="btn btn-outline-primary load-more-btn"
              >
                Load More <i className="fal fa-redo ms-3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
