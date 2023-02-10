const deleteStudent = async (studentId, token) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/student/${studentId}`,
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
    return success;
  } catch (error) {
    console.log(error);
  }
};

const getStudentsByTeacherId = async (teacherId, token) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/teacher/${teacherId}/students`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      }
    );

    const students = await response.json();
    return students;
  } catch (error) {
    return false;
  }
};

const getAllStudents = async (token) => {
  try {
    const response = await fetch(`http://localhost:4000/api/student`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });

    const students = await response.json();
    return students;
  } catch (error) {
    console.log(error);
  }
};

export { deleteStudent, getStudentsByTeacherId, getAllStudents };
