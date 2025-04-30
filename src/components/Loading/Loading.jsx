import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import './Loading.scss';

function BedroomModel() {
  const { scene } = useGLTF('/bedroom.glb');
  const modelRef = useRef();
  
  useFrame(() => {
    modelRef.current.rotation.y += 0.002;
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (child.name.includes('bed')) {
          child.material.color.set(0x4a4e69);
        } else if (child.name.includes('wall') || child.name.includes('floor')) {
          child.material.color.set(0x22223b);
        } else {
          child.material.color.set(0x9a8c98);
        }
        child.material.metalness = 0.1;
        child.material.roughness = 0.7;
      }
    });
  }, [scene]);

  return <primitive ref={modelRef} object={scene} scale={0.7} position={[0, -0.8, 0]} />;
}

function ParticleBackground() {
  return (
    <>
      <Stars radius={300} depth={150} count={8000} factor={6} saturation={0} fade speed={1.5} />
      <Sparkles count={300} scale={25} size={3} speed={0.5} color="#ffff00" />
    </>
  );
}

function Loading({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          setTimeout(() => {
            setShowContent(true);
            onLoaded();
          }, 1000);
          return 100;
        }
        return prev + (Math.random() * 5 + 1);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <motion.div 
      className={`loading-container ${isLoaded ? 'loaded' : ''}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas className="fullscreen-canvas" camera={{ position: [5, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.7} color="#ffff99" />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1.2} color="#ffff99" />
        <pointLight position={[-8, -8, -8]} intensity={0.6} color="#ffff99" />
        <Suspense fallback={null}>
          <BedroomModel />
          <Environment preset="dawn" />
          <ParticleBackground />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          zoomSpeed={0.4}
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>

      <div className="loading-overlay">
        <div className="loading-content">
          <div className="loading-info">
            <motion.h1 
              className="loading-title"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            >
              ENTER MY UNIVERSE
            </motion.h1>
            
            <motion.p 
              className="loading-subtitle"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              PREPARING SOMETHING EXTRAORDINARY
            </motion.p>
            
            <div className="progress-container">
              <div className="loading-bar">
                <motion.div 
                  className="progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <motion.span 
                className="progress-text"
                ref={progressRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>
          </div>
        </div>

        {showContent && (
          <motion.div 
            className="enter-button"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <button onClick={() => {
              setIsLoaded(true);
              onLoaded();
            }}>
              ENTER NOW
              <span className="arrow">⟶</span>
            </button>
          </motion.div>
        )}

        <div className="corner-decor corner-top-left" />
        <div className="corner-decor corner-top-right" />
        <div className="corner-decor corner-bottom-left" />
        <div className="corner-decor corner-bottom-right" />
      </div>
    </motion.div>
  );
}

export default Loading;