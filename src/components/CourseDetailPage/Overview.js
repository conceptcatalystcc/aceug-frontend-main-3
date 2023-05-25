import React from "react";
import { baseURL } from "../../shared/baseUrl";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Overview = ({ course }) => {
  if (!course) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <div id="overview" className="tab-pane fade show active">
        <div className="course-overview">
          <div className="overview-course-video">
            <div dangerouslySetInnerHTML={{ __html: course.iframe }} />
            <div dangerouslySetInnerHTML={{ __html: course.description }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
