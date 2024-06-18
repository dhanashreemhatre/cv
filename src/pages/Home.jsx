import React,{Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'


const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating,setIsRotating]=useState(false);

  const adjustIslandForScreenSize=()=>{
    let screenScale=null;
    let screenPosition=[0,-6.5,-43];
    let rotation=[0.1,4.7,0];
    
    if(window.innerWidth<768){
      screenScale=[0.9,0.9,0.9];
    }
    else{
      screenScale=[1,1,1];
    }
    return [screenScale,screenPosition,rotation]
  }
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const [isLandScale, isLandPosition, isLandRotation]=adjustIslandForScreenSize();
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas 
          className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
          camera={{near:0.1,far:1000}}>
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1,1,1]} scale={2} />
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />
            <Sky isRotating={isRotating} />
            <Island
              position={isLandPosition}
              scale={isLandScale}
              rotation={isLandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Bird />
            <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home