const getAllUsers = async (token, userId) => {
  try {
    const response = await fetch(`http://localhost:4000/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });

    const users = await response.json();

    //Filtramos el usuario que esta pidiendo la tabla de usuarios para que no se pueda eliminar a si mismo
    const filteredUsers = users.filter((user) => {
      return user.id !== userId;
    });

    return filteredUsers;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId, token) => {
  try {
    const response = await fetch(`http://localhost:4000/api/user/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });

    const success = await response.json();
    console.log(success);
    alert(success.message);
    return success;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, deleteUser };
