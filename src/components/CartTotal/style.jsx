import styled from "styled-components";

export const StyledCartTotal = styled.div`
  border-top: 2px solid var(--grey20);
  margin-top: 20px;

  .cartPriceResum {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  .cartPriceResum h4 {
    font-size: 14px;
    line-height: 24px;
    color: var(--grey100);
  }

  .cartPriceResum p {
    font-size: 14px;
    line-height: 24px;
    color: var(--grey50);
    font-weight: bold;
  }

  .cleanCart {
    width: 100%;
  }

  .cleanCart button {
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    height: 60px;
    background: var(--grey20);
    color: var(--grey50);
  }

  .cleanCart button:hover {
    color: var(--grey20);
    background: var(--grey50);
    cursor: pointer;
  }
`;
