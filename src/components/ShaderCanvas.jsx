import React, { useEffect } from 'react';
import * as THREE from 'three';

const ShaderCanvas = ({ fragmentShader, height }) => {
  useEffect(() => {
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.autoClearColor = false;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    const scene = new THREE.Scene();
    const plane = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3() },
    };
    const material = new THREE.ShaderMaterial({
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });
    scene.add(new THREE.Mesh(plane, material));

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.001;
      resizeRendererToDisplaySize(renderer);

      const canvas = renderer.domElement;
      uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
      uniforms.iTime.value = time;

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

  }, [fragmentShader]);

  return (
    <>
      <canvas 
        id="canvas"
        style={{
          width: '100%',
          height,
          display: 'block',
          position: 'fixed',
          bottom: 0,
          left: 0,
        }}>
      </canvas>
      <div
        class="gradient"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          height,
          width: '100%',
          background: 'linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0.99), rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.2), rgba(40, 40, 40, 0))',
        }}>  
      </div>
    </>
  );
}

export default ShaderCanvas;