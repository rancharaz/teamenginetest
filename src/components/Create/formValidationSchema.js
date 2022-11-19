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
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  dob: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid date of birth")
    .required("Required"),
  jobtitle: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid job title")
    .required("Required"),
});

export default formValidationSchema;
