// src/components/ThreeScene.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { Spotify } from "react-spotify-embed";


import Model from "./Model";
import { mx_fractal_noise_vec3 } from 'three/src/nodes/materialx/lib/mx_noise.js';

function Controls({ changePose, changeAngle}) {

  return (
    <>
    <div className='controlContainer'>
      <div className='spotifyControl'>
      <iframe className='musicFrame'
        src="https://open.spotify.com/embed/playlist/4cNEdK9UrGzz52C88jVVfb?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
     />
      </div>
      <div className='posePlayerControl'>
        <div className='posePlayerTitleControl'>
          Pose Player
        </div>
        <div className='poseControl'>
          <div className='directionControl'>
            <button className = 'myButton' onClick={() => changeAngle("0")}>Front</button>
            <button className = 'myButton' onClick={() => changeAngle("180")}>Back</button>
          </div>
          <div className='animationControl'>
            <button className = 'myButton' onClick={() => changePose("Idle")}>Idle</button>
            <button className = 'myButton' onClick={() => changePose("Journal")}>Journal</button>
            <button className = 'myButton' onClick={() => changePose("Music")}>Music</button>
            <button className = 'myButton' onClick={() => changePose("Sushi")}>Sushi</button>            
          </div>
        </div>
      </div>
    </div>


    </>
  );
}

export default Controls;
