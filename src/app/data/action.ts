import axios from "axios";
import { baseUrl, endPoints } from "../core/endpoints";

export const postSignUp = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const res = await axios.post(
      baseUrl + endPoints.signup,
      {
        username: username,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error during the API call", error);
    return null;
  }
};
