import React from "react";
import styled, { css } from "styled-components";
import { useSpring, animated } from "react-spring";
import tw from "tailwind.macro";
//icons
import reactIcon from "../images/icons/react-icon.svg";
import gatbsyIcon from "../images/icons/gatsby-icon.svg";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 70}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export const Container = styled.div`
  ${tw`w-1/3 flex align-center justify-center`}
  background-color: green;
  height: 50%;
`;

const Icon = styled(animated.div)`
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
`;

const ReactIcon = styled(Icon)`
  min-width: 60ch;
  min-height: 60ch;
  width: 20vw;
  height: 20vw;
  max-width: 100ch;
  max-height: 100ch;
  background-image: url(${reactIcon});
`;

const GatsbyIcon = styled(Icon)`
  width: 20ch;
  height: 20ch;
  background-image: url(${gatbsyIcon});
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
      <ReactIcon style={{ transform: props.xy.interpolate(trans1) }} />
      <GatsbyIcon style={{ transform: props.xy.interpolate(trans2) }}/>
    </Container>
  );
};

export default WebTechs;
