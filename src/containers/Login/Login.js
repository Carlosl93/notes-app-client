import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import InputField from "../InputField";
import { colors as c } from "../../styles/color";

import { FIELDS, initialValues } from "./constants";

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

const LoginButton = styled.button`
  background: none;
  border: 1px solid ${c.gray.medium};
  border-radius: 5px;
  height: 35px;
  margin-top: 10px;
  width: 300px;
`;

export default function Login() {
  const handleSubmitForm = values => {
    console.log("values", values);
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleSubmitForm,
    handleSubmit: e => e.preventDeault()
  });

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name={FIELDS.EMAIL_FIELD}
          value={values[FIELDS.EMAIL_FIELD]}
          handleChange={handleChange}
          label="Email"
        />
        <InputField
          type="password"
          name={FIELDS.PASSWORD_FIELD}
          value={values[FIELDS.PASSWORD_FIELD]}
          handleChange={handleChange}
          label="Password"
        />
        <LoginButton type="submit">Login</LoginButton>
      </form>
    </LoginContainer>
  );
}
