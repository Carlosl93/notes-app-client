import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

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

export default function AttachmentField({
  name,
  type,
  value,
  label,
  handleChange
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <InputContainer>
      <input {...getInputProps()} />
      {isDragActive ? <label>Dragged</label> : <label>Drag Here</label>}
    </InputContainer>
  );
}
