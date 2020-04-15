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
    height: 35px;
    padding: 0 5px;
    width: 300px;
  }
`;

export default function InputField({ name, type, value, label, handleChange }) {
  return (
    <InputContainer>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </InputContainer>
  );
}
