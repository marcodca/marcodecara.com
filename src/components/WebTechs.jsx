import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import tw from "tailwind.macro"
//icons
import reactIcon from "../images/icons/react-icon.svg"
import gatbsyIcon from "../images/icons/gatsby-icon.svg"
import styledComponentsIcon from "../images/icons/styled-components-icon.svg"
import graphQlIcon from "../images/icons/graphql-icon.svg"


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 70}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 120}px,${y + 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5 + 130}px,${y / 3.5 + 210}px,0)`;

const Container = styled.div`
  ${tw`w-1/3 flex align-center justify-center h-1/3`}
`;

const Icon = styled(animated.div)`
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  min-width: ${props => props.size * 11}px;
  min-height: ${props => props.size * 11}px;
  width: ${props => props.size}vw;
  height: ${props => props.size}vw;
  max-width: ${props => props.size * 1.5 }vw;
  max-height: ${props => props.size* 1.5 }vw;
  background-image: ${props => `url(${props.icon})`};
`;

const WebTechs = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Icon
        size={35}
        icon={reactIcon} 
        style={{ transform: props.xy.interpolate(trans1) }}
        />
      <Icon
        size={13}
        icon={gatbsyIcon} 
        style={{ transform: props.xy.interpolate(trans2) }}
        />
      <Icon
        size={11}
        icon={styledComponentsIcon} 
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <Icon
        size={11}
        icon={graphQlIcon} 
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </Container>
  );
};

export default WebTechs;
