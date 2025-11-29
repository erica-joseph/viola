// src/components/ThreeScene.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { SkeletonHelper } from 'three';

import model from './assets/Model/Viola_Model.glb'

export default function Model({currentPose, currentAngle, onLoaded}) {
  const mountRef = useRef(null);

  //Dark Blue: #082e68
  //Mid Blue: #0d6cb1
  //Light Blue: #98c8e8
  //Key Light: #fcba8eff
  const modelRef = useRef();
  const mixerRef = useRef();
  let lastPose = "";
  const actionsRef = useRef({});
  const [actionsLoaded, setActionsLoaded] = React.useState(false);
  useEffect(() => {
    let mixer;
    
    if (!mountRef.current) return;
    if (mountRef.current.children.length > 0) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    
const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 5; // arbitrary “zoom level”

const camera = new THREE.OrthographicCamera(
  -frustumSize * aspect,  // left
  frustumSize * aspect,   // right
  frustumSize,            // top
  -frustumSize,           // bottom
  0.1,                    // near
  1000                    // far
);

const helper = new THREE.CameraHelper(camera);

    camera.position.set(0,7, 100);
    camera.rotation.set(
    THREE.MathUtils.degToRad(0),   
    THREE.MathUtils.degToRad(0),   
    THREE.MathUtils.degToRad(0)  
    );
    camera.near = .1;
    camera.far = 200;
    camera.updateProjectionMatrix();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      mountRef.current.clientWidth || window.innerWidth,
      mountRef.current.clientHeight || window.innerHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 2);
    scene.add(light);
    
    //Ambient light
    const ambient = new THREE.AmbientLight(0xfcba8eff, 1);
    scene.add(ambient);

    // White directional light at half intensity shining from the top.
    const keyLight = new THREE.DirectionalLight( 0xffe1cdff, 3 );
    keyLight.position.set(0, 0, 100);
    scene.add( keyLight );

    // White directional light at half intensity shining from the top.
    const backLight = new THREE.DirectionalLight( 0x002396, 10 );
    backLight.position.set(-3, 0, -2);
    scene.add( backLight );

    // White directional light at half intensity shining from the top.
    const rimLight = new THREE.DirectionalLight( 0x002396, 30 );
    rimLight.position.set(0, 0, -2);
    scene.add( rimLight );    

    //Light Helpers
    /*
    const keyHelper = new THREE.DirectionalLightHelper(keyLight, 5, 0xff0000); // size, color
    scene.add(keyHelper);

    const backHelper = new THREE.DirectionalLightHelper(backLight, 5, 0xfffff); // size, color
    scene.add(backHelper);

    const rimHelper = new THREE.DirectionalLightHelper(rimLight, 5, 0xFF5D22); // size, color
    scene.add(rimHelper);

    const lightHelper = new THREE.DirectionalLightHelper(light, 5, 0x1AFF00); // size, color
    scene.add(lightHelper);
    */

    // Controls
    //const controls = new OrbitControls(camera, renderer.domElement);
    //controls.enableDamping = true;



    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      model, 
      (gltf) => {
        modelRef.current = gltf.scene;

        // Only add once
        scene.add(modelRef.current);
        //modelRef.current.rotation.y = Math.PI; 
        
        gltf.scene.traverse((node) => {
          ///console.log(node.type, node.name);

          if (node.isBone) {
            node.position.set(0, 0, 0);
            node.rotation.set(0, 0, 0);
            node.scale.set(1, 1, 1);
          }
        /*
        if (node.name === "Armature001") {
            const skeletonHelper = new SkeletonHelper(node);
            skeletonHelper.material.linewidth = 2;
            scene.add(skeletonHelper);
        }
        */

        if(node.isSkinnedMesh){
          if(node.name === "Cube005"){
            //console.log("Heyo")
            node.visible = false;
          }
        }
        
        });

        mixerRef.current = new THREE.AnimationMixer(modelRef.current);

      gltf.animations.forEach((clip) => {
      actionsRef.current[clip.name] = mixerRef.current.clipAction(clip);
      onLoaded();
      console.log("Model is Ready");
    });

//     console.log(gltf.animations.map(a => ({
//   name: a.name,
//   tracks: a.tracks.map(t => t.name)
// })));

    setActionsLoaded(true); 

  if (currentPose  + "Action" && actionsRef.current[currentPose  + "Action"]) {
    actionsRef.current[currentPose  + "Action"].play();
  }
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );

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

// Animation loop

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixerRef.current) mixerRef.current.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
return () => {
  if (mountRef.current && renderer.domElement) {
    mountRef.current.removeChild(renderer.domElement);
  }
  renderer.dispose();
};

  }, []);

 // Update pose
 useEffect(() => {
   //console.log("Available animations:", Object.keys(actionsRef.current));
   if (!actionsLoaded) return; 
   const actions = actionsRef.current;
   if (!actions) return;

 Object.entries(actionsRef.current).forEach(([name, action]) => {
   if (name !== currentPose + "Action") action.stop();
 });

 actionsRef.current[currentPose + "Action"]?.reset().play();

 }, [currentPose, actionsLoaded]);



useEffect(() => {
  //console.log("Angel changed.")

  //console.log(currentAngle);
  if (modelRef.current) {
  if(currentAngle == "0"){
    modelRef.current.rotation.y = 0; 
    //console.log("Angel changed to 0.")
  }
  else if(currentAngle == "90"){
    modelRef.current.rotation.y = Math.PI/2; 
  }
  else if(currentAngle == "180"){
    modelRef.current.rotation.y = Math.PI; 
  }
  else if(currentAngle == "270"){
    modelRef.current.rotation.y = 3 * Math.PI /2; 
  }
}

function playAndWait(action) {
  return new Promise((resolve) => {
    if (!action) return resolve();

    action.reset();
    action.clampWhenFinished = true;
    action.loop = THREE.LoopOnce;

    const mixer = action.getMixer();

    const finishedHandler = (e) => {
      if (e.action === action) {
        mixer.removeEventListener("finished", finishedHandler);
        resolve();
      }
    };

    mixer.addEventListener("finished", finishedHandler);
    action.play();
  });
}
}, [currentAngle]);



  return( 
  <>
  <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
  </>
  );
}
