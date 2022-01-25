/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as THREE from 'three';
import { MeshProps, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import Scene from './Scene';
import { Mesh } from 'three';

function Box(props: MeshProps): React.ReactElement<MeshProps> {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <boxGeometry args={[.5, .5, .5]} />
      <meshStandardMaterial color='#c1c1c1' />
    </mesh>
  )
}

type Props = {
  color: string;
} & MeshProps;

function Sphere(props: Props): React.ReactElement<MeshProps> {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    // mesh.current.rotation.x += 0.001;
    // mesh.current.rotation.y += 0.001;
  });
  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <sphereGeometry attach="geometry" args={[1, 128, 64]} />
      {/* <meshPhysicalMaterial clearcoat={.5} roughness={.5} metalness={.5} color={props.color} attach="material" /> */}
      <meshNormalMaterial flatShading={true} />
    </mesh>
  )
}

function Grid(props: MeshProps) {
  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      
      <gridHelper args={[10, 1000]} />
    </mesh>
  )
}

function Axes(props: MeshProps) {
  const mesh = useRef<THREE.Mesh>(null!);


  return (
    <mesh
      {...props}
      ref={mesh}
    >
      
      <axesHelper args={[2]} />
    </mesh>
  )
}

export function App() {
  return (
    <Scene>
      <Axes position={0} />
      <Grid position={[0, 0, 0]} />
      <Box position={[3, 1, -2]}/>
      {/* <Sphere position={[0, 0, 2]} color='#00FFFF'/> */}
      <mesh>
        <sphereBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Scene>
  );
}

export default App;
