import styled from "styled-components";

const SearchWrapper = styled.div`
    flex: 1;
    background-color: var(--background-color);
    border-radius: 10px;
    padding: 5px;
    border: 2px solid var(--secondary-color);
    
    .material-symbols-outlined, .search-dropdown-btn-text{
      margin: 0;
      color: var(--secondary-color);  
    }
  }
  .search-form {
    flex: 1;
  }
  .search-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: 0;
    color: white;
    text-decoration: none;
    font-size: 16px;
    color: var(--secondary-color);
  }
  .search-btn {
    padding: 10px 10px;
    gap: 5px !important;
    border-radius: 0;
    background: none;
    border-left: 2px solid var(--secondary-color);
    flex-direction: row-reverse;

  }


`;
export default SearchWrapper;
