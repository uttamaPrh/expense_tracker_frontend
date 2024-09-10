import { postSignUp } from "@/app/data/action";
import { ISignUp } from "@/app/data/interface";
import { useFormik } from "formik";

export default function useSignUp() {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const res = await postSignUp(
        values.email,
        values.password,
        values.username
      );
      formik.resetForm();
    },
  });
  return { formik };
}

const initialValues: ISignUp = {
  username: "",
  email: "",
  password: "",
};
