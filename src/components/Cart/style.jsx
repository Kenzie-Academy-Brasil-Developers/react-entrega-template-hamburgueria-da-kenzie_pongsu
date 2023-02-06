import styled from "styled-components";

export const StyledCart = styled.aside`
  margin-top: 13px;

  .cartHeader {
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    border-radius: 5px 5px 0px 0px;
    background-color: var(--primary);
    color: #fff;
    min-width: 100%;
    height: 65px;
  }

  .cart {
    border-radius: 0px 0px 5px 5px;
    background-color: var(--grey0);
    padding: 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .empytCart {
    background-color: var(--grey0);
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    height: 158px;
    display: flex;
    gap: 13px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empytCart h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: var(--grey100);
  }

  .empytCart h5 {
    font-size: 14px;
    line-height: 24px;
    font-weight: normal;
    color: var(--grey50);
  }
`;
