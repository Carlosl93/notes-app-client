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

export default function SignupConfirmation({ newUser }) {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();

  const handleSubmitForm = async ({ verificationCode }) => {
    setIsLoading(true);

    try {
      await Auth.confirmSignUp(newUser.user?.username, verificationCode);

      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
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
          name={FIELDS.VERIFICATION_CODE}
          value={values[FIELDS.VERIFICATION_CODE]}
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
