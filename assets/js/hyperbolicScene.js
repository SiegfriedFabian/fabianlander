// // AMAZING: https://www.shadertoy.com/view/wtj3Ry


// import * as THREE from './three.module.min.js'; // Ensure the path is correct

// export function createScene(containerId) {
//     const scene = new THREE.Scene();
//     const container = document.getElementById(containerId);
//     const width = container.offsetWidth;
//     const height = container.offsetHeight;

//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 1;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     container.appendChild(renderer.domElement);


//     const mouse = new THREE.Vector2(); // Vector to store mouse coordinates
//     const uniforms = {
//         time: { value: 0.0 },
//         resolution: { value: new THREE.Vector2(width, height) },
//         mouse: { value: new THREE.Vector2(0, 0) }, // Uniform for mouse coordinates
//         speed: { value: 0.00 } // Default speed
//     };

//     // Stats setup
//     const stats = new Stats();
//     stats.showPanel(0); // 0: fps, 1: ms, 2: mb, etc.
//     container.appendChild(stats.domElement); // Append stats to the container
//     stats.domElement.style.position = 'absolute';
//     stats.domElement.style.top = '0px';
//     stats.domElement.style.left = '0px';

//     // Shader Material Setup
//     const shaderMaterial = new THREE.ShaderMaterial({
//         uniforms: {
//             time: { value: 0.0 },
//             resolution: { value: new THREE.Vector2(width, height) },
//             speed: { value: 0.00 } // Default speed
//         },
//         vertexShader: `
//             void main() {
//                 gl_Position = vec4(position, 1.0);
//             }
//         `,
//         fragmentShader: `
//             #define PI 3.14159265359
//             uniform vec2 resolution;
//             uniform float time;\
//             uniform vec2 mouse;

            
//             vec3 color(vec2 z) {
//                 float theta = PI / 8.0;
//                 float r = 2.0 / (1.0 - sqrt(1.0 - 4.0 * sin(theta) * sin(theta)));
//                 float p = -r * cos(theta);
//                 bool fl = false;
//                 vec3 colors[3];
//                 colors[0] = vec3(1.0, 0.0, 0.0);
//                 colors[1] = vec3(0.0, 1.0, 0.0);
//                 colors[2] = vec3(0.0, 0.0, 1.0);
//                 vec3 t;
//                 for(int i = 0; i < 100; i++) {
//                     if(z.x < 0.0) {
//                         z.x = -z.x;
//                         colors[2] = 1.0 - colors[2];
//                         fl = !fl;
//                         continue;
//                     }
//                     if(dot(z, z) < 1.0) {
//                         z /= dot(z, z);
//                         fl = !fl;
//                         t = colors[0];
//                         colors[0] = colors[1];
//                         colors[1] = t;
//                         continue;
//                     }
//                     z.x -= p;
//                     if(dot(z, z) > r * r) {
//                         z *= r * r / dot(z, z);
//                         fl = !fl;
//                         z.x += p;
//                         t = colors[1];
//                         colors[1] = colors[2];
//                         colors[2] = t;
//                         continue;
//                     }
//                     z.x += p;
//                     vec3 col = colors[0];
//                     if(fl) col = 0.5 * col;
//                     return col;
//                 }
//                 return vec3(1.0, 1.0, 1.0);
//             }

//             void main() {
//                 vec2 uv = 2.0 * (gl_FragCoord.xy - resolution.xy * 0.5) / resolution.y;
//                 float r2 = dot(uv, uv);
//                 if(r2 < 1.0) {
//                     uv.y -= 1.0;
//                     uv /= dot(uv, uv);
//                     uv.y = -0.5 - uv.y;
//                     uv.x += 0.1 * time;
//                     gl_FragColor = vec4(color(uv), 1.0);
//                 } else {
//                     gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
//                 }
//             }
//         `
//     });

//     // Full-screen quad
//     const planeGeometry = new THREE.PlaneGeometry(2, 2);
//     const quad = new THREE.Mesh(planeGeometry, shaderMaterial);
//     scene.add(quad);

//     // dat.GUI for speed control
//     const gui = new dat.GUI({ autoPlace: false });
//     container.appendChild(gui.domElement); // append GUI to the container
//     gui.domElement.style.position = 'absolute'; // optional: to position the GUI absolutely within the container
//     gui.domElement.style.top = '10px'; // Adjust the top margin or placement as needed
//     gui.domElement.style.right = '10px'; // Adjust the right margin or placement as needed

