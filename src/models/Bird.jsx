import React from 'react'
import birdScene from '../assets/3d/scifi_drone_1.1.glb'
import { useGLTF } from '@react-three/drei'

const Bird = () => {
    const {scene, animations} = useGLTF(birdScene);
    
  return (
   <mesh position={[0, 3, -3]} scale={[0.01,0.01,0.01]} rotation={[0.3, 0, 0]}>
    <primitive object={scene} />
    </mesh>
  )
}

export default Bird