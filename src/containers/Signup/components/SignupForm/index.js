import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Auth } from "aws-amplify";

import InputField from "../../../../components/InputField";
import LoaderButton from "../../../../components/LoaderButton";
import { SubmitButton } from "../../../../styles/buttons";
import { onError } from "../../../../libs/errorLib";

import { FIELDS, initialValues } from "./constants";

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export default function SignupForm({ setNewUser }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async ({ email, password }) => {
    setIsLoading(true);

    try {
      const newUser = await Auth.signUp({
        username: email,
        password: password
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }

    setIsLoading(false);
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
        <InputField
          type="password"
          name={FIELDS.CONFIRM_PASSWORD_FIELD}
          value={values[FIELDS.CONFIRM_PASSWORD_FIELD]}
          handleChange={handleChange}
          label="Confirmation Password"
        />
        <LoaderButton isLoading={isLoading}>
          <SubmitButton type="submit">SignUp</SubmitButton>
        </LoaderButton>
      </form>
    </LoginContainer>
  );
}
