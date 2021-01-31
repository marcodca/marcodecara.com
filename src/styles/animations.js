import { keyframes } from "styled-components";

export const glitch = keyframes`
   0% {
    --split: 20;
    --shift: 15;
    --shadow: -2;
  }
  5% {
    --split: 30;
    --shift: 15;
    --shadow: -2:
  }
  10% {
    --split: 80;
    --shift: 10;
    --shadow: -2;
  }
  15% {
    --split: 55;
    --shift: 10;
    --shadow: -2;
  }
  20%,
  50% {
    --split: 0;
    --shift: 0;
    --shadow: 0;
  }
  100% {
    --split: 0;
    --shift: 0;
    --shadow: 0;
  }
`;

export const blink = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const upAndDown = keyframes`
  100% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0.5rem);
  }
`;
