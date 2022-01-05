import React, { createContext, FC, ReactElement, useState } from "react";
import styled from "styled-components";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

const Wrapper = styled.div`
  padding: 3%;
  height: max(100vh, 100%);
  backdrop-filter: blur(13px);
  background-color: #0008;
`;

type PageType = "Home" | "Projects" | "Skills";

const PAGES = new Map<PageType, ReactElement>([
  ["Home", <Home />],
  ["Projects", <Projects />],
  ["Skills", <p>Skills?</p>],
]);

export const PageChangerContext = createContext((page: PageType) => {});

const PageContainer: FC<{}> = () => {
  const [page, setPage] = useState<PageType>("Home");

  return (
    <PageChangerContext.Provider value={setPage}>
      <Wrapper className="container">{PAGES.get(page)}</Wrapper>
    </PageChangerContext.Provider>
  );
};

export default PageContainer;
