// src/components/ThreeScene.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';

function PoseButton({ changePose }) {
  return (
    <div>
      <button onClick={() => changePose("IdleAction")}>Idle</button>
      <button onClick={() => changePose("JournalAction")}>Wave</button>
    </div>
  );
}

export default PoseButton;