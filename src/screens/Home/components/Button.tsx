import { FC } from "react";

interface ButtonProps {
  href: string;
  children: string | React.ReactChildren;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <div className="four columns">
      <a className="button u-full-width" href={props.href}>
        {props.children}
      </a>
    </div>
  );
};

export default Button;
