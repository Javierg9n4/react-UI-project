import React from "react";
import { useLoaderData, redirect } from "react-router-dom";
import TableUsers from "./TableUsersSkeleton";
import getToken from "../../utils/getToken";
import { getAllUsers, deleteUser } from "../../repository/userRepository";
import jwt_decode from "jwt-decode";

const loader = async () => {
  const token = await getToken();
  const decodedToken = jwt_decode(token);

  const userId = decodedToken.user.id;

  const allUsers = await getAllUsers(token, userId);
  //console.log(allUsers);
  return allUsers;
};

const action = async ({ request }) => {
  const token = await getToken();

  const formData = await request.formData();

  const userId = formData.get("userId");

  await deleteUser(userId, token);

  return redirect("/users");
};

const TableAllUsers = () => {
  const allUsers = useLoaderData();

  const title = <h1>All Users</h1>;
  return (
    <div className="container">
      <TableUsers usersData={allUsers} title={title} />
    </div>
  );
};

export { TableAllUsers, loader, action };
