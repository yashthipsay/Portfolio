import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island';
import  Sky  from '../models/Sky';
{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-2, 2.5, -2];
    let rotation = [0.4, 5.7, 0];

    if(window.innerWidth < 768){
      screenScale = [10, 10, 10];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation]
  }

  const [ islandScale, islandPosition, rotation ] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
       className='w-full h-screen bg-transperant'
       camera={{near: 0.1, far: 1000}}
       >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={5}/>
          <ambientLight intensity={1}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          <Sky />
          <Island 
            scale = {islandScale}
            position={islandPosition}
            rotation={rotation}
          />
         
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home