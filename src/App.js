import Landing from "./components/Landing";
import Courses from "./components/CoursesGridPage/Courses";
import CoursePage from "./components/CourseDetailPage/CoursePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Login from "./components/Authentication/Login";
import SingleCourseDash from "./components/CourseProgress/SingleCourseDash";
import { SignUp } from "./components/Authentication/SignUp";
import AddCoursePage from "./components/AddCourse/AddCoursePage";
import { Quiz } from "./components/Quiz/Quiz";
import { TestSeriesGridPage } from "./components/TestSeriesGrid/TestSeriesGridPage";
import { BlogGridPage } from "./components/BlogGrid/BlogGridPage";
import { BlogDetail } from "./components/BlogDetailPage/BlogDetail";
import { StudentDashboard } from "./components/StudentDashboard/StudentDashboard";
import "@tremor/react/dist/esm/tremor.css";
import { QuizGamePage } from "./components/QuizGame/QuizGamePage";
import { Cart } from "./components/Cart/Cart";
import { TestSeriesDetail } from "./components/TestSeriesDetail/TestSeriesDetail";
import Video from "./components/CoursePage/Video";
import TestAttemptPage from "./components/TestAttempt/TestAttemptPage";
import CheckOutPageNew from "./components/CheckoutPageNew/CheckoutPageNew";
import TestReportPage from "./components/TestReport/TestReportPage";
import LogoutPage from "./components/Authentication/LogoutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        {/*         <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/add-course" element={<AddCoursePage />} />
        <Route path="/quiz" element={<Quiz />} />
        {/*   <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutPage />} /> */}
        <Route path="/checkout" element={<CheckOutPageNew />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/test-series" element={<TestSeriesGridPage />} />
        <Route
          path="/test-series-detail/:testSeriesId"
          element={<TestSeriesDetail />}
        />
        <Route path="/blogs" element={<BlogGridPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<BlogDetail />} />
        <Route path="/vimeo" element={<Video />} />
        <Route path="/quiz-game" element={<QuizGamePage />} />
        <Route
          path="/test-attempt/:testSeriesId/:testId"
          element={<TestAttemptPage />}
        />

        <Route
          path="/test-report/:testProgressId"
          element={<TestReportPage />}
        />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        {/* <Route path="/course/:id" element={<CoursePage />} /> */}
        <Route exact path="/course-dash" element={<SingleCourseDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
