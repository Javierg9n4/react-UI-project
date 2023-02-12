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

    alert(success.message);

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

const createStudent = async (newStudentData, token, teacherId) => {
  try {
    const response = await fetch(`http://localhost:4000/api/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      body: JSON.stringify({
        dni: newStudentData.dni,
        name: newStudentData.name,
        last_name: newStudentData.last_name,
        date_of_birth: newStudentData.date_of_birth,
        teacher_id: teacherId,
      }),
    });

    if (response.status === 200) {
      alert("Student created successfully");
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.log(error, error.message);
    alert(error.message);
  }
};

export { deleteStudent, getStudentsByTeacherId, getAllStudents, createStudent };
