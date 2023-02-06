import styled from "styled-components";

export const StyledCartProductCard = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  .firstPartCartCard {
    display: flex;
    gap: 13px;
  }

  .cartImgBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background-color: var(--grey20);
    border-radius: 5px;
  }

  .cartImg {
    width: 70px;
    height: 70px;
  }

  .middlePartCartCard {
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding: 10px 0;
  }

  .middlePartCartCard h3 {
    color: var(--grey100);
    font-size: 16px;
    max-width: 12ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .middlePartCartCard h6 {
    color: var(--grey50);
  }

  .removeCartCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
  }

  .removeCartCard button {
    border: none;
    background-color: transparent;
    color: var(--grey50);
  }

  .removeCartCard button:hover {
    cursor: pointer;
    color: var(--grey10);
    text-decoration: underline;
  }

  .removeCartCard h4 {
    font-size: 10px;
  }
  @media (min-width: 450px) {
    .middlePartCartCard h3 {
      max-width: 16ch;
    }
  }
`;
