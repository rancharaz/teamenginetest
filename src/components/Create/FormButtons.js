/* eslint-disable prettier/prettier */
import React from "react";
import { useHistory } from "react-router";
// import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { Box, Button, Flex } from "../styled";
import { addEmployee } from "../../redux/employees";

const FormButtons = () => {
  const dispatch = useDispatch(addEmployee);

  // const { handleSubmit } = useFormikContext();
  const history = useHistory();

  return (
    <Flex justifyContent="center">
      <Box marginRight="sm">
        <Button data-cy="backButton" onClick={() => history.goBack()}>
          Back
        </Button>
      </Box>
      <Box>
        <Button
          data-cy="saveButton"
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals, no-undef
            dispatch(addEmployee({ id: 0, name, username }));
          }}
          type="submit"
        >
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default FormButtons;
