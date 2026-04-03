"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Banana3d(props: any) {
  const { nodes, materials } = useGLTF("/banana.glb") as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.banana_low_Banana_0.geometry}
        material={materials.Banana}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
    </group>
  );
}

useGLTF.preload("/banana.glb");
