import styled from "styled-components";

export const SearchBarContainer = styled.div`
  border-radius: 100px;
  width: 60rem;
  background-color: white;

  .autocomplete-container {
    display: inline-block;
  }

  .filter-button {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .dropdown-menu {
    width: 300px;
    height: 300px;
  }

  .filters-card {
    position: absolute;
    background: white;
    width: 300px;
    height: 300px;
    left: -100px;
    top: 50px;
    border-radius: 7px;
    padding: 10px;
  }
`;
