import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
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
  <HashRouter>
    <Routes>
      <Route path="/" element={<PageContainer />} />
      <Route path="/moi" element={<div>Moi</div>} />
    </Routes>
  </HashRouter>
);

export default Root;
