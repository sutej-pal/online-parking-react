import styled from "styled-components";
import Theme from "../../theme";

export const SearchBarContainer = styled.div`
  border-radius: 100px;
  padding: 15px;
  width: 60rem;
  height: 80px;
  background-color: white;

  .google-places-autocomplete-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    height: 100%;
  }

  .autocomplete-container {
    display: inline-block;
    height: 100%;
    height: 100%;
    width: 100%;
    input {
      width: 100%;
      padding: 7px 9px;
      border: 1px solid var(--bs-border-color);
      border-radius: var(--bs-border-radius-pill);
      height: 100%;
      &:focus-visible {
        outline-offset: 0px;
        outline: 1px solid ${Theme.colors.primary};
      }
    }
  }

  .datepickers-wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100%;
    flex-wrap: wrap;

    .custom-datepicker {
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      .react-datepicker__input-container {
        height: 100%;
      }
      input {
        padding: 7px 9px;
        border: 1px solid var(--bs-border-color);
        border-radius: var(--bs-border-radius-pill);
        height: 100%;
        &:focus-visible {
          outline-offset: 0px;
          outline: 1px solid ${Theme.colors.primary};
        }
      }
    }
  }

  .filter-button {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    border-radius: var(--bs-border-radius-pill);
    height: 45px;
    width: 45px;
  }

  .filters-card {
    position: absolute;
    background: white;
    width: 330px;
    height: 330px;
    left: -120px;
    top: 70px;
    border-radius: 7px;
    padding: 10px;
  }
  .search-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--bs-border-radius-pill);
    height: 45px;
    width: 45px;
    background-color: ${Theme.colors.primary};
  }
`;
