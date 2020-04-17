import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import InputField from "../../../InputField";
import LoaderButton from "../../../../components/LoaderButton";
import { SubmitButton } from "../../../../styles/buttons";
import { useAppContext } from "../../../../libs/contextLib";
import { onError } from "../../../../libs/errorLib";

import { FIELDS, initialValues } from "./constants";

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export default function SignupConfirmation() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async ({ email, password }) => {
    setIsLoading(true);
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
          label="Verification Code"
        />
        <LoaderButton isLoading={isLoading}>
          <SubmitButton type="submit">Verify</SubmitButton>
        </LoaderButton>
      </form>
    </LoginContainer>
  );
}
