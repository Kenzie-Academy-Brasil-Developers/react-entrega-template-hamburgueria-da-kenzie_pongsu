import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 13px;
  overflow-x: scroll;
  max-width: 100vw;

  .searchFail {
    color: var(--secondary);
    filter: brightness(0.8);
    padding-right: 30px;
    padding-top: 20px;
    margin-bottom: 30px;
  }
`;
