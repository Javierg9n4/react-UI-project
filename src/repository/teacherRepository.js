const getAllTeachers = async (userId, token) => {
  try {
    const response = await fetch(`http://localhost:4000/api/teacher`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });

    const teachers = await response.json();
    console.log(teachers);
    //Filtra el teacher asociado al usuario que pide los teachers para que no se borre a si mismo
    const filteredTeachers = teachers.filter((teacher) => {
      return teacher.user_id !== userId;
    });
    console.log(filteredTeachers);
    return filteredTeachers;
  } catch (error) {
    console.log(error);
  }
};

const deleteTeacher = async (teacherId, token) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/teacher/${teacherId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      }
    );

    const success = await response.json();
    console.log(success);
    alert(success.message);
    return success;
  } catch (error) {
    console.log(error);
  }
};

export { getAllTeachers, deleteTeacher };
