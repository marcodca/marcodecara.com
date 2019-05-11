import tw from 'tailwind.macro'
import { screens } from '../../tailwind'
import { css } from 'styled-components'

export const hidden = css`
  ${tw`hidden md:block`};
`
export const media = Object.keys(screens).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${screens[label].replace("px", "") / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {});
