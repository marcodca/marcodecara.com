import { css } from "styled-components";
import { breakpoints } from "./theme";

//Media queries spitter, mobile first.
export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label].replace("px", "") / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
