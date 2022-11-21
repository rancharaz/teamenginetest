/* eslint-disable prettier/prettier */


/* employee reducer */
import { createSlice } from "@reduxjs/toolkit";
/* import * as yup from "yup"; */
import EmployeesData from "./FakeData";

// eslint-disable-next-line import/prefer-default-export
export const employeeSlice = createSlice({
  // create states
  name: "employees",
  // initial state of a data
  initialState: { value: EmployeesData },
  // functions call to provide action to state
  reducers: {
    // access current value of the state
    // action-> object pass through component
    // eslint-disable-next-line no-unused-vars
    addEmployee: (state, action) => {
      // write code for adding user
      state.value.push(action.payload);
      alert("Employee created");
    },
    deleteEmployee: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = state.value.filter(
        employee => employee.id !== action.payload.id
      );
      alert("Employee has been deleted");
    },
    updateEmployee: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.value.map(employee => {
        if (employee.id === action.payload.id) {
          // eslint-disable-next-line no-param-reassign
          employee.firstName = action.payload.firstName
          // eslint-disable-next-line no-param-reassign
          employee.surname = action.payload.surname;
          // eslint-disable-next-line no-param-reassign
          employee.dob = action.payload.dob;
          // eslint-disable-next-line no-param-reassign
          employee.status = action.payload.status;
          // eslint-disable-next-line no-param-reassign
          employee.jobtitle = action.payload.jobtitle;

        }
      });
      alert("Employee has been updated");

    },
  },
});

/* grabbing actions from employeeslice */
export const { addEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
