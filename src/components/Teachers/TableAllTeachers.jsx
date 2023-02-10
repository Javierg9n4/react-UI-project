import React from "react";
import { useLoaderData } from "react-router-dom";
import TableStudents from "./TableTeachersSkeleton";
import getToken from "../../utils/getToken";
import jwt_decode from "jwt-decode";
import { getAllTeachers } from "../../repository/teacherRepository";

const loader = async () => {
  const token = await getToken();
  const decodedToken = jwt_decode(token);

  const userId = decodedToken.user.id;
  const allTeachers = await getAllTeachers(userId, token);
  console.log(allTeachers);
  return allTeachers;
};

const TableAllTeachers = () => {
  const allTeachers = useLoaderData();

  const title = <h1>All Students</h1>;
  return (
    <div className="container">
      <TableStudents teachersData={allTeachers} title={title} />
    </div>
  );
};
export { TableAllTeachers, loader };
