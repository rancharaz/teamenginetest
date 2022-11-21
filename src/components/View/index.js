/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, updateEmployee } from "../../redux/employees";
import { Box, Button, Flex, Header } from "../styled";
import FormikControl from "../Create/FormikControl";

const View = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newEmployeeName, setnewEmployeeName] = useState("");
  const [username, setUsername] = useState("");

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
              const { id, firstName, surname, status } = employee;
              return (
                <div key={id}>
                  <div>{firstName}</div>
                  <div>
                    <FormikControl
                      control="input"
                      name="surname"
                      placeholder="New Employee name"
                      onChange={event => setnewEmployeeName(event.target.value)}
                    />
                    <Button
                      data-cy="backButton"
                      onClick={() =>
                        dispatch(
                          updateEmployee({
                            id,
                            firstName: newEmployeeName,
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
      </Flex>
    </>
  );
};

export default View;
