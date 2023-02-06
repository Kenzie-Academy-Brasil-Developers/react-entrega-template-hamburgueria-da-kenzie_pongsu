import styled from "styled-components";

export const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 346px;
  border: 2px solid var(--grey20);
  border-radius: 5px;
  margin: 20px 0;

  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: var(--grey20);
    width: 276px;
    object-fit: contain;
  }

  .imgBox img {
    height: 100%;
    object-fit: contain;
  }

  .cardInfos {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
      font-size: 18px;
      line-height: 24px;
    }

    h6 {
      font-size: 12px;
      line-height: 16px;
      color: var(--grey50);
      font-weight: lighter;
      margin-top: -7px;
    }

    h4 {
      font-size: 14px;
      line-height: 24px;
      color: var(--primary);
    }
  }
`;
