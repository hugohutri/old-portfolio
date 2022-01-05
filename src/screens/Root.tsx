import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import PageContainer from "./PageContainer";

// TODO: Routes
/* 
<HashRouter>
    <Routes>
        <Route path="/" element={<PageContainer />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
</HashRouter> 
*/

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageContainer />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
