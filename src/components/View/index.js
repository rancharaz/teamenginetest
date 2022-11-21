/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, updateEmployee } from "../../redux/employees";
import "./table.css"
import { Box, Button, Flex, Header } from "../styled";
import FormikControl from "../Create/FormikControl";
// eslint-disable-next-line import/no-unresolved

const View = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newEmployeeName, setnewEmployeeName] = useState("");
  const [newSurname, setnewSurname] = useState("");
  const [newDob, setnewDob] = useState("");
  const [newStatus, setnnewStatus] = useState("");
  const [newJobTitle, setnewJobTitle] = useState("");

  const employeeList = useSelector(state => state.employees.value);

  /*   console.log(employeeList.name); */
  return (
    <>
      <Header data-cy="header">View Employees</Header>

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        <h1>
          {employeeList &&
            employeeList.map(employee => {
              // eslint-disable-next-line react/jsx-no-useless-fragment
              const { id, firstName, surname, dob, status, jobtitle } = employee;
              return (
                <div key={id}>
                  <div>
                    <table>

                      <thead>
                        <tr>
                          <th>First name</th>
                          <th>surname</th>
                          <th>Date of birth</th>
                          <th>Status</th>
                          <th>Job title</th>
                          <th>Action</th>
                        </tr>
                      </thead>


                      <tbody>
                        <tr>
                          <td>{firstName}</td>
                          <td>{surname}</td>
                          <td>{dob}</td>
                          <td>{status}</td>
                          <td>{jobtitle}</td>
                          <td>
                            <Button
                              data-cy="backButton"
                              onClick={() =>
                                dispatch(
                                  updateEmployee({
                                    id,
                                    firstName: newEmployeeName,
                                    surname: newSurname,
                                    dob: newDob,
                                    status: newStatus,
                                    jobtitle: newJobTitle
                                  })
                                )
                              }
                            >
                              Update
                            </Button>
                            ||
                            <Button
                              data-cy="backButton"
                              onClick={() => dispatch(deleteEmployee({ id }))}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      </tbody>




                      <tr>
                        <td>
                          <FormikControl
                            control="input"
                            name="firstName"
                            placeholder="Edit first name"
                            onChange={event => setnewEmployeeName(event.target.value)}
                          />
                        </td>
                        <td>
                          <td>
                            <FormikControl
                              control="input"
                              name="newSurname"
                              placeholder="Edit surname"
                              onChange={event => setnewSurname(event.target.value)}
                            /></td></td>
                        <td>                        <td>
                          <FormikControl
                            control="input"
                            name="newDob"
                            placeholder="Edit date of birth"
                            onChange={event => setnewDob(event.target.value)}
                          /></td></td>
                        <td>                        <td>
                          <FormikControl
                            control="input"
                            name="newStatus"
                            placeholder="Edit status"
                            onChange={event => setnnewStatus(event.target.value)}
                          /></td></td>
                        <td>
                          <td>
                            <FormikControl
                              control="input"
                              name="newJobTitle"
                              placeholder="Edit job title"
                              onChange={event => setnewJobTitle(event.target.value)}
                            /></td></td>

                      </tr>

                    </table>
                  </div>
                </div>
              );
            })}
        </h1>
        <Box>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
        {console.clear()}
      </Flex>
    </>
  );
};

export default View;
