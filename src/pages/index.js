import * as React from "react";
import { useGesture } from "react-use-gesture";
import { useProxy } from "valtio";
import { state } from "../store";
import Title from "../components/Title";
import Scene from "../components/Scene";
import Footer from "../components/Footer";
import styled from "styled-components";
import { upAndDown } from "../styles/animations";
import media from "../styles/media";
import { Loader } from "@react-three/drei";

const IndexPage = () => {
  const snapshot = useProxy(state);
  const isFirstView = snapshot.currentView === 0;

  const getGestureHandle = (threshold) => {
    return ({ movement: [, y] }) => {
      const next =
        y > threshold ? 1 : y < threshold * -1 ? 0 : snapshot.currentView;
      if (next !== snapshot.currentView) state.currentView = next;
    };
  };

  const bind = useGesture({
    onDrag: getGestureHandle(250),
    onWheel: getGestureHandle(400),
  });

  const [status, setStatus] = React.useState("no")

const handleRequest = () => {
  setStatus('yes')
  DeviceMotionEvent.requestPermission()
}

  return (
    <>
      <main {...bind()}>
        <Title />
        <Scene />
        
        <ScrollButton
          isFirstView={isFirstView}
          onClick={handleRequest}
          // onClick={() => {
          //   state.currentView = isFirstView ? 1 : 0;
          // }}
        >
          <span />
          <h1>Device: {status.toString()}</h1>
          Scroll
        </ScrollButton>
        <Footer />
        <Loader
          barStyles={{ transform: "scaleY(2)", backgroundColor: "var(--red)" }}
          innerStyles={{
            transform: "skew(-17deg)",
          }}
        />
      </main>
    </>
  );
};

const ScrollButton = styled.button`
  appearance: none;
  position: absolute;
  z-index: 2;
  bottom: 2rem;
  font-family: var(--font-primary);
  border: 0;
  background: transparent;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 1.1rem;
  ${media.md`font-size: 1.5rem;`}
  ${media.lg`font-size: 2rem; bottom: 2.2rem;`}
  > span {
    position: relative;
    display: block;
    animation: ${upAndDown} 0.7s infinite alternate;
    &:after {
      content: ">";
      font-size: 1.6em;
      position: absolute;
      top: 0.8rem;
      left: 50%;
      transition-delay: 0.7s;
      transform: ${({ isFirstView }) =>
        `translateX(-50%) rotate(${isFirstView ? "90" : "-90"}deg)`};
    }
  }
`;

export default IndexPage;
