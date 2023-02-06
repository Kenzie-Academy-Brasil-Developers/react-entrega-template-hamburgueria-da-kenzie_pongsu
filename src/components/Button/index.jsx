import { StyledButton } from "./style";
import React from "react";

export default function Button({ onClick, id, innerText, className }) {
  return (
    <StyledButton className={className} onClick={onClick} id={id}>
      {innerText}
    </StyledButton>
  );
}
