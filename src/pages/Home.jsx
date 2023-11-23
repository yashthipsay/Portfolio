import {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island';
import  Sky  from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-1, -2.5, -4];
    let rotation = [0.2, 5.7, 0];

    if(window.innerWidth < 768){
      screenScale = [10, 10, 10];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768){
      screenScale = [0.03, 0.03, 0.03];
      // screenPosition = [0, -4, -4];
    } else {
      screenScale = [2, 2, 2];
      // screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition, rotation]
  }

  const [ islandScale, islandPosition, rotation ] = adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
       className={`w-full h-screen bg-transperant ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
       camera={{near: 0.1, far: 1000}}
       >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 2, 1]} intensity={5}/>
          <ambientLight intensity={1}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          <Bird/>
          <Sky />
          <Island 
            scale = {islandScale}
            position={islandPosition}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Plane 
            planeScale={planeScale}
            planePosition={planePosition}
          />
         
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home