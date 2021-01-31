import { createGlobalStyle } from "styled-components";
import { fonts, colors, breakpoints } from "./theme";

export default createGlobalStyle`

@font-face {
  font-family: "Chau Philomene One";
  src: url("/fonts/ChauPhilomeneOne.ttf");
}
@font-face {
  font-family: "Fira Code";
  src: url("/fonts/FiraCode.ttf");
}

:root{
  --font-primary: ${fonts.primary}, Impact, Charcoal, sans-serif;
  --font-secondary: ${fonts.secondary}, "Courier New", Courier, monospace;
  --red: ${colors.red};
  --orange: ${colors.orange};
  --light-grey: ${colors.lightGrey};
  --dark-grey: ${colors.darkGrey};
  --white: ${colors.white};
  --black: ${colors.black};
  --breakpoint-sm: ${breakpoints.sm};
  --breakpoint-md: ${breakpoints.md};
  --breakpoint-lg: ${breakpoints.lg};
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  overflow: hidden;
  text-align: center;
  font-family: var(--font-secondary);
  background-color: var(--red);
}

body,
#root {
  margin: 0;
  padding: 0;
}

main {
  height: 100vh;
}

a, a:visited {
  color: var(--black);
}
a:focus, button:focus {
    outline: 1.5px solid var(--dark-grey);
}
`;
