import React from "react";
import { useLoaderData } from "react-router-dom";
import getToken from "../../utils/getToken";
import jwt_decode from "jwt-decode";
import "./Profile.css";

const loader = async () => {
  const token = await getToken();
  const decodedToken = await jwt_decode(token);
  const userId = decodedToken.user.id;
  try {
    const resp = await fetch(`http://localhost:4000/api/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const Profile = () => {
  const userProfile = useLoaderData();
  const teacherProfile = userProfile?.teacher;
  /* console.log(userProfile); */
  return (
    <>
      {userProfile && (
        <div className="card">
          <div className="title">User Profile</div>
          <div className="container">
            <p>Email: {userProfile?.email}</p>
            <p>Type: {userProfile?.type}</p>
            <p>Status: {userProfile?.active ? "active" : "inactive"}</p>
          </div>
        </div>
      )}
      {teacherProfile && (
        <div className="card">
          <div className="title">Teacher Profile</div>
          <div className="container">
            <p>Name: {teacherProfile.name}</p>
            <p>Last Name: {teacherProfile.last_name}</p>
            <p>Date of Birth: {teacherProfile.date_of_birth.slice(0, 10)}</p>
            <p>D.N.I. {teacherProfile.dni}</p>
          </div>
        </div>
      )}
    </>
  );
};

export { Profile, loader };
