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
} from "../components/Users/TableAllUsers";
import { action as deleteUserAction } from "../components/Users/DeleteUserAction";
import {
  TableAllTeachers,
  loader as allTeachersLoader,
} from "../components/Teachers/TableAllTeachers";
import { action as deleteTeacherAction } from "../components/Teachers/DeleteTeacherAction";
import {
  TableAllStudents,
  loader as allStudentsLoader,
} from "../components/Students/TableAllStudents";
import { action as deleteStudentAdminAction } from "../components/Students/DeleteStudentAdminAction";
import {
  TableStudentsByTeacherId,
  loader as StudentsByTeacherIdLoader,
} from "../components/Students/TableStudentsByTeacherId";
import { action as deleteStudentAction } from "../components/Students/DeleteStudentAction";
import NewStudentForm from "../components/NewStudentFrom/NewStudentFrom";
import { action as addStudentAction } from "../components/NewStudentFrom/AddStudent";

const router = createBrowserRouter([
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
