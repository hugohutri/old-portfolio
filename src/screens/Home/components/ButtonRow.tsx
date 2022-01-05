import { FC, useContext } from "react";
import Button from "../../../components/Button";
import { PageChangerContext } from "../../PageContainer";

const ButtonRow: FC<{}> = () => {
  const setPage = useContext(PageChangerContext);

  return (
    <div className="row button-row">
      <Button onClick={() => setPage("Projects")}>Projektit</Button>
      <Button>Taidot</Button>
      <Button>Ota yhteyttä</Button>
    </div>
  );
};

export default ButtonRow;
