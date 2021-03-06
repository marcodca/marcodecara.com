import tw from "tailwind.macro";
import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20vh);
  }
`;

const upAndfadeOut = keyframes`
  0% {
    transform: translateY(0);
    opacity : 1
  }
  20% {
    transform: translateY(0);
    opacity : 1
  }
  100% {
    transform: translateY(-45vh);
    opacity : 0
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const scaleUpAnimation = delay => css`
  ${scaleUp} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${delay}ms both;
`;

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`;

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`;

const upAndfadeOutAnimation = (delay = 0) => css`
  ${upAndfadeOut} 18s ease-out ${delay}s infinite;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  ${tw`pin absolute`};
`;

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  ${tw`pin absolute`};
`;

export const UpAndfadeOut = styled.div`
  animation : ${props => upAndfadeOutAnimation(props.delay)};
  ${tw`pin absolute`};
`

export const ScaleUp = styled.div`
  animation: ${props => scaleUpAnimation(props.delay)};
`;

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`;

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`;
