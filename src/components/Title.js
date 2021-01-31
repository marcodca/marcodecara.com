import React from "react";
import styled, { css } from "styled-components";
import media from "../styles/media";
import { glitch, blink } from "../styles/animations";
import { useProxy } from "valtio";
import { state } from "../store";

const myName = "< Marco de Cara />";

const Title = () => {
  const snapshot = useProxy(state);
  const isFirstView = snapshot.currentView === 0;

  return (
    <Container isFirstView={isFirstView}>
      <H1 isFirstView={isFirstView}>
        {myName.split("").map((letter, i) => (
          <Letter
            key={i}
            index={i}
            isCode={getIsCode(i)}
            isFirstView={isFirstView}
          >
            {letter}
          </Letter>
        ))}
        <Underscore isFirstView={isFirstView}>_</Underscore>
      </H1>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: all 0.3s;
  &:before {
    content: "";
    width: 100%;
    height: 150%;
    position: absolute;
    top: ${({ isFirstView }) => (isFirstView ? "-100%" : "0")};
    left: 0;
    transition: top 0.3s;
    transition-delay: ${({ isFirstView }) => (isFirstView ? "0s" : "1s")};
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.6) 100%
    );
  }
`;

const H1 = styled.h1`
  position: relative;
  top: 1.5rem;
  font-family: var(--font-primary);
  margin: 0;
  letter-spacing: 1px;
  color: white;
  transform: ${({ isFirstView }) => `scale(${isFirstView ? 1 : 0.75})`};
  transition: transform 0.3s, font-size 0.2s;
  font-size: 2.3rem;
  ${media.sm`font-size: 2.5rem;`}
  ${media.md`font-size: 3rem;`}
  ${media.lg`font-size: 4rem;`}
`;

const Letter = styled.span`
  --split: 50;

  position: relative;
  color: ${({ isCode }) => (isCode ? "var(--dark-grey)" : "transparent")};
  min-width: 0.5ch;
  animation: ${glitch} infinite ease-in-out alternate-reverse;
  animation-duration: ${({ isCode }) => (isCode ? 1.3 : 1.6) + "s"};
  font-weight: ${({ isCode }) => (isCode ? 800 : 500)};
  font-size: ${({ isCode }) => (isCode ? 1.1 : 1)}em;
  &:after,
  &:before {
    content: ${({ children }) => `"${children}"`};
    position: absolute;
    color: ${({ isCode, isFirstView }) =>
      isCode && isFirstView
        ? "var(--dark-grey)"
        : isFirstView
        ? "var(--white)"
        : "var(--black)"};
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-clip-path: var(--clip);
    clip-path: var(--clip);
  }
  &:after {
    transform: translate(calc(var(--shift) * 1%), 0);
    --clip: inset(0 0 calc(var(--split) * 1%) 0);
    text-shadow: calc(var(--shadow) * 2px) calc(var(--shadow) * 2px)
      rgba(255 255 255 /0.7);
  }
  &:before {
    --clip: inset(calc((95 - var(--split)) * 1%) 0 0 0);
  }
`;

const Underscore = styled.span`
  animation: ${blink} 1s infinite steps(1);
  color: ${({ isFirstView }) =>
    isFirstView ? "var(--white)" : "var(--black)"};
`;

function getIsCode(i) {
  return i >= 5 && i < 11 ? true : false;
}

export default Title;
