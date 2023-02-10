import React from "react";
import { useLoaderData } from "react-router-dom";
import TableUsers from "./TableUsersSkeleton";
import getToken from "../../utils/getToken";
import { getAllUsers } from "../../repository/userRepository";
import jwt_decode from "jwt-decode";

const loader = async () => {
  const token = await getToken();
  const decodedToken = jwt_decode(token);

  const userId = decodedToken.user.id;

  const allUsers = await getAllUsers(token, userId);

  return allUsers;
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

export { TableAllUsers, loader };
