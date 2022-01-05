import React, { FC } from "react";
import styled from "styled-components";
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
    </Wrapper>
  );
};

export default PageContainer;
