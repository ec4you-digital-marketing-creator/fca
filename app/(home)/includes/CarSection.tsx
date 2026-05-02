'use client';

import { useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Environment, useGLTF, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// ─── Types ──────────────────────────────────────────────────────────────────

interface Hotspot {
  id: string;
  label: string;
  position: [number, number, number];
  category: string;
  specs: string[];
}

// ─── Hotspot Data ────────────────────────────────────────────────────────────

const HOTSPOTS: Hotspot[] = [
  {
    id: 'hood',
    label: 'Rugged Hood',
    position: [0, 1.25, 1.4],
    category: 'Hood',
    specs: ['Force-Induction Cooling', 'Aero-Venting System', 'Quick-Release Latches'],
  },
  {
    id: 'grill',
    label: 'Jeep Grille',
    position: [0, 0.7, 2.3],
    category: 'Grille',
    specs: ['Airflow Optimization', 'Reinforced Mesh', 'Brand Signature Design'],
  },
  {
    id: 'bumper',
    label: 'Off-road Bumper',
    position: [0, 0.25, 2.5],
    category: 'Bumper',
    specs: ['High-Strength Steel', 'Winch-Ready Mounts', 'Integrated Tow Hooks'],
  },
  {
    id: 'headlight',
    label: 'LED Headlight',
    position: [0.9, 0.7, 2.1],
    category: 'Headlight',
    specs: ['Laser Projection', 'Adaptive Beam', 'Weather-Sealed Lens'],
  },
  {
    id: 'wheel',
    label: 'All-Terrain Wheel',
    position: [1.15, -0.15, 1.4],
    category: 'Wheel',
    specs: ['Deep-Tread Compound', 'Impact Resistance', 'Self-Cleaning Design'],
  },
  {
    id: 'door',
    label: 'Cab Door',
    position: [1.1, 0.6, 0.0],
    category: 'Door',
    specs: ['Lightweight Alloy', 'Triple Seal isolation', 'Modular Accessories'],
  },
  {
    id: 'bed',
    label: 'Truck Bed',
    position: [0, 1.05, -1.8],
    category: 'Truck Bed',
    specs: ['Heavy-Duty Lining', 'Adjustable Tie-Downs', 'Weatherproof Bed Cover'],
  },
];

// ─── 3D Components ────────────────────────────────────────────────────────────

function CarModel({ url, onError }: { url: string; onError?: () => void }) {
  try {
    const { scene } = useGLTF(url);
    const memoizedScene = useMemo(() => {
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          if (mesh.material) {
            (mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 1.8;
          }
        }
      });
      return scene;
    }, [scene]);

    return <primitive object={memoizedScene} scale={1.2} position={[0, -0.4, 0]} />;
  } catch (err) {
    if (onError) onError();
    return null;
  }
}

function PlaceholderCar() {
  const group = useRef<THREE.Group>(null);

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* Heavy Chassis */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.0, 0.2, 5.0]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Main Body */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <boxGeometry args={[2.1, 0.7, 4.8]} />
        <meshStandardMaterial color="#002D72" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Cab */}
      <mesh position={[0, 1.05, 0.2]} castShadow>
        <boxGeometry args={[1.8, 0.6, 2.2]} />
        <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.05} />
      </mesh>

      {/* Vertical Grille */}
      <mesh position={[0, 0.7, 2.4]} castShadow>
        <boxGeometry args={[1.6, 0.35, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {/* Off-road Wheels */}
      {[
        [1.2, -0.3, 1.6],
        [-1.2, -0.3, 1.6],
        [1.2, -0.3, -1.6],
        [-1.2, -0.3, -1.6],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.65, 0.65, 0.55, 32]} />
            <meshStandardMaterial color="#050505" />
          </mesh>
          <mesh position={[0, 0.28, 0]}>
            <cylinderGeometry args={[0.45, 0.45, 0.05, 16]} />
            <meshStandardMaterial color="#FFCC00" metalness={1} roughness={0.1} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function HotspotPin({ hotspot, onNavigate }: { hotspot: Hotspot; onNavigate: (hotspot: Hotspot) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Html position={hotspot.position} center distanceFactor={6} zIndexRange={[100, 0]} style={{ pointerEvents: 'auto' }}>
      <div className="relative flex items-center select-none">
        {hovered && (
          <div className="absolute right-full mr-2 flex items-center gap-1" style={{ whiteSpace: 'nowrap' }}>
            <div className="px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
              {hotspot.label}
            </div>
            <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.5)' }} />
          </div>
        )}
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => onNavigate(hotspot)}
          className="w-7 h-7 rounded-full border-[1.5px] border-white/50 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:scale-110 hover:bg-white/25 hover:border-white"
        >
          +
        </button>
      </div>
    </Html>
  );
}

