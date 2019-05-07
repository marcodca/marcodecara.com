import styled from "styled-components";
import { Blob as blob } from "react-blob";

export const Blob = styled(blob)`
position: absolute;
  top: 20%;
  left: 85%;
  width: 100px;
  height: 100px;
  background-color: black;
  border: 2px solid black;
  opacity: 1;
  /* box-shadow: -1px -2px 62px -2px rgba(0, 0, 0, 0.75); */
`;
