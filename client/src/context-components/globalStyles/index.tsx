import React from "react";
import { createGlobalStyle } from "styled-components";

type ThemeType = {
  body: string;
  text: string;
}

const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;

export default GlobalStyles;

