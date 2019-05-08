import styled from "styled-components"
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Blob as blob } from "react-blob"
import { hidden } from '../styles/utils'

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
  /* min-width: 80px;
  min-height: 80px; */
  /* box-shadow: -1px -2px 62px -2px rgba(0, 0, 0, 0.75); */
`;

export const ResponsiveBlob = styled(Blob)`
  min-width: 7rem;
  min-height: 7rem;
`