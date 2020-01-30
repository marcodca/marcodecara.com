import React, {useRef, useEffect}  from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import Parallax from 'parallax-js'
//icons
import reactIcon from "../images/icons/react-icon.svg"
import gatbsyIcon from "../images/icons/gatsby-icon.svg"
import styledComponentsIcon from "../images/icons/styled-components-icon.svg"
import graphQlIcon from "../images/icons/graphql-icon.svg"

const Scene = styled.div`
  ${tw`w-1/3 flex align-center justify-center h-1/3`}
`;

const Icon = styled.div`
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  min-width: ${props => props.size * 9}px;
  min-height: ${props => props.size * 9}px;
  width: ${props => props.size}vw;
  height: ${props => props.size}vw;
  max-width: ${props => props.size * 1.5 }vw;
  max-height: ${props => props.size* 1.5 }vw;
  background-image: ${props => `url(${props.icon})`};
`;

const WebTechs = () => {

  const sceneRef = useRef();

  useEffect(()=>{
    console.log(sceneRef.current);

    //eslint-disable-next-line
    const parallax = new Parallax(sceneRef.current);
  },[])

  return (
    <Scene
    ref={sceneRef}
    >
      <Icon
        size={16}
        data-depth="0.60"
        icon={reactIcon}
      />
      <Icon
        size={24}
        data-depth="0.80"
        icon={graphQlIcon}
      />

    </Scene>
  );
};

export default WebTechs;
