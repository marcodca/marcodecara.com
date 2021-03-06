import { createGlobalStyle } from 'styled-components'
import { colors } from '../../tailwind'
import background from '../images/background.svg'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-image: url(${background});
    background-color: ${colors.grey};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* background by SVGBackgrounds.com */
  ::selection {
      background-color: ${colors.black};
      color: ${colors['grey-light']};
    }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${colors['orange-light']};
    text-decoration: none;
  }
`

export default GlobalStyle
