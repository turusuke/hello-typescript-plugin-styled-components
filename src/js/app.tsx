import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Hello = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Hello>hoge</Hello>
  </div>
);
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
