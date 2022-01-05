import { FC } from "react";
import Button from "../../../components/Button";

const ButtonRow: FC<{}> = () => {
  return (
    <div className="row">
      <Button>Projektit</Button>
      <Button>Taidot</Button>
      <Button>Ota yhteyttä</Button>
    </div>
  );
};

export default ButtonRow;
