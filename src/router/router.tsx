import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "../ui/scroll-to-top/scroll-to-top";
import Home from "../pages/Home";
import Paths from "./paths";
import Timeline from "../pages/Timeline";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path={Paths.Home} element={<Home />} />
          <Route path={Paths.Timeline} element={<Timeline />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
