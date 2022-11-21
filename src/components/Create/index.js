/* eslint-disable prettier/prettier */
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

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [status, setStatus] = useState("");
  const [jobtitle, setJobTitle] = useState("");

  const employeeList = useSelector(state => state.employees.value);

  const submitForm = useCallback(
    employee => {
      dispatch(
        addEmployee({
          id: employeeList[employeeList.length - 1].id + 1,
          firstName,
          surname,
          dob,
          status,
          jobtitle,
        })
      );
    },
    [dispatch, dob, employeeList, firstName, jobtitle, status, surname]
  );

  return (
    <>
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          firstName: "Test",
          surname: "Test",
          dob: "Test",
          status: "Test",
          jobtitle: "Test",
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
                  setFirstName(event.target.value);
                }}
              />
              <FormikControl
                control="input"
                name="surname"
                placeholder="Surname"
                onChange={event => {
                  setSurname(event.target.value);
                }}
              />
              <FormikControl
                control="input"
                name="dob"
                placeholder="Date of Birth"
                onChange={event => {
                  setDob(event.target.value);
                }}
              />
              <FormikControl
                control="input"
                name="status"
                placeholder="status"
                onChange={event => {
                  setStatus(event.target.value);
                }}
              />
              <FormikControl
                control="input"
                name="jobtitle"
                placeholder="Job title"
                onChange={event => {
                  setJobTitle(event.target.value);
                }}
              />
              <div>
                <Button
                  data-cy="saveButton"
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals, no-undef
                    dispatch(
                      addEmployee({
                        id: employeeList[employeeList.length - 1].id + 1,
                        firstName,
                        surname,
                        dob,
                        status,
                        jobtitle,
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
              </div>

            </Flex>
          </Flex>
        </Form>
      </Formik>
    </>
  );
};

export default Create;
