import React from "react";
import GlobalStyle from "./src/styles/GlobalStyle";
import Helmet from "react-helmet";

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet title="Marco de Cara">
      <link
        rel="preload"
        href="/fonts/ChauPhilomeneOne.ttf"
        as="font"
        type="font/ttf"
        crossorigin
      ></link>
      <link
        rel="preload"
        href="/fonts/FiraCode.ttf"
        as="font"
        type="font/ttf"
        crossorigin
      ></link>
    </Helmet>
    <GlobalStyle />
    {element}
  </>
);
