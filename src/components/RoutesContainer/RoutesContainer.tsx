import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterLayout from "../RouterLayout";
import Home from "../../pages/Home";
import router from "../../shared/services/router";

const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouterLayout>
              <Home />
            </RouterLayout>
          }
        />

        <Route
          path={router.what.path}
          element={<RouterLayout>{router.what.component}</RouterLayout>}
        />

        <Route
          path={router.who.path}
          element={<RouterLayout>{router.who.component}</RouterLayout>}
        />

        <Route
          path={router.where.path}
          element={<RouterLayout>{router.where.component}</RouterLayout>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
