import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #222;
`;
export const Loading = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    border: none;
    background-color: #fff;
    color: #f1faee;
    padding: 0.8rem 1.5rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: 0.3s ease;
`;
export const LoadingText = styled.span`
    margin-left: 0.8rem;
    color: white;
`;

export const Spinner = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    border: 3px solid #dddf00;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-right-color: transparent;
    border-left-color: transparent;
    border-radius: 50%;
    animation: spin 1s infinite;
    @keyframes spin {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
