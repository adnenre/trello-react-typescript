import styled from "styled-components";

type Notificationtype = {
  danger?: Boolean;
  success?: Boolean;
};
export const NotificationBox = styled.div<Notificationtype>`
  padding: 5px 10px;
  background-color: ${({ danger, success, theme }) => {
    if (danger) return theme.colors.danger;
    if (success) return theme.colors.success;
    return;
  }};
  display: flex;
  width: 100%;
  font-size: 12px;
  color: white;
  border-radius: 10px;
`;

export const NotificationBoxIcon = styled.div`
  width: 15px;
  color: white;
`;
export const NofiticationMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const NotificationMessage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
