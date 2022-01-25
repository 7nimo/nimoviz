import { Canvas } from '@react-three/fiber';

type Props = {
  children: React.ReactNode;
}

function Scene({ children }: Props): React.ReactElement<Props> {
  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}
    >
      <ambientLight intensity={0.2} />
      <spotLight position={[1, -0.25, -0.25]} angle={0.7} penumbra={1} />
      <pointLight intensity={0.9} position={[10, 10, 10]} />
      {children}
    </Canvas>
  )
}

export default Scene;