/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import AssignmentList from "../LecturerView/AssignmentList";
import ExamList from "../LecturerView/ExamList";
import HomePage from "../LecturerView/HomePage";
import MainPage from "../Pages/MainPage";
import Terminal from "../Pages/Terminal";
import QuestionList from "../LecturerView/QuestionList";
import StudentAssignmentList from "../StudentView/StudentAssignmentList";
import StudentExamList from "../StudentView/StudentExamList";
import StudentHomePage from "../StudentView/StudentHomePage";
import StudentExam from "../StudentView/StudentExam";

const ROUTES = [
  { path: "/", element: <MainPage /> },
  { path: "/lab", element: <MainPage /> },
  { path: "/lab/exam-list", element: <ExamList /> },
  { path: "/lab/assignment-list", element: <AssignmentList /> },
  { path: "/lab/home-page", element: <HomePage /> },
  { path: "/lab/student-home-page", element: <StudentHomePage /> },
  { path: "/lab/student-assignment-list", element: <StudentAssignmentList /> },
  { path: "/lab/student-exam-list", element: <StudentExamList /> },
  { path: "*", element: <MainPage /> },
  { path: "/lab/question-list", element: <QuestionList /> },
  { path: "lab/student-exam", element: <StudentExam /> },
  { path: "/lab/terminal", element: <Terminal /> },
];

const Route = () => {
  // useRoutes() hook to define and render routes using regular JavaScript objects instead of <Routes> and <Route> elements.
  const routes = useRoutes(ROUTES);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Route />
    </Router>
  );
};

export default AppWrapper;
