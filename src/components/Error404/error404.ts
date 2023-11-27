import styled from "styled-components";

const Error404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;

  .error-title {
    margin: 0;
    font-size: 105px;
    font-weight: 900;
    line-height: 1.5;
    color: var(--dark-gray-color);
  }

  .error-subtitle {
    color: var(--dark-gray-color);
  }
  .back-to-home-btn {
    background-color: blue;
  }
`;
export default Error404Wrapper;
