import React from 'react'
import planeS from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei';

const Plane = () => {
    const {scene, animations} = useGLTF(planeS);
  return (
    <mesh scale={[0.03,0.03,0.03]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane