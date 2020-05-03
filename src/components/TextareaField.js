import React from "react";
import styled from "styled-components";

import { colors as c } from "../styles/color";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  border: 1px solid ${c.gray.dark};
  border-radius: 5px;
  padding: 5px;
  min-height: 200px;
  white-space: normal;
  width: 100%;
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
      <TextArea name={name} value={value} onChange={handleChange} />
    </InputContainer>
  );
}
