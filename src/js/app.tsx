import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { Header } from "./Header";

const Content = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Header/>
      <Content>Content</Content>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
