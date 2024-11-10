import * as yup from "yup";

export const EmailSchema = yup.object({
  email: yup
    .string()
    .required("Email or Username is required")
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email"),
});
