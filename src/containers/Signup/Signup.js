import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import InputField from "../InputField";
import LoaderButton from "../../components/LoaderButton";
import { SubmitButton } from "../../styles/buttons";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";

import { FIELDS, initialValues } from "./constants";
import SignupForm from "./components/SignupForm";
import SignupConfirmation from "./components/SignupConfirmation";

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export default function Signup() {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();

  const [newUser, setNewUser] = useState(null);

  return newUser === null ? (
    <SignupForm setNewUser={setNewUser} />
  ) : (
    <SignupConfirmation />
  );
}
