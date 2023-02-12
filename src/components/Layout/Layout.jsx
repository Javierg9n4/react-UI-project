import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import Login from "../Login/Login";
import useToken from "../App/useToken";

export default function Layout() {
  const { token, setToken, isExpired, user, removeToken } = useToken();

  if (!token || isExpired) {
    return <Login setToken={setToken} />;
  }

  const isAdmin = user?.type === "admin";
  const isTeacher = user?.type === "teacher";
  return (
    <>
      <div id="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            {isAdmin && (
              <>
                <li>
                  <NavLink to={"/users"}>All Users</NavLink>
                </li>
                <li>
                  <NavLink to={"/teachers"}>All Teachers</NavLink>
                </li>
                <li>
                  <NavLink to={"/students"}>All Students</NavLink>
                </li>
                <li>
                  <NavLink to={"/yourstudents"}>Your Students</NavLink>
                </li>
              </>
            )}
            {isTeacher && (
              <li>
                <NavLink to={"/yourstudents"}>Your Students</NavLink>
              </li>
            )}
            <li>
              {token && (
                <Link to={"/"} onClick={removeToken}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <h1>React Router Veridas</h1>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
