import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 17px;

  .btnGreen {
    background: var(--primary);
    color: #fff;
  }

  .btnGreen:hover {
    background: var(--primary50);
  }

  .btnGrey {
    background: var(--grey20);
    color: var(--grey50);
  }

  .btnGrey:hover {
    color: var(--grey20);
    background: var(--grey50);
  }
`;
