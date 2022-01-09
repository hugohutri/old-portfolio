import { FC } from "react";
import Button from "../../../components/Button";

const ButtonRow: FC<{}> = () => {
  return (
    <div className="row">
      <Button href="https://hutri.fi/projects">Projektit</Button>
      <Button href="https://github.com/hugohutri/hugohutri/blob/main/README.md">
        Taidot
      </Button>
      <Button disabled>Ota yhteyttä</Button>
    </div>
  );
};

export default ButtonRow;
