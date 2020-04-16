import React from "react";

import { SubmitButton } from "../styles/buttons";

export default function LoaderButton({ isLoading, disabled, ...props }) {
  return isLoading ? (
    <SubmitButton disabled={disabled || isLoading} {...props}>
      Loading
    </SubmitButton>
  ) : (
    props.children
  );
}

LoaderButton.defaultProps = {
  className: "",
  disabled: false
};