//     const params = {
//         speed: 0.1
//     };
//     gui.add(params, 'speed', 0, 1).name('Animation Speed').onChange((value) => {
//         shaderMaterial.uniforms.speed.value = value;
//     });

//     // Window resize handling
//     window.addEventListener('resize', function onWindowResize() {
//         const newWidth = container.offsetWidth;
//         const newHeight = container.offsetHeight;
//         camera.aspect = newWidth / newHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(newWidth, newHeight);
//         shaderMaterial.uniforms.resolution.value.set(newWidth, newHeight);
//     }, false);

//     // Animation loop
//     function animate() {
//         stats.begin();
//         requestAnimationFrame(animate);
//         shaderMaterial.uniforms.time.value += shaderMaterial.uniforms.speed.value;
//         renderer.render(scene, camera);
//         stats.end();
//     }

//     animate();
// }


import * as THREE from './three.module.min.js'; // Ensure the path is correct

const isMacOS = () => {
    const ua = navigator.userAgent;
    const platform = navigator.platform;
    // Check if the device is Mac without being an iPad
    return /Mac|iMac|Macintosh/i.test(ua) && !/iPhone|iPad|iPod/i.test(platform);
};

export function createScene(containerId) {
    const scene = new THREE.Scene();
    const container = document.getElementById(containerId);
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio); // Adjust for high DPI displays
    container.appendChild(renderer.domElement);

    const uniforms = {
        time: { value: 0.0 },
        macRes: {value: true},
        resolution: { value: new THREE.Vector2(width, height) },
        mouse: { value: new THREE.Vector2(0, 0) }, // Uniform for mouse coordinates
        speed: { value: 0.1 }
    };

    // Double the 'resolution' uniform if on macOS
    if (isMacOS) {
        uniforms.macRes.value = true; // Element-wise multiplication to double resolution
    }

    // Function to update and log mouse position
    const updateMousePosition = (clientX, clientY, rect) => {
        uniforms.mouse.value.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        uniforms.mouse.value.y = -((clientY - rect.top) / rect.height) * 2 + 1;

        // Log normalized coordinates
        console.log('Normalized mouse position:', uniforms.mouse.value.x, uniforms.mouse.value.y);

        // Log pixel coordinates
        console.log('Pixel mouse position:', clientX - rect.left, clientY - rect.top);
    };

    container.addEventListener('click', (event) => {
        const rect = container.getBoundingClientRect();
        updateMousePosition(event.clientX, event.clientY, rect);

        
    });

    container.addEventListener('touchstart', (event) => {
        event.preventDefault();  // Prevent scrolling and other default touch behaviors
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        updateMousePosition(touch.clientX, touch.clientY, rect);
    });


    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
        precision mediump float; // Added precision for better mobile support
        #define PI 3.14159265359
        uniform vec2 resolution;
        uniform float time;
        uniform vec2 mouse;
        uniform bool macRes;
        
        vec3 color(vec2 uv) {
            return vec3(0.5, 0.2, 0.5); // Default color
        }
        
        void main() {
            vec2 uv = (gl_FragCoord.xy - resolution.xy * 0.5) / resolution.y;
            vec3 gridColor = vec3(1.0, 1.0, 1.0);
            if(macRes){
                uv *= 2.0;
                gridColor = vec3(0.0,0.0,0.0);
            }
            float gridSpacing = 0.1;
            float lineWidth = 0.003;
            bool onXLine = abs(mod(uv.x, gridSpacing) - gridSpacing * 0.5) < lineWidth;
            bool onYLine = abs(mod(uv.y, gridSpacing) - gridSpacing * 0.5) < lineWidth;
            vec3 col = onXLine || onYLine ? gridColor : color(uv);
            vec2 mousePos = vec2(mouse.x, mouse.y * (resolution.y / resolution.x));
            if (length(uv - mousePos) < 0.02) {
                col = vec3(1.0, 0.0, 0.0); // Red circle at mouse position
            }
            gl_FragColor = vec4(col, 1.0);
        }
        `
    });

 
    const planeGeometry = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(planeGeometry, shaderMaterial);
    scene.add(quad);

    window.addEventListener('resize', function onWindowResize() {
        const newWidth = container.offsetWidth;
        const newHeight = container.offsetHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        uniforms.resolution.value.set(newWidth, newHeight);
    }, false);

    function animate() {
        requestAnimationFrame(animate);
        uniforms.time.value += uniforms.speed.value;
        renderer.render(scene, camera);
    }

    animate();
}