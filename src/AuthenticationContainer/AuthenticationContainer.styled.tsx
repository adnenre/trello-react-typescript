import styled from 'styled-components';
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';

export const AuthenticationContainer = styled.div`
    margin: auto;
    position: relative;
`;
export const AuthenticationPage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    background-image: url(${image1}), url(${image2});
    background-repeat: no-repeat, no-repeat;
    background-attachment: fixed, fixed;
    background-size: 400px, 400px;
    background-position: 5% 90%, 95% 90%;
`;

export const AuthenticationForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    border-radius: 10px;

    width: 100%;
    background: white;
    box-shadow: #06060617 2px 2px 8px 0px;
    > p {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100px;
        font-size: 1rem;
    }
    > input {
        padding: 5px;
        border-radius: 5px;
        outline: none;
        border: none;
        border-radius: 50px;
        box-shadow: 0 4px 8px 1px #99999973;
        margin-bottom: 10px;
        padding-left: 40px;
        padding: 10px 10px 10px 40px;
    }
    > button {
        margin-top: 30px;
    }
`;
export const AuthenticationNotification = styled.div`
    position: absolute;
    width: 100%;
    transform: translate(0, -110%);
`;
