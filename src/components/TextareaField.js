import React from "react";
import styled from "styled-components";

import { colors as c } from "../styles/color";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    border: 1px solid ${c.gray.dark};
    border-radius: 5px;
    height: 200px;
    padding: 0 5px;
    width: 500px;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid ${c.gray.dark};
  border-radius: 5px;
  padding: 5px;
  white-space: normal;
`;

export default function TextareaField({
  name,
  type,
  value,
  label,
  handleChange
}) {
  return (
    <InputContainer>
      <label>{label}</label>
      <TextArea
        cols="60"
        rows="10"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
}