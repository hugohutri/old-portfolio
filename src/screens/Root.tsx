import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import PageContainer from "./PageContainer";
import Projects from "./Projects/Projects";

// Add Route here if needed
/* 
<HashRouter>
    <Routes>
        <Route path="/" element={<PageContainer />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/moi" element={<p>Moi</p>} />
    </Routes>
</HashRouter> 
*/

const Root = () => (
  <BrowserRouter basename="/portfolio">
    <Routes>
      <Route path="/" element={<PageContainer />} />
      <Route path="/portfolio/projects" element={<Projects />} />
      <Route path="/moi" element={<p>Moi</p>} />
    </Routes>
  </BrowserRouter>
);

export default Root;
