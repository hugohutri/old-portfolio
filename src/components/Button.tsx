import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  color: white !important;
  border: 1px solid #bbb !important;

  :hover,
  :focus {
    color: #ddd !important;
    border-color: #ddd !important;
    background-color: #0004;
  }
`;

interface ButtonProps {
  onClick?: () => any;
  href?: string;
  children: string | React.ReactChildren;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <div className="four columns" style={{ opacity: props.disabled ? 0.3 : 1 }}>
      <StyledButton
        className="button u-full-width"
        onClick={props.onClick}
        href={props.href}
      >
        {props.children}
      </StyledButton>
    </div>
  );
};

export default Button;
