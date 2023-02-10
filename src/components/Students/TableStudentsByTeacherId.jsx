import React from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import TableStudents from "./TableStudentsSkeleton";
import getToken from "../../utils/getToken";
import jwt_decode from "jwt-decode";
import { getStudentsByTeacherId } from "../../repository/studentRepository";

const loader = async () => {
  const token = getToken();
  const decodedToken = await jwt_decode(token);

  const teacherId = decodedToken.user.id;

  return await getStudentsByTeacherId(teacherId, token);
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
      {!students && (
        <div>
          <p>Este profesor aun no tiene alumnos asociados</p>
        </div>
      )}
    </>
  );
};
export { TableStudentsByTeacherId, loader };
