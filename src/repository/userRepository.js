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
    //console.log(success);
    alert(success.message);

    return success;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (userId, token) => {
  try {
    const response = await fetch(`http://localhost:4000/api/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });

    const userById = await response.json();

    return userById;
  } catch (error) {
    console.log(error);
  }
};

const userSignup = async (formData) => {
  try {
    const response = await fetch(`http://localhost:4000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        dni: formData.dni,
        name: formData.name,
        last_name: formData.last_name,
        date_of_birth: formData.date_of_birth,
      }),
    });
    if (response.status === 200) {
      alert("User and Teacher successfully registered");
      return true;
    } else {
      alert("Email already in use");
      return null;
    }
  } catch (error) {
    console.log(error, error.message);
    alert(error.message);
  }
};

const loginUser = async (credentials) => {
  try {
    const resp = await fetch("http://localhost:4000/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      mode: "cors",
    });

    const data = await resp.json();
    //console.log(data);
    if (data.message) {
      alert(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, deleteUser, getUserById, userSignup, loginUser };
