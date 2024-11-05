import styled from "styled-components";
import Theme from "../../theme";

export const HeaderContainer = styled.div`
  .navbar {
    height: 70px;
    background: white;
    .navbar-brand {
      font-size: 2rem;
      font-weight: 500;
      color: ${Theme.colors.secondary};
    }
  }
  button.login-btn {
    width: 100px;
  }
`;
