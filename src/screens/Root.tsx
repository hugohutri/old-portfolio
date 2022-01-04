import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Home/Home';
import ProjectsScreen from './Projects/Projects';

import "skeleton-css/css/skeleton.css"
import "skeleton-css/css/normalize.css"

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/projects" element={<ProjectsScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Root;