import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function Sky({isRotating}) {
  const sky = useGLTF(skyScene);
 const skyRef=useRef();
 useFrame((_,delta)=>{
    skyRef.current.rotation.y+=0.25*delta
 })
  

  return (
    <mesh ref={skyRef}>
      // use the primitive element when you want to directly embed a complex 3D model or scene
      <primitive object={sky.scene} />
    </mesh>
  );
}
