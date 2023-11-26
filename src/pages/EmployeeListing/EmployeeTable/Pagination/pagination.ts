import styled from "styled-components";

const PaginationWrapper = styled.ul`
display: flex;
list-style-type: none;

.pagination-item {
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    border-radius: 25px;

    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
      
      .arrow{
        color: var(--primary-color);
      }
    }

    &.selected {
      background-color: var(--primary-color);
      color: var(--white-color);
    }

    .arrow {
      color: var(--dark-gray-color);
    }

    &.disabled {
      pointer-events: none;

      .arrow {
        color: var(--light-gray-color)
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
}
`;

export default PaginationWrapper;