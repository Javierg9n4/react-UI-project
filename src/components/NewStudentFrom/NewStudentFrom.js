import React from "react";
import { Form } from "react-router-dom";

const NewStudentForm = () => {
  return (
    <Form
      method="post"
      action="addstudent"
      /* onSubmit={(e) => {
        e.preventDefault();
      }} */
    >
      <input type="text" name="dni" placeholder="DNI"></input>
      <input type="text" name="name" placeholder="Name"></input>
      <input type="text" name="last_name" placeholder="Last Name"></input>
      <input
        type="date"
        name="date_of_birth"
        placeholder="Date of Birth"
      ></input>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default NewStudentForm;
