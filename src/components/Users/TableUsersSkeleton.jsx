import React from "react";
import { Form } from "react-router-dom";

const TableHeaderUsers = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Email</th>
        <th>Type</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};

const TableBodyUsers = (props) => {
  const rows = props.usersData.map((row, index) => {
    return (
      <tr key={row.id}>
        <td>{index + 1}</td>
        <td>{row.email}</td>
        <td>{row.type}</td>
        <td>{row.active ? "Active" : "Inactive"}</td>
        <td>
          <Form
            method="post"
            action={"destroy"}
            onSubmit={(event) => {
              if (
                !window.confirm("Please confirm you want to delete this user.")
              ) {
                event.preventDefault();
              }
            }}
          >
            <input type="hidden" name="userId" value={row.id}></input>
            <button type="submit">Delete</button>
          </Form>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const TableUsers = ({ usersData, title }) => {
  return (
    <>
      {title}
      <table>
        <TableHeaderUsers />
        <TableBodyUsers usersData={usersData} />
      </table>
    </>
  );
};

export default TableUsers;
