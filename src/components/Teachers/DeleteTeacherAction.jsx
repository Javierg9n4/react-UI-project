import { redirect } from "react-router-dom";
import { deleteTeacher } from "../../repository/teacherRepository";
import getToken from "../../utils/getToken";

async function action({ request }) {
  const token = await getToken();

  const formData = await request.formData();

  const teacherId = formData.get("teacherId");

  await deleteTeacher(teacherId, token);

  return redirect("/teachers");
}

export { action };
