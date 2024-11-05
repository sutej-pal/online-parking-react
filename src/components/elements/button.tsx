import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "../../theme";
import { ReactNode, MouseEvent } from "react";
import utils from "../../utils/utils";

interface PrimaryButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = styled.button<{ $variant: string }>`
  background-color: ${(props) =>
    props.$variant === "primary" ? Theme.colors.primary : "white"};
  color: ${(props) => (props.$variant === "primary" ? "white" : "black")};
  border: none;
  padding: 0.5em 1em;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary" &&
      utils.adjustColorShade(Theme.colors.primary, -30)};
  }
`;

const ThemeButton = ({
  variant = "primary",
  className,
  onClick,
  children,
}: PrimaryButtonProps) => {
  return (
    <Button $variant={variant} className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ThemeButton;
