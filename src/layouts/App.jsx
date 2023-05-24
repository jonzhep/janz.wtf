import { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid';
import '~/styles/styles.css';

export default function App() {
  const canvas = useRef(null);
  useEffect(function () {
    let c = canvas.current;
    Fluid(c, {
      IMMEDIATE: true,
      TRIGGER: 'hover',
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 0.01,
      VELOCITY_DISSIPATION: 0.01,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 1,
      CURL: 0.2,
      SPLAT_RADIUS: 1,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 5,
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: false,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.9,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
    });
  }, []);

  return (
    <div className="App">
      <canvas ref={canvas} style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
}
