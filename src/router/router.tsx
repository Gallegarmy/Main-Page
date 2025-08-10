import React from "react";
import Paths from "./paths";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.Timeline} element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
