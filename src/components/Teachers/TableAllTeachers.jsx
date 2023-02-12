import React from "react";
import { useLoaderData, redirect } from "react-router-dom";
import TableTeachers from "./TableTeachersSkeleton";
import getToken from "../../utils/getToken";
import jwt_decode from "jwt-decode";
import {
  getAllTeachers,
  deleteTeacher,
} from "../../repository/teacherRepository";
import "./TableTeachers.css";

const loader = async () => {
  const token = await getToken();
  const decodedToken = jwt_decode(token);

  const userId = decodedToken.user.id;
  const allTeachers = await getAllTeachers(userId, token);
  //console.log(allTeachers);
  return allTeachers;
};

const action = async ({ request }) => {
  const token = await getToken();

  const formData = await request.formData();

  const teacherId = formData.get("teacherId");

  await deleteTeacher(teacherId, token);

  return redirect("/teachers");
};

const TableAllTeachers = () => {
  const allTeachers = useLoaderData();

  const title = <h1>All Students</h1>;
  return (
    <div className="container">
      <TableTeachers teachersData={allTeachers} title={title} />
    </div>
  );
};
export { TableAllTeachers, loader, action };
