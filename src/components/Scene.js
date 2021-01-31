import React, { useState, useRef, Suspense, useEffect } from "react";
import * as THREE from "three";
import { a, useSpring, config } from "react-spring/three";
import styled from "styled-components";
import { useTexture, DeviceOrientationControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import { useProxy } from "valtio";
import { state } from "../store";
import Laptop from "./Laptop";
import { colors } from "../styles/theme";
import logo from "../images/logo.png";

import About from "./About";

const BgCircle = () => {
  const ref = useRef();
  const { darkGrey } = colors;
  const logoTexture = useTexture(logo);

  useEffect(() => {
    logoTexture.offset.y = -0.05;
  }, [logoTexture]);

  return (
    <mesh
      receiveShadow
      rotation-x={Math.PI * -0.5}
      position={[0, -0.25, -1]}
      ref={ref}
    >
      <cylinderBufferGeometry args={[3, 3, 0.1, 24]} />
      <meshBasicMaterial attachArray="material" color={darkGrey} />
      <meshBasicMaterial attachArray="material" map={logoTexture} />
      <meshPhongMaterial attachArray="material" color={darkGrey} />
      <meshBasicMaterial attachArray="material" color={darkGrey} />
    </mesh>
  );
};

const Box = () => {
  const deviceOrientationRef = useRef();

  useFrame(() => {
    if (deviceOrientationRef.current.object.rotation.x < -0.4) {
      deviceOrientationRef.current.object.rotation.x = -0.4;
    }
    if (deviceOrientationRef.current.object.rotation.x > 0.4) {
      deviceOrientationRef.current.object.rotation.x = 0.4;
    }
    if (deviceOrientationRef.current.object.rotation.y < -0.4) {
      deviceOrientationRef.current.object.rotation.y = -0.4;
    }
    if (deviceOrientationRef.current.object.rotation.y > 0.4) {
      deviceOrientationRef.current.object.rotation.y = 0.4;
    }
    // if (deviceOrientationRef.current.object.rotation.y < -1.5) {
    //   deviceOrientationRef.current.object.rotation.y = -1.5;
    // }

    if (Math.random() > 0.8) {
      console.log(deviceOrientationRef.current.object.rotation.z);
    }
  });

  return (
    <>
      <DeviceOrientationControls
        ref={deviceOrientationRef}
        // alphaOffset={0.01}
        // screenOrientation={-90}
      />
      <mesh position={[0, 0, 3]}>
        <boxBufferGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
};

const Scene = () => {
  const { currentView, isMobile } = useProxy(state);
  const isFirstView = currentView === 0;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    state.isMobile = isMobile;
    setIsReady(true);
  }, []);

  const canvasProps = {
    style: {
      position: "fixed",
      background: "radial-gradient(circle, var(--orange) 40%, var(--red) 100%)",
    },
    camera: {
      position: [0, 0, 5],
    },
    shadowMap: true,
  };

  const { rotationY, scale, rotationX } = useSpring({
    to: [
      {
        scale: [0.6, 0.6, 0.6],
        rotationY: Math.PI,
        config: { tension: 400, ...config.gentle },
      },
      { scale: [1, 1, 1], rotationY: 0, rotationX: 0.05 },
    ],
    from: { rotationY: Math.PI, scale: [0.1, 0.1, 0.1] },
  });

  const spotLightProps = isFirstView
    ? { angle: 0.35, intensity: 0.9, penumbra: 0.5 }
    : { angle: 0.8, intensity: 1.4, penumbra: 0.2 };

  return (
    isReady && (
      <Canvas
        resize={{ polyfill: ResizeObserver }}
        {...canvasProps}
        onPointerMissed={
          isFirstView
            ? null
            : () => {
                state.currentView = 0;
              }
        }
      >
        <directionalLight position={[0, 3, 3]} intensity={0.5} />
        <spotLight castShadow position={[0, -1, 5]} {...spotLightProps} />
        <Box />
        <About />
      </Canvas>
    )
  );
};

export default Scene;
