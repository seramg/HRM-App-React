import styled from "styled-components";

const LoaderWrapper = styled.tr`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: var(--primary-color);
    border-radius: 50%;
    animation: rotation 1s linear infinite;
    }

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