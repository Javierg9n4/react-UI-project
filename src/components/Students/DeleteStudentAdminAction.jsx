import { redirect } from "react-router-dom";
import { deleteStudent } from "../../repository/studentRepository";
import getToken from "../../utils/getToken";

async function action({ request }) {
  const token = await getToken();

  const formData = await request.formData();

  const studentId = formData.get("studentId");

  await deleteStudent(studentId, token);

  return redirect("/students");
}

export { action };
