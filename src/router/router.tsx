import React from "react";
import Paths from "./paths";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
