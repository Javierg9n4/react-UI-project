import React from "react";
import { useLoaderData, redirect } from "react-router-dom";
import TableStudents from "./TableStudentsSkeleton";
import getToken from "../../utils/getToken";
import {
  getAllStudents,
  deleteStudent,
} from "../../repository/studentRepository";
import "./TableStudents.css";

const loader = async () => {
  const token = getToken();

  const allStudents = await getAllStudents(token);
  //console.log(allStudents);
  return allStudents;
};

async function action({ request }) {
  const token = await getToken();

  const formData = await request.formData();

  const studentId = formData.get("studentId");

  await deleteStudent(studentId, token);

  return redirect("/students");
}

const TableAllStudents = () => {
  const allStudents = useLoaderData();

  const title = <h1>All Students</h1>;
  return (
    <div className="container">
      <TableStudents studentsData={allStudents} title={title} />
    </div>
  );
};
export { TableAllStudents, loader, action };
