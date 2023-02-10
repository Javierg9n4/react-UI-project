import { redirect } from "react-router-dom";
import getToken from "../../utils/getToken";
import jwt_decode from "jwt-decode";

const action = async ({ request }) => {
  const newStudentData = Object.fromEntries(await request.formData());
  console.log(newStudentData);

  const token = await getToken();
  console.log(token);
  const decodedToken = await jwt_decode(token);
  console.log(decodedToken);
  const teacherId = await decodedToken.user.id;
  console.log("hola", teacherId);
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
    console.log(response);
    return redirect("/yourstudents");
  } catch (error) {
    console.log(error, error.message);
  }
};
export { action };
