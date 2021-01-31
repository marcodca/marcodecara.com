import React, { useState, useRef, useCallback, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { a, useSpring } from "react-spring/three";
import * as THREE from "three";
import { useProxy } from "valtio";
import { state } from "../store";
import About from "./About";

export default function Laptop() {
  const snapshot = useProxy(state);
  const isFirstView = snapshot.currentView === 0;

  //model stuff
  const { nodes, materials } = useGLTF("/laptop.glb");

  //refs
  const wrapper = useRef();
  const model = useRef();
  const plane = useRef();

  useEffect(() => {
    model.current.traverse((child) => {
      if (child.type === "Mesh") child.castShadow = true;
    });
  }, []);

  //Floating effect & screen "glow"
  const handleLocationToCenter = useCallback((wrapperObject) => {
    Object.entries(wrapperObject.rotation).forEach(([key, rotation]) => {
      if (Math.abs(rotation) > 0.01) {
        wrapperObject.rotation[key[1]] = 0;
        wrapperObject.position.y = 0;
      }
    });
  }, []);

  useFrame(({ clock: { elapsedTime } }) => {
    if (!isFirstView) {
      handleLocationToCenter(wrapper.current);
      return;
    }

    //Screen "glowing"
    materials["Material.001"].emissive.r += Math.sin(elapsedTime * 4) * 0.002;
    materials["Material.001"].emissive.g += Math.sin(elapsedTime * 4) * 0.002;
    materials["Material.001"].emissive.b += Math.sin(elapsedTime * 4) * 0.002;

    // Floting
    wrapper.current.position.y -= Math.sin(elapsedTime) * 0.002;
    wrapper.current.rotation.x += Math.cos(elapsedTime) * 0.001;
    wrapper.current.rotation.y += Math.cos(elapsedTime) * 0.0008;
    wrapper.current.rotation.z += Math.cos(elapsedTime) * 0.0007;
  });

  //Following cursor/rotation effect
  const mouse = new THREE.Vector2();
  const pointsOfIntersection = new THREE.Vector3();
  const handleRotationReset = useCallback((element) => {
    Object.entries(element.rotation).forEach(([key, rotation]) => {
      if (Math.abs(rotation) >= 0.03) {
        element.rotation[key[1]] += -Math.sign(rotation) * 0.03;
      }
    });
  }, []);

  useFrame(({ raycaster, mouse: { x, y }, camera }) => {
    if (!isFirstView) {
      handleRotationReset(model.current);
      return;
    }

    mouse.x = x;
    mouse.y = y - 1;
    raycaster.setFromCamera(mouse, camera);

    raycaster.ray.intersectPlane(plane.current, pointsOfIntersection);
    model.current.lookAt(pointsOfIntersection);
  });

  //Zoom animation
  const { scale, position } = useSpring({
    scale: isFirstView ? [5, 5, 5] : [10, 10, 10],
    position: isFirstView ? [0, -0.8, 1.5] : [0, -0.8, 5]
  });

  //poiner cursor on hover
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let cursor = "auto";

    if (isFirstView && hovered) cursor = "pointer";

    document.body.style.cursor = cursor;
  }, [hovered, isFirstView]);

  return (
    <>
      <group ref={wrapper}>
        <a.group
          ref={model}
          dispose={null}
          scale={scale}
          position={position}
          onClick={
            isFirstView
              ? () => {
                  state.currentView = 1;
                }
              : null
          }
          onPointerEnter={() => {
            setHovered(true);
          }}
          onPointerOut={() => {
            setHovered(false);
          }}
        >
          <mesh
            material={materials.keyboard}
            geometry={nodes.Keyboard.geometry}
          />
          <group>
            <mesh
              material-castShadow={true}
              material={materials["White.001"]}
              geometry={nodes.Frame.geometry}
              position={[0, 0.12, -0.19]}
              rotation={[1.21, 0, 0]}
            />
            <mesh
              material={materials[isFirstView ? "Material.001" : "White.001"]}
              geometry={nodes.Screen001.geometry}
              position={[0, 0.12, -0.19]}
              rotation={[-1.91, 0, Math.PI]}
            />
            {!isFirstView && <About />}
          </group>
        </a.group>
      </group>
      <plane ref={plane} args={[new THREE.Vector3(0, 0, 1.2), -4.2]} />
    </>
  );
}

useGLTF.preload("/laptop.glb");
