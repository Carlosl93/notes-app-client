import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import TextareaField from "../TextareaField";
import LoaderButton from "../../components/LoaderButton";
import { SubmitButton } from "../../styles/buttons";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";

import { FIELDS, initialValues } from "./constants";

const NotesContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
`;

export default function NewNote() {
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
    <NotesContainer onSubmit={handleSubmit}>
      <TextareaField
        name={FIELDS.NOTE}
        value={values[FIELDS.NOTE]}
        handleChange={handleChange}
        label="Write your note"
      />
      <LoaderButton isLoading={isLoading}>
        <SubmitButton type="submit">Submit Note</SubmitButton>
      </LoaderButton>
    </NotesContainer>
  );
}
