import React from "react";
import styled from "styled-components";

import { colors as c } from "../../../../../../styles/color";

const NoteContainer = styled.div`
  border: 1px solid ${c.gray.medium};
  border-radius: ${props => (props.lastItem ? "0 0 5px 5px" : "0")};
  border-top: none;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  h4 {
    font-weight: 900;
  }
`;

const Note = ({ lastItem }) => {
  console.log("lastItem", lastItem);
  return (
    <NoteContainer lastItem={lastItem}>
      <h4>Hello World</h4>
      <p>Create: 2/14/2017, 4:18:38 PM</p>
    </NoteContainer>
  );
};

export default Note;
