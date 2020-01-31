import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import clamp from "lodash-es/clamp";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import { media } from "../styles/utils";

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 }
    });
  });

  return (
    <Container>
      <AvatarBack>I'm Marco</AvatarBack>
      <AvatarWrapper
        {...bind()}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`)
        }}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ borderRadius: "50%" }}
          draggable={false}
        />
      </AvatarWrapper>
    </Container>
  );
};

const AvatarWrapper = styled(animated.div)`
  ${tw`absolute`};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: grayscale(80%);
  cursor: -webkit-grab;
  &:active {
    cursor: -webkit-grabbing;
  }
`;

const Container = styled.div`
  ${tw`rounded-full relative`};
  height: 160px;
  width: 160px;
  ${media.md`height: 140px;
    width: 140px;`}
`;

const AvatarBack = styled.div`
  ${tw`absolute rounded-full font-serif`};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: linear-gradient(#000, #333);
  color: #fff;
`;

export default Avatar;
