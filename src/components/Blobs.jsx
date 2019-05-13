import React from 'react'
import styled from "styled-components"
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Blob as blob } from "react-blob"
import { hidden } from '../styles/utils'

//Todo: combine responsive and regular blobs into one.

export const Blob = styled(blob)`
  ${tw`absolute z-20`};
  ${props => props.back && tw`z-0`}
  ${props => props.hiddenMobile && hidden};
  top: ${props => props.top};
  left: ${props => props.left};
  width : ${props => props.size};
  height : ${props => props.size};
  background-color: ${props => props.empty ? "" : props.color ? props.color : colors.white};
  border: ${props => props.border};
  opacity: ${props => props.opacity};
  box-shadow: ${props => props.shadow ? "-1px -2px 62px -2px rgba(0, 0, 0, 0.75)" : ""};
`;

//A responsive blob should take its size only as an integrer!
export const ResponsiveBlob = styled(Blob)`
  width : ${props => `${props.size}vw`};
  height : ${props => `${props.size}vw`};
  min-width: ${props => `${props.size}vh`};
  min-height: ${props => `${props.size}vh`};
`
export const DoubleBlob = props => {
  const { className, outerColor, size, top, left, shadow,innerColor } = props;
return (
  <ResponsiveBlob
      className={className}
      color={outerColor}
      size={size}
      top={top}
      left={left}
      shadow={shadow}
  >
    <Blob 
      color={innerColor}
      size="80%"
    />
  </ResponsiveBlob>
)};