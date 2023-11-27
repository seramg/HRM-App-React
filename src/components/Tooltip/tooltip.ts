import styled from "styled-components";

const TooltipWrapper = styled.div<{ $left: number }>`
  position: absolute;
  background-color: var(--white-color);
  color: var(--secondary-color);
  border: 1px solid var(--dark-gray-color);
  padding: 5px;
  border-radius: 3px;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;

  &:before {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    top: -10px;
    left: ${(props) => `calc(${props.$left}% - 50px)`}; // Adjust this value based on your design
    transform: translateX(-50%);
  }
`;
export default TooltipWrapper;
