import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { OrbitControls } from 'three-stdlib' 




function ThreeCanvas() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if(!container) return
        // 场景+相机
        const scene = new THREE.Scene()

        const light = new THREE.HemisphereLight(0xffffff, 0x444444);
        light.position.set(0, 20, 0);
        scene.add(light);

        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        )
        
        camera.position.set(0, 1.6, 3);



        // 渲染器
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(container.clientWidth, container.clientHeight)
        container.appendChild(renderer.domElement)

        // ✅ 添加 OrbitControls 控制器
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // 模型
        const geometry = new THREE.BoxGeometry()

        const colors = []
        const color1 = new THREE.Color("#f87171")
        const color2 = new THREE.Color("#60a5fa")
        for (let i = 0; i < 6; i++){
            const c = i % 2 === 0 ? color1 : color2
            for(let j = 0; j < 6; j++){
                colors.push(c.r, c.g, c.b)
            }
        }

        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

        const material = new THREE.MeshBasicMaterial({ vertexColors: true })
    
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        // 加载模型
        const loader = new GLTFLoader();

        const modelUrl = new URL('../assets/models/threeJStest.glb', import.meta.url).href

        loader.load(modelUrl, (gltf) => {
        scene.add(gltf.scene);
        animate();
        });

    
        // 动画
        const animate = () => {
          requestAnimationFrame(animate)
    
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01
    
          renderer.render(scene, camera)
        }
    
        animate()
    
        // 清理函数
        return () => {
          container.removeChild(renderer.domElement)
        }
    }, [])



    return (
        <div ref={containerRef} style={{ width: '2000px', height: '2000px' }} />
    )
}

export default ThreeCanvas