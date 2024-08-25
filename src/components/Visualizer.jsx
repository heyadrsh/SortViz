import React from "react";
import styled from "styled-components";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Controller } from "./Controller";
import { AlgoDisplay } from "./AlgoDisplay";

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

export function Visualizer() {
  return (
    <Container>
      <NavBar />
      <Controller />
      <AlgoDisplay />
      <Footer />
    </Container>
  );
}
