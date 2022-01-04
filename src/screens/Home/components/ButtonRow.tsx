import { FC } from "react";
import Button from "./Button";

const ButtonRow: FC<{}> = () => {
  return (
    <div className="row button-row">
      <Button href="/projects">Projektit</Button>
      <Button href="/projects">Taidot</Button>
      <Button href="/projects">Ota yhteyttä</Button>
    </div>
  );
};

export default ButtonRow;
