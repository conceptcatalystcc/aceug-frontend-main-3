import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";
import axios from "axios";
import { NoLuggage } from "@mui/icons-material";
import { Helmet } from "react-helmet";

export const BlogDetail = () => {
  const [blog, setBlog] = useState({});

  const params = useParams();
  const blogTitle = params.blogTitle;

  useEffect(() => {
    const url = baseURL + "blogs/blog/" + blogTitle;
    axios
      .get(encodeURI(url))
      .then((data) => data.data)
      .then((blog) => {
        setBlog(blog);
        console.log(blog);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!blog) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blog.title}</title>
        <meta name="description" content={blog.meta_desc} />
        <meta name="keywords" content={blog.meta_keywords} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.meta_desc} />
        <meta property="og:image" content={NoLuggage.thumbnail} />
      </Helmet>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 mb-50 mt-50">
              <h1
                style={{ fontSize: "48px", fontFamily: "'Roboto', sans-serif" }}
                className="text-center mb-50 d-md-block d-none"
              >
                {blog.title}
              </h1>

              <h1
                style={{ fontFamily: "'Roboto', sans-serif" }}
                className="text-center mb-50 d-md-none d-block"
              >
                {blog.title}
              </h1>

              <center>
                {" "}
                <img
                  src={blog.thumbnail}
                  alt="thumbnail"
                  className="img-fluid w-100 shadow-lg"
                />
              </center>

              <div
                dangerouslySetInnerHTML={{ __html: blog.body }}
                className="mt-50 mb-50"
                style={{ fontSize: "20px" }}
              />
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};
