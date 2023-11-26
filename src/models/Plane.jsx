import React, { useEffect, useRef } from 'react'
import planeS from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei';


const Plane = ({isRotating, ...props}) => {
  const ref = useRef();
    const {scene, animations} = useGLTF(planeS);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
      console.log(actions);
      if(isRotating) {
        
      }
    }, [actions, isRotating])

  return (
    <mesh scale={[0.03,0.03,0.03]} {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane