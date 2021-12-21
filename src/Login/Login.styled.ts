import styled from "styled-components";
export const LoginContainer = styled.div`
  margin: auto;
  position: relative;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
  width: 300px;
  background: #eff3f8;
  box-shadow: #06060617 2px 2px 8px 0px;
  > p {
    text-align: center;
    padding: 5px;
  }
  > input {
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: solid 1px #777;
  }
  > * {
    margin-bottom: 5px;
  }
`;
export const LoginNotification = styled.div`
  position: absolute;
  top: -40px;
  width: 100%;
`;
