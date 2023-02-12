import React from "react";
import { Form, redirect, NavLink } from "react-router-dom";
import { userSignup } from "../../repository/userRepository";
import "./Signup.css";

const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  const successfullSignup = await userSignup(formData);
  if (successfullSignup) {
    return redirect("/");
  } else {
    return redirect("/signup");
  }
};

const SignupForm = () => {
  return (
    <div className="signupContainer">
      <h1>Signup</h1>
      <Form method="post" action="createuser">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required={true}
        ></input>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required={true}
        ></input>
        <br />
        <input type="text" name="dni" placeholder="DNI" required={true}></input>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          required={true}
        ></input>
        <br />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          required={true}
        ></input>
        <br />
        <input
          type="date"
          name="date_of_birth"
          placeholder="Date of Birth"
          required={true}
        ></input>
        <br />
        <button type="submit">Signup</button>
        <button>
          <NavLink to="/">Back to Login</NavLink>
        </button>
      </Form>
    </div>
  );
};

export { SignupForm, action };
