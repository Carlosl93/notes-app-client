import styled from "styled-components";

import { colors as c } from "./color";

const buttonTransitionIn = "border 0.3s ease";
const buttonTransitionOut = "border 0.6s ease";

export const SubmitButton = styled.button`
  background: none;
  border: 1px solid ${c.gray.medium};
  border-radius: 5px;
  height: 35px;
  margin-top: 10px;
  width: 300px;
  transition: ${buttonTransitionOut};

  &:hover {
    border: 1px solid ${c.gray.dark};
    transition: ${buttonTransitionIn};
  }
`;
