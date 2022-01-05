import React, { FC } from "react";
import styled from "styled-components";
import Home from "./Home/Home";
const backgroundImage = require("../assets/bg.jpg");

const Wrapper = styled.div`
  padding: 3%;
  height: max(100vh, 100%);
  backdrop-filter: blur(13px);
  background-color: #0008;
`;

const Background = styled.div`
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

const PageContainer: FC<{}> = () => {
  return (
    <>
      <Background />
      <Wrapper className="container">
        <Home />
      </Wrapper>
    </>
  );
};

export default PageContainer;
