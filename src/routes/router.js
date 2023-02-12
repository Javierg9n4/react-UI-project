import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ProtectedRoute from "../components/App/ProtectedRoute";
import Index from "../components/App/Index";
import {
  Profile,
  loader as ProfileLoader,
} from "../components/Profile/Profile";
import {
  TableAllUsers,
  loader as allUsersLoader,
  action as deleteUserAction,
} from "../components/Users/TableAllUsers";
import {
  TableAllTeachers,
  loader as allTeachersLoader,
  action as deleteTeacherAction,
} from "../components/Teachers/TableAllTeachers";
import {
  TableAllStudents,
  loader as allStudentsLoader,
  action as deleteStudentAdminAction,
} from "../components/Students/TableAllStudents";
import {
  TableStudentsByTeacherId,
  loader as StudentsByTeacherIdLoader,
  action as deleteStudentAction,
} from "../components/Students/TableStudentsByTeacherId";
import {
  NewStudentForm,
  action as addStudentAction,
} from "../components/Students/NewStudentFrom";
import {
  SignupForm,
  action as createUserAndTeacherAction,
} from "../components/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupForm />,
  },
  {
    path: "/signup/createuser",
    action: createUserAndTeacherAction,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            element: <ProtectedRoute />,
            children: [
              {
                index: true,
                element: <Index />,
              },
              {
                path: "/profile",
                element: <Profile />,
                loader: ProfileLoader,
              },
              {
                path: "/users",
                element: <TableAllUsers />,
                loader: allUsersLoader,
              },
              {
                path: "/users/destroy",
                action: deleteUserAction,
              },
              {
                path: "/teachers",
                element: <TableAllTeachers />,
                loader: allTeachersLoader,
              },
              {
                path: "/teachers/destroy",
                action: deleteTeacherAction,
              },
              {
                path: "/students",
                element: <TableAllStudents />,
                loader: allStudentsLoader,
              },
              {
                path: "/students/destroy",
                action: deleteStudentAdminAction,
              },
              {
                path: "/yourstudents",
                element: <TableStudentsByTeacherId />,
                loader: StudentsByTeacherIdLoader,
              },
              {
                path: "/yourstudents/destroy",
                action: deleteStudentAction,
              },
              {
                path: "/newStudent",
                element: <NewStudentForm />,
              },
              {
                path: "newStudent/addstudent",
                action: addStudentAction,
                errorElement: <div>Oops! There was an error.</div>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
