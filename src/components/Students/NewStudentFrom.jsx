import React from "react";
import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";
import getToken from "../../utils/getToken";
import jwt_decode from "jwt-decode";
import { getUserById } from "../../repository/userRepository";
import { createStudent } from "../../repository/studentRepository";
import "./NewStudentForm.css";

const action = async ({ request }) => {
  const newStudentData = Object.fromEntries(await request.formData());
  const token = await getToken();
  const decodedToken = await jwt_decode(token);
  const userId = await decodedToken.user.id;
  const userData = await getUserById(userId, token);
  const teacherId = await userData.teacher.id;

  await createStudent(newStudentData, token, teacherId);
  return redirect("/yourstudents");
};

const NewStudentForm = () => {
  return (
    <>
      <div className="newStudentFormContainer">
        <h1>Add New Student</h1>
        <Form
          method="post"
          action="addstudent"
          /* onSubmit={(e) => {
        e.preventDefault();
      }} */
        >
          <input
            type="text"
            name="dni"
            placeholder="DNI"
            required={true}
          ></input>
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
          <button type="submit">Submit</button>
        </Form>
      </div>
    </>
  );
};

export { NewStudentForm, action };
