import Landing from "./components/Landing";
import Courses from "./components/CoursesGridPage/Courses";
import CoursePage from "./components/CourseDetailPage/CoursePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Login from "./components/Authentication/Login";

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

import TestAttemptPage from "./components/TestAttempt/TestAttemptPage";
import CheckOutPageNew from "./components/CheckoutPageNew/CheckoutPageNew";
import TestReportPage from "./components/TestReport/TestReportPage";
import LogoutPage from "./components/Authentication/LogoutPage";
import { Profile } from "./components/Authentication/Profile";
import OTPVerify from "./components/Authentication/OTPVerify";
import LoginPhone from "./components/Authentication/LoginPhone";
import PrivacyPolicy from "./PrivacyPolicy";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import CourseLP from "./components/LandingPages/CourseLP";
import CourseLP2 from "./components/LandingPages/CourseLP2";
import Webinar from "./components/Webinar";

import Middle from "./components/TestSeriesProgress/TestSeriesProgressPage";

import CourseAttemptPage from "./components/CourseAttemptPage/CourseAttemptPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-course" element={<AddCoursePage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/verifyOTP" element={<OTPVerify />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<LoginPhone />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/checkout" element={<CheckOutPageNew />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/test-series" element={<TestSeriesGridPage />} />

        <Route
          path="/test-series-detail/:testSeriesId"
          element={<TestSeriesDetail />}
        />

        <Route path="/blog-detail/:blogTitle" element={<BlogDetail />} />

        <Route path="/blogs" element={<BlogGridPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<BlogDetail />} />

        <Route
          path="/test-series-progress/:testSeriesId"
          element={<Middle />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/quiz-game" element={<QuizGamePage />} />
        <Route path="/landing" element={<CourseLP />} />
        <Route path="/cuet-english-language" element={<CourseLP2 />} />

        <Route
          path="/test-attempt/:testSeriesId/:testId"
          element={<TestAttemptPage />}
        />

        <Route
          path="/course-attempt/:courseId"
          element={<CourseAttemptPage />}
        />

        <Route
          path="/test-report/:testProgressId"
          element={<TestReportPage />}
        />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        {/* <Route path="/course/:id" element={<CoursePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
