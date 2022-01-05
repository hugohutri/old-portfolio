import { FC } from "react";
import Button from "../../../components/Button";

const ButtonRow: FC<{}> = () => {
  return (
    <div className="row">
      <Button href="https://github.com/hugohutri">Projektit</Button>
      <Button>Taidot</Button>
      <Button>Ota yhteyttä</Button>
    </div>
  );
};

export default ButtonRow;
