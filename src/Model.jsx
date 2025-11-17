// src/components/ThreeScene.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Model() {
  const mountRef = useRef(null);

  //Dark Blue: #082e68
  //Mid Blue: #0d6cb1
  //Light Blue: #98c8e8

  useEffect(() => {
    let mixer;
    const mount = mountRef.current;
    if (!mount) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      2,
      mount.clientWidth || window.innerWidth / (mount.clientHeight || window.innerHeight),
      0.1,
      1000
    );
    camera.position.set(0,5.5, 300);
    camera.rotation.set(
    THREE.MathUtils.degToRad(0),   
    THREE.MathUtils.degToRad(0),   
    THREE.MathUtils.degToRad(0)  
    );
    camera.near = 200;
camera.far = 1000;
camera.updateProjectionMatrix();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      mount.clientWidth || window.innerWidth,
      mount.clientHeight || window.innerHeight
    );
    mount.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 2);
    scene.add(light);

    // Controls
    //const controls = new OrbitControls(camera, renderer.domElement);
    //controls.enableDamping = true;

    // Resize handler
    const handleResize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      '/Model/Viola_Model.glb', 
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        /*
        Animation names:
        Idle
            IdleAction
            IdleEntry
            IdleExit
        Sushi
            SushiAction
            SushiEntry
            SushiExit
        Music
            MusicAction
            MusicEntry
            MusicExit
        Journal
            JournalAction
            JournalEntry
            Journal Exit
        */

        mixer = new THREE.AnimationMixer(model);
        const clip = THREE.AnimationClip.findByName(gltf.animations, 'MusicAction');
        if (clip) {
            const action = mixer.clipAction(clip);
            action.play();
        }

        animate(); 
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
    requestAnimationFrame(animate);

    const delta = clock.getDelta(); // seconds since last frame
    if (mixer) mixer.update(delta);

    //controls.update();
    renderer.render(scene, camera);
    };

    function playAnimation(name) {
    const clip = THREE.AnimationClip.findByName(gltf.animations, name);
    if (!clip) return;

    mixer.stopAllAction(); // remove later
    const action = mixer.clipAction(clip);
    action.reset();
    action.play();
    }


    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
}
