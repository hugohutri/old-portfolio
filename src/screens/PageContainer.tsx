import React, { FC } from "react";
import styled from "styled-components";
import ButtonRow from "./Home/components/ButtonRow";
import Home from "./Home/Home";

const Wrapper = styled.div`
  padding: 3%;
  height: max(100vh, 100%);
  backdrop-filter: blur(13px);
  background-color: #0008;
`;

const PageContainer: FC<{}> = () => {
  return (
    <Wrapper className="container">
      <Home />
      <hr />
      <ButtonRow />
    </Wrapper>
  );
};

export default PageContainer;
