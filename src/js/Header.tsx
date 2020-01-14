import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  padding: 1em;
  background-color: tomato;
`

export function Header() {
  return (
    <StyledHeader>Header</StyledHeader>
  );
}
