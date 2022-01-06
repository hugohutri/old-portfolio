import { FC } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";

const StyledButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonRow: FC<{}> = () => {
  return (
    <StyledButtonRow className="row">
      <Button href="https://github.com/hugohutri">Projektit</Button>
      <Button href="https://github.com/hugohutri/hugohutri/blob/main/README.md">
        Taidot
      </Button>
      <Button disabled>Ota yhteyttä</Button>
    </StyledButtonRow>
  );
};

export default ButtonRow;
