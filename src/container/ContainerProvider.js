import React from "react";
import { Container } from "./Container";
import { useState } from "react";

function ContainerProvider(props) {
  let [search, setSearch] = useState();

  return (
    <Container.Provider value={{ search, setSearch }}>
      {props.children}
    </Container.Provider>
  );
}
export default ContainerProvider;