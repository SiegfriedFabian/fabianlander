// // myScene.js
// import * as THREE from './three.module.min.js'; // Ensure the path is correct

// export function createScene(containerId) {
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xffffff); // Set scene background to white

//     const container = document.getElementById(containerId);
//     // Use the container's dimensions for the camera aspect ratio and renderer size
//     const width = container.offsetWidth;
//     const height = container.offsetHeight;

//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     container.appendChild(renderer.domElement);

//     // Define geometry and material for the cube with different colored faces
//     const geometry = new THREE.BoxGeometry(2, 2, 2);
//     const materials = [
//         new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
//         new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
//         new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
//         new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
//         new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
//         new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan
//     ];
//     const cube = new THREE.Mesh(geometry, materials);
//     scene.add(cube);

//     camera.position.z = 5;

//     // Handle window resize
//     function onWindowResize() {
//         const width = container.offsetWidth;
//         const height = container.offsetHeight;
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//         renderer.setSize(width, height);
//     }
//     window.addEventListener('resize', onWindowResize, false);

//     // Animation loop to rotate the cube
//     function animate() {
//         requestAnimationFrame(animate);
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//         renderer.render(scene, camera);
//     }

//     animate();
// }



// AMAZING: https://www.shadertoy.com/view/wtj3Ry


import * as THREE from './three.module.min.js'; // Ensure the path is correct

export function createScene(containerId) {
    const scene = new THREE.Scene();
    const container = document.getElementById(containerId);
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);


    // Stats setup
    const stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, etc.
    container.appendChild(stats.domElement); // Append stats to the container
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.left = '0px';

    // Shader Material Setup
    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            resolution: { value: new THREE.Vector2(width, height) },
            speed: { value: 0.00 } // Default speed
        },
        vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            #define PI 3.14159265359
            uniform vec2 resolution;
            uniform float time;
            
            vec3 color(vec2 z) {
                float theta = PI / 8.0;
                float r = 2.0 / (1.0 - sqrt(1.0 - 4.0 * sin(theta) * sin(theta)));
                float p = -r * cos(theta);
                bool fl = false;
                vec3 colors[3];
                colors[0] = vec3(1.0, 0.0, 0.0);
                colors[1] = vec3(0.0, 1.0, 0.0);
                colors[2] = vec3(0.0, 0.0, 1.0);
                vec3 t;
                for(int i = 0; i < 100; i++) {
                    if(z.x < 0.0) {
                        z.x = -z.x;
                        colors[2] = 1.0 - colors[2];
                        fl = !fl;
                        continue;
                    }
                    if(dot(z, z) < 1.0) {
                        z /= dot(z, z);
                        fl = !fl;
                        t = colors[0];
                        colors[0] = colors[1];
                        colors[1] = t;
                        continue;
                    }
                    z.x -= p;
                    if(dot(z, z) > r * r) {
                        z *= r * r / dot(z, z);
                        fl = !fl;
                        z.x += p;
                        t = colors[1];
                        colors[1] = colors[2];
                        colors[2] = t;
                        continue;
                    }
                    z.x += p;
                    vec3 col = colors[0];
                    if(fl) col = 0.5 * col;
                    return col;
                }
                return vec3(1.0, 1.0, 1.0);
            }

            void main() {
                vec2 uv = 2.0 * (gl_FragCoord.xy - resolution.xy * 0.5) / resolution.y;
                float r2 = dot(uv, uv);
                if(r2 < 1.0) {
                    uv.y -= 1.0;
                    uv /= dot(uv, uv);
                    uv.y = -0.5 - uv.y;
                    uv.x += 0.1 * time;
                    gl_FragColor = vec4(color(uv), 1.0);
                } else {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                }
            }
        `
    });

    // Full-screen quad
    const planeGeometry = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(planeGeometry, shaderMaterial);
    scene.add(quad);

    // dat.GUI for speed control
    const gui = new dat.GUI({ autoPlace: false });
    container.appendChild(gui.domElement); // append GUI to the container
    gui.domElement.style.position = 'absolute'; // optional: to position the GUI absolutely within the container
    gui.domElement.style.top = '10px'; // Adjust the top margin or placement as needed
    gui.domElement.style.right = '10px'; // Adjust the right margin or placement as needed

    const params = {
        speed: 0.1
    };
    gui.add(params, 'speed', 0, 1).name('Animation Speed').onChange((value) => {
        shaderMaterial.uniforms.speed.value = value;
    });

    // Window resize handling
    window.addEventListener('resize', function onWindowResize() {
        const newWidth = container.offsetWidth;
        const newHeight = container.offsetHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        shaderMaterial.uniforms.resolution.value.set(newWidth, newHeight);
    }, false);

    // Animation loop
    function animate() {
        stats.begin();
        requestAnimationFrame(animate);
        shaderMaterial.uniforms.time.value += shaderMaterial.uniforms.speed.value;
        renderer.render(scene, camera);
        stats.end();
    }

    animate();
}