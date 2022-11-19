/* eslint-disable no-unused-vars */
import React, { useCallback, useState, FormEvent } from "react";
import { Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Flex, Header, Box, Button } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";
import { addEmployee } from "../../redux/employees";
import FormikControl from "./FormikControl";

const Create = () => {
  const dispatch = useDispatch(addEmployee);
  const history = useHistory();

  const [firstName, setName] = useState("");
  const [username, setUsername] = useState("");

  const employeeList = useSelector(state => state.employees.value);

  return (
    <>
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        /* onSubmit={submitForm} */
        initialValues={{
          firstName: "",
          surname: "",
        }}
      >
        <Form>
          <Flex alignItems="center" justifyContent="center" height="100%">
            <Flex alignItems="left" direction="column" width="300px">
              <FormikControl
                control="input"
                name="firstName"
                placeholder="First name"
                onChange={event => {
                  setName(event.target.value);
                }}
              />
              <FormikControl
                control="input"
                name="surname"
                placeholder="Surname"
                onChange={event => {
                  setUsername(event.target.value);
                }}
              />
              <Button
                data-cy="saveButton"
                onClick={() => {
                  // eslint-disable-next-line no-restricted-globals, no-undef
                  dispatch(
                    addEmployee({
                      id: employeeList[employeeList.length - 1].id + 1,
                      firstName,
                      username,
                    })
                  );
                }}
                type="submit"
              >
                Save
              </Button>
              <Button data-cy="backButton" onClick={() => history.goBack()}>
                Back
              </Button>
            </Flex>
          </Flex>
        </Form>
      </Formik>
    </>
  );
};

export default Create;
