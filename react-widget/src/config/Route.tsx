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
import AssignmentQuestionList from "../LecturerView/AssignmentQuestionList";
import StudentAssignment from "../StudentView/StudentAssignment";
import ExamByStudentList from "../LecturerView/ExamByStudentList";
import ExamByQuestionStudentList from "../LecturerView/ExamByQuestionStudentList";

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
  {
    path: "/lab/assignment-question-list",
    element: <AssignmentQuestionList />,
  },
  ,
  { path: "/lab/student-assignment", element: <StudentAssignment /> },
  { path: "/lab/exam-by-student-list", element: <ExamByStudentList /> },
  {
    path: "/lab/exam-by-question-student-list",
    element: <ExamByQuestionStudentList />,
  },
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
