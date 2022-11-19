/* eslint-disable */
import React from "react";

const FormikControl = (props) => {
    const { control, ...rest } = props;

    switch (control) {
        case "input":
            return <input {...rest} />;
        default:
            return null
    }
}
export default FormikControl