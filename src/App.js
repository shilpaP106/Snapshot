import React from "react";
import Router from "./router/Router";
import ContainerProvider from "./container/ContainerProvider";

export default function App() {
  return (
    <>
      <ContainerProvider>
        <Router />
      </ContainerProvider>
    </>
  );
}