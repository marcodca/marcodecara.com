import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import spot from '../images/spot.svg'

export const Title = styled.h2`
  ${tw`text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block z-90`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${spot});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
`

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-serif text-black mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(155, 155, 155, 1);
`

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-black mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`
