/* eslint-disable prettier/prettier */
import * as yup from "yup";

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  dob: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  status: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  jobTitle: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
});

export default formValidationSchema;
