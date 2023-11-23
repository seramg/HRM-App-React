import styled from "styled-components";

const LoaderWrapper = styled.span`
    position: absolute;
    width: 48px;
    height: 48px;
    top: 100px;
    left: 0;
    right: 0;
    bottom:0;
    margin: auto;  
    border: 5px solid #FFF;
    border-bottom-color: var(--primary-color);
    border-radius: 100%;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`
export default LoaderWrapper;