import React from "react";
import styled, { css } from "styled-components";
import { Blob } from "react-blob";

export const SimpleBlob = styled(Blob)`
  width: 100px;
  height: 100px;
  top: 20%;
  right: 5%;
  background-color: white;
  border: 2px solid black;
  opacity: 1;
  /* box-shadow: -1px -2px 62px -2px rgba(0, 0, 0, 0.75); */
`;
