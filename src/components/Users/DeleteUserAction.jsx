import { redirect } from "react-router-dom";
import { deleteUser } from "../../repository/userRepository";
import getToken from "../../utils/getToken";

const action = async ({ request }) => {
  const token = await getToken();

  const formData = await request.formData();

  const userId = formData.get("userId");
  await deleteUser(userId, token);

  return redirect("/users");
};

export { action };
