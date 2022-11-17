import React from "react";
import Products from "./components/products/Products";
import Pagination from "./components/pagination/Pagination";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Products />
      <Pagination />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
