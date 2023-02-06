import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  padding: 7px 7px;
  background-color: #fff;
  border: 2px solid var(--grey20);
  border-radius: 8px;
  justify-content: space-between;
  :hover {
    border: 2px solid var(--grey100);
  }

  input {
    width: 70%;
    border: none;
    padding-left: 13px;
  }

  input:focus-visible {
    outline: none;
  }
`;
