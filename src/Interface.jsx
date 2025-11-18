// src/components/ThreeScene.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';

import Model from "./Model";
import PoseButton from "./PoseButton";
import { mx_fractal_noise_vec3 } from 'three/src/nodes/materialx/lib/mx_noise.js';

function Interface({ changePose, changeAngle}) {

  return (
    <>
    <div>
      <button onClick={() => changePose("Idle")}>Idle</button>
      <button onClick={() => changePose("Journal")}>Journal</button>
      <button onClick={() => changePose("Music")}>Music</button>
      <button onClick={() => changePose("Sushi")}>Sushi</button>
        <br></br>
      <button onClick={() => changeAngle("0")}>Front</button>
      <button onClick={() => changeAngle("180")}>Back</button>
    </div>

    </>
  );
}

export default Interface;
