import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import { FIELDS, initialValues } from "./constants";

const LoginContainer = styled.div`
  margin-top: 60px;
`;

export default function Login() {
  const handleSubmit = values => {
    console.log("values", values);
  };

  const { onSubmit, values, handleChange } = useFormik({
    initialValues,
    onSubmit: handleSubmit
  });

  console.log("values", values);
  console.log("FIELDS", FIELDS);

  return (
    <LoginContainer>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="text"
          name={FIELDS.LOGIN_FIELD}
          value={values[FIELDS.LOGIN_FIELD]}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name={FIELDS.PASSWORD_FIELD}
          value={values[FIELDS.PASSWORD_FIELD]}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
}
