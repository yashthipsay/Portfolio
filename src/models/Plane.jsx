import React from 'react'
import planeS from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei';

const Plane = ({isRotating, ...props}) => {
    const {scene, animations} = useGLTF(planeS);
  return (
    <mesh scale={[0.03,0.03,0.03]} {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane