import React from "react";
import { Field, useFormikContext } from "formik";
import TextField from "./styled/TextField";
import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";

const FormField = props => {
  // eslint-disable-next-line no-unused-vars
  const { name, placeholder, ...rest } = props;
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <TextField
            data-cy={`${name}Input`}
            fontSize="lg"
            placeholder={placeholder}
            fluid
            error={meta.error && meta.touched}
            {...field}
          />
        )}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>
          {errors[name]}
        </ErrorMessage>
      )}
    </Box>
  );
};

export default FormField;
