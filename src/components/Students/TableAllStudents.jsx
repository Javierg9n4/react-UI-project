import React from "react";
import { useLoaderData } from "react-router-dom";
import TableStudents from "./TableStudentsSkeleton";
import getToken from "../../utils/getToken";
import { getAllStudents } from "../../repository/studentRepository";

const loader = async () => {
  const token = getToken();

  const allStudents = await getAllStudents(token);
  console.log(allStudents);
  return allStudents;
};

const TableAllStudents = () => {
  const allStudents = useLoaderData();

  const title = <h1>All Students</h1>;
  return (
    <div className="container">
      <TableStudents studentsData={allStudents} title={title} />
    </div>
  );
};
export { TableAllStudents, loader };
