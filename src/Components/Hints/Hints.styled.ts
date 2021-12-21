import styled from "styled-components";

type HintsType = {
  danger?: Boolean;
  success?: Boolean;
};
export const HintsBox = styled.div<HintsType>`
  padding: 5px 10px;
  background-color: ${({ danger, success }) => {
    if (danger) return "#ff8a65";
    if (success) return "#5aac44";
    return;
  }};
  display: flex;

  font-size: 12px;
  color: white;
  border-radius: 10px;
`;

export const HintsBoxIcon = styled.div`
  width: 15px;
  color: white;
`;
export const HintsBoxMessage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
