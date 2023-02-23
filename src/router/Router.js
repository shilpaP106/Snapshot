import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallary from "../components/Gallary";
import Home from "../components/Home";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          >
            <Route path="/category" element={<Gallary />} />
          </Route>
          <Route path="*" element={<h1>page NOT Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}