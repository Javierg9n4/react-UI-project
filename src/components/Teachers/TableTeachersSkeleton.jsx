import React from "react";
import { Form } from "react-router-dom";

const TableHeaderTeachers = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>DNI</th>
        <th>Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
      </tr>
    </thead>
  );
};

function TableBodyTeachers(props) {
  const rows = props.teachersData.map((row, index) => {
    return (
      <tr key={row.id}>
        <td>{index + 1}</td>
        <td>{row.dni}</td>
        <td>{row.name}</td>
        <td>{row.last_name}</td>
        <td>{row.date_of_birth.slice(0, 10)}</td>
        <td>
          <Form
            method="post"
            action={"destroy"}
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this teacher."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <input type="hidden" name="teacherId" value={row.id}></input>
            <button type="submit">Delete</button>
          </Form>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

const TableTeachers = ({ teachersData, title }) => {
  return (
    <>
      {title}
      <table>
        <TableHeaderTeachers />
        <TableBodyTeachers teachersData={teachersData} />
      </table>
    </>
  );
};

export default TableTeachers;
