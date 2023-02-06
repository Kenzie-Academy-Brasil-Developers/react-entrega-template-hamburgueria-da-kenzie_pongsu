import styled from "styled-components";

export const StyledSearchInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
  margin-bottom: 25px;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3px;
  }

  h3 {
    color: var(--grey100);
    font-size: 25px;
    line-height: 34px;
  }

  .searchText {
    color: var(--grey50);
    font-size: 25px;
    line-height: 27px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    display: none;
    margin-left: 20px;
    max-height: 40px;
  }

  @media (min-width: 720px) {
    button {
      display: flex;
      align-items: center;
    }
  }
`;
