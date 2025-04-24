import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { OrbitControls } from 'three-stdlib';

function ColorBox({ defaultDensity = 16 }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [density, setDensity] = useState(defaultDensity);
  const [colorMode, setColorMode] = useState<'RGB' | 'HSL'>('HSL'); // 默认HSL

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(density * 1.5, density * 1.5, density * 1.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const group = new THREE.Group();

    for (let x = 0; x < density; x++) {
      for (let y = 0; y < density; y++) {
        for (let z = 0; z < density; z++) {
          let color;

          if (colorMode === 'RGB') {
            color = new THREE.Color(
              x / (density - 1),
              y / (density - 1),
              z / (density - 1)
            );
          } else if (colorMode === 'HSL') {
            const h = (x / (density - 1)) * (60 / 360); // 即 h ∈ [0, 0.1667]
            const s = 0.67 + (y / (density - 1)) * 0.33; // 映射到 0.67 ~ 1.0
            const l = 0.33 + (z / (density - 1)) * 0.34; // 映射到 0.33 ~ 0.67

            color = new THREE.Color();
            color.setHSL(h, s, l);
          }

          const material = new THREE.MeshStandardMaterial({ color });
          const cube = new THREE.Mesh(
            new THREE.BoxGeometry(0.8, 0.8, 0.8),
            material
          );
          cube.position.set(2*(x - density / 2), 2*(y - density / 2), 2*(z - density / 2));
          group.add(cube);
        }
      }
    }

    scene.add(group);

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, [density, colorMode]);

  return (
    <div>
      <div style={{ position: 'absolute', zIndex: 1, padding: '10px' }}>
        <button onClick={() => setColorMode(colorMode === 'RGB' ? 'HSL' : 'RGB')}>
          切换颜色模式 ({colorMode})
        </button>
        <button onClick={() => setDensity(density === 8 ? 16 : 8)}>
          切换密度 ({density})
        </button>
      </div>
      <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
}

export default ColorBox;
