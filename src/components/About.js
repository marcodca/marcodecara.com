import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import styled from "styled-components";
import media from "../styles/media";

const myEmail = "marcodecara@gmail.com";
const links = {
  github: "https://github.com/marcodca",
  linkedin: "https://www.linkedin.com/in/marcodecara/",
  twitter: "https://twitter.com/marco_dca",
  mail: `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${myEmail}&su=Hey%20Marco&tf=1`
};

const A = ({ children, ...props }) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferer"
    title={props.title || `Marco de Cara's ${children}`}
  >
    {children}
  </a>
);

const text = (
  <>
    I am a creative front-end developer based in Barcelona who loves to work
    around the React ecosystem, and everything related to moving pixels around.
    <br /> You can find me on: <A href={links.github}>github</A>,{" "}
    <A href={links.twitter}>twitter</A> & <A href={links.linkedin}>linkedin</A>
    ...
    <br />
    Or drop a{" "}
    <A href={links.mail} title={myEmail}>
      message
    </A>
    .
  </>
);
const About = () => {
  //A somewhat hacky approach, would be nicer to do this programatically
  const transitionTimeInMS = 1300;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady)
      setTimeout(() => {
        setIsReady(true);
      }, transitionTimeInMS);
  });

  return (
    <Html
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      fullscreen
      position={[0, 0, -0.6]}
    >
      {isReady ? <Content>{text}</Content> : ""}
    </Html>
  );
};

const Content = styled.p`
  position: relative;
  font-size: 1.3rem;
  top: -10%;
  transform: rotate(-1deg) rotateX(10deg);
  margin: 0;
  padding: 0.5rem;
  ${media.sm`
  font-size: 1.8rem;
  `}
  ${media.md`
    top: -20%;
    font-size: 2.2rem;
    top: -10%;
    max-width: 600px;
  `}
  ${media.lg`
    font-size: 3rem;
    max-width: 900px;
  `}
`;

export default About;
