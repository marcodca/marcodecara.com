import styled from "styled-components"
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Blob as blob } from "react-blob"
import { hidden } from '../styles/utils'

//TODO: Add proptypes!

export const Blob = styled(blob)`
  ${tw`absolute`};
  ${props => props.hiddenMobile && hidden};
  top: ${props => props.top};
  left: ${props => props.left};
  width : ${props => props.size};
  height : ${props => props.size};
  background-color: ${props => props.empty ? "" : props.color ? props.color : colors.white};
  border: ${props => props.border};
  opacity: ${props => props.opacity};
  /* box-shadow: -1px -2px 62px -2px rgba(0, 0, 0, 0.75); */
`;

//A responsive blob should take its size only as an integrer!
export const ResponsiveBlob = styled(Blob)`
  width : ${props => `${props.size}vw`};
  height : ${props => `${props.size}vw`};
  min-width: ${props => `${props.size}vh`};
  min-height: ${props => `${props.size}vh`};
`