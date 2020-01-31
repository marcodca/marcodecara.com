import React, { useRef, useEffect } from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Parallax from "parallax-js";
import { media } from "../styles/utils";
//icons
import {
  jsBack,
  jsFront,
  reactBack,
  reactFront,
  htmlFront,
  htmlBack,
  cssFront,
  cssBack
} from "../images/icons";

const Scene = styled.div`
  ${tw`w-1/3 h-1/3 relative`}
`;

const Icon = styled.div`
  position: absolute;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  /* min-width: ${props => props.size * 9}px;
  min-height: ${props => props.size * 9}px; */
  width: ${props => props.size}vw;
  height: ${props => props.size}vw;
  top: ${props => props.top}vw !important;
  left: ${props => props.left}vw !important;
  background-image: ${props => `url(${props.icon})`};
  ${media.sm`  width: ${props => props.size * 1.33}vw;
  height: ${ props => props.size * 1.33}vw;
  top: ${props => props.top * 1.33}vw !important;
  left: ${props => props.left* 1.33}vw !important;
  `}
`;

const WebTechs = () => {
  const sceneRef = useRef();

  useEffect(() => {
    //eslint-disable-next-line
    const parallax = new Parallax(sceneRef.current);
  }, []);

  return (
    <Scene ref={sceneRef}>
      <Icon size={16} data-depth="0.1" icon={jsBack} />
      <Icon size={16} data-depth="0.2" icon={jsFront} />
      <Icon size={14} data-depth="0.5" icon={htmlBack} left={-14} top={0} />
      <Icon size={14} data-depth="0.3" icon={htmlFront} left={-14} top={0} />
      <Icon size={15} data-depth="-0.2" icon={cssBack} left={19} top={0} />
      <Icon size={15} data-depth="-0.4" icon={cssFront} left={19} top={0} />
      <Icon size={13} data-depth="1.6" icon={reactBack} top={-13} left={2} />
      <Icon size={13} data-depth="1.2" icon={reactFront} top={-13} left={2} />
    </Scene>
  );
};

export default WebTechs;
