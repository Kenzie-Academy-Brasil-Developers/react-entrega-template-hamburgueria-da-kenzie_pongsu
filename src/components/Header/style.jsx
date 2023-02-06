import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;
  align-items: center;
  gap: 13px;
  background-color: var(--grey0);
  max-width: 100vw;

  .searchContainer {
    display: flex;
    width: 100%;
    height: 60px;
    max-width: 380px;
  }

  @media (min-width: 720px) {
    justify-content: space-between;
  }
`;
