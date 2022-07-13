import * as THREE from 'three';

import {  MeshProps, useFrame, useLoader } from '@react-three/fiber'
import { FC, Suspense, useRef  } from 'react'
import { OrbitControls } from '@react-three/drei';



export interface BoxProps extends MeshProps {
  size: number;
  color?: string;
  image?: any;
}

const Box: FC<BoxProps> = ({ size, color, image, ...props }): JSX.Element => {


  const ref: any = useRef()


  useFrame((state, delta) => (ref.current.rotation.x += 0.01, ref.current.rotation.y += 0.01))
 
  const [texture] = useLoader(THREE.TextureLoader, [image])
  return (
    <>
      <OrbitControls
        enableDamping={false}
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        rotateSpeed={0.6} />
      <Suspense fallback={null}></Suspense>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <mesh
        {...props}
        ref={ref}
        orthographic
      >
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial map={image && texture} color={color} />
      </mesh>

    </>
  )
}

export default Box