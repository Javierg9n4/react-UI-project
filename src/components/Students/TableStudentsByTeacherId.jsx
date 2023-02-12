import React from "react";
import { useLoaderData, NavLink, redirect } from "react-router-dom";
import TableStudents from "./TableStudentsSkeleton";
import getToken from "../../utils/getToken";
import jwt_decode from "jwt-decode";
import {
  getStudentsByTeacherId,
  deleteStudent,
} from "../../repository/studentRepository";
import { getUserById } from "../../repository/userRepository";
import "./TableStudents.css";

const loader = async () => {
  const token = getToken();
  const decodedToken = await jwt_decode(token);
  const userId = await decodedToken.user.id;
  const userData = await getUserById(userId, token);
  //console.log(userData);
  const teacherId = await userData.teacher.id;

  const students = await getStudentsByTeacherId(teacherId, token);

  if (students === []) {
    return null;
  } else {
    return students;
  }
};

const action = async ({ request }) => {
  const token = await getToken();

  const formData = await request.formData();

  const studentId = formData.get("studentId");

  await deleteStudent(studentId, token);

  return redirect("/yourstudents");
};

const TableStudentsByTeacherId = () => {
  const students = useLoaderData();

  const title = <h1>Your Students</h1>;
  return (
    <>
      {students && (
        <div className="container">
          <TableStudents studentsData={students} title={title} />
          <button>
            <NavLink to="/newStudent">Add new student</NavLink>
          </button>
        </div>
      )}
      {/* esto no me funciona */}
      {!students && (
        <div>
          <p>Este profesor aun no tiene alumnos asociados</p>
        </div>
      )}
    </>
  );
};
export { TableStudentsByTeacherId, loader, action };
