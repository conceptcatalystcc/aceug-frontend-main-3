import React, { useEffect, useState } from "react";
import { baseDirectusURL } from "../../shared/baseUrl";
import axios from "axios";
import { useParams } from "react-router-dom";

export const BlogDetailDirectus = () => {
  const [blog, setBlog] = useState({});

  const id = useParams().id;

  useEffect(() => {
    axios
      .get(baseDirectusURL + "items/blogs/" + id)
      .then((data) => data.data)
      .then((blog) => {
        setBlog(blog.data);
      })
      .catch((err) => console.log(err));
  });

  if (!blog) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div className=" page-title-section section">
        <div className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <h1>{blog.title}</h1>
                </div>
                <div className="row">
                  <div className="col-sm-10">
                    <p>
                      <small>Published Date : {blog.date_created}</small>
                    </p>
                  </div>
                </div>

                <hr />

                <img
                  src={baseDirectusURL + "assets/" + blog.poster}
                  alt="thumbnail"
                />

                <br></br>
                <br></br>
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