function Scene({ onNavigate, modelUrl }: { onNavigate: (hotspot: Hotspot) => void; modelUrl?: string }) {
  const carGroup = useRef<THREE.Group>(null);
  useFrame(() => {
    if (carGroup.current) carGroup.current.rotation.y += 0.003;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.6} castShadow />
      <directionalLight position={[-5, 4, -3]} intensity={0.8} color="#6ca8ff" />
      <pointLight position={[0, 6, 0]} intensity={0.6} color="#ffffff" />
      <Environment preset="studio" />
      
      <group ref={carGroup}>
        {modelUrl ? (
          <Suspense fallback={null}>
            <CarModel url={modelUrl} />
          </Suspense>
        ) : (
          <PlaceholderCar />
        )}
        {HOTSPOTS.map((hs) => (
          <HotspotPin key={hs.id} hotspot={hs} onNavigate={onNavigate} />
        ))}
      </group>

      <ContactShadows position={[0, -0.75, 0]} opacity={0.55} scale={8} blur={2.5} far={4} color="#000000" />
    </>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

interface CarSectionProps {
  modelUrl?: string;
}

export default function CarSection({ modelUrl }: CarSectionProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <section className="relative w-full overflow-hidden min-h-screen bg-[#000c1a]">
      {/* Header Overlay */}
      <div className="absolute top-12 left-0 right-0 z-10 text-center pointer-events-none px-4">
        <p className="text-xs uppercase tracking-[0.4em] mb-3 font-semibold text-white/40">
          Interactive 3D Engineering
        </p>
        <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter mb-4">
          Precision Showcase
        </h2>
        <p className="max-w-md mx-auto text-sm text-white/40 leading-relaxed font-light">
          Click the <span className="text-brand-yellow font-bold">+</span> markers to inspect regional engineering specifications.
        </p>
      </div>

      {/* 3D Canvas Container */}
      <div className="w-full relative h-screen">
        <Canvas shadows={{ type: THREE.PCFShadowMap }} camera={{ position: [4, 2, 6], fov: 40 }} gl={{ antialias: true, alpha: false }}>
          <Scene onNavigate={(hs) => setActiveHotspot(hs)} modelUrl={modelUrl} />
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2.1} makeDefault />
        </Canvas>

        {/* Floating Technical Card */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-80 hidden lg:block pointer-events-none">
          <div className={`p-10 rounded-[2.5rem] backdrop-blur-3xl border border-white/10 transition-all duration-700 ease-out transform ${activeHotspot ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-90'}`} style={{ background: 'rgba(255,255,255,0.02)' }}>
            {activeHotspot && (
              <>
                <div className="w-12 h-1 bg-brand-yellow/30 rounded-full mb-8" />
                <span className="text-[10px] font-black uppercase text-brand-yellow tracking-[0.4em] mb-4 block">SENSOR.DATA_ACTIVE</span>
                <h3 className="text-4xl font-light text-white mb-8 tracking-tighter uppercase leading-none">{activeHotspot.label}</h3>
                <div className="space-y-6">
                  {activeHotspot.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0 shadow-[0_0_10px_#FFCC00]" />
                      <span className="text-[13px] text-white/50 font-light leading-tight tracking-wide uppercase">{spec}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Vector Blueprint Section */}
      <div className="relative z-10 py-40 border-t border-white/5 bg-gradient-to-b from-[#091018] to-[#000c1a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-12">
              <div>
                <span className="text-brand-yellow font-black uppercase text-xs tracking-[0.4em] mb-6 block">Architecture & Design</span>
                <h2 className="text-5xl lg:text-7xl font-light text-white tracking-tighter leading-none">The Science of <br /><span className="text-brand-yellow italic font-medium">Performance.</span></h2>
              </div>
              <p className="text-lg text-white/40 font-light leading-relaxed max-w-lg">Engineered for the absolute pursuit of mechanical excellence. Every weld is optimized for catastrophic-environment survival.</p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div>
                  <div className="text-5xl font-black text-white/90 tracking-tighter">98<span className="text-brand-yellow text-xl ml-1">%</span></div>
                  <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Efficiency Rating</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white/90 tracking-tighter">0.12<span className="text-brand-yellow text-xl ml-1">ms</span></div>
                  <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Compute Latency</div>
                </div>
              </div>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white text-sm uppercase tracking-widest hover:bg-brand-yellow hover:text-navy transition-all duration-500">Download Technical Specs</button>
            </div>
            <div className="lg:w-1/2 relative group px-12">
              <div className="absolute inset-0 bg-brand-yellow/5 blur-[150px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              <img src="/assets/images/jeep-blueprint.png" alt="Blueprint" className="relative z-10 w-full drop-shadow-[0_30px_100px_rgba(0,0,0,0.8)] filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform -scale-x-100 hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}