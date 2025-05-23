"use client";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus {
  outline: none;
}

input:focus,
textarea:focus {
  outline: none;
}

ul {
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}


button {
  display: inline-block;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

`;
