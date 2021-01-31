import { createGlobalStyle } from "styled-components";
import { fonts, colors, breakpoints } from "./theme";

export default createGlobalStyle`

:root{
  --font-primary: ${fonts.primary};
  --font-secondary: ${fonts.secondary};
  --red: ${colors.red};
  --orange: ${colors.orange};
  --light-grey: ${colors.lightGrey};
  --dark-grey: ${colors.darkGrey};
  --white: ${colors.white};
  --black: ${colors.black};
  --breakpint-sm: ${breakpoints.sm};
  --breakpint-md: ${breakpoints.md};
  --breakpint-lg: ${breakpoints.lg};
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
#root,
.App {
  margin: 0;
  padding: 0;
}

a, a:visited {
  color: var(--black);
}
a:focus, button:focus {
    outline: 1.5px solid var(--dark-grey);
}
`;
