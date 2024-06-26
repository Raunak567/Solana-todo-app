import * as THREE from 'three';

// Creating the scene
const scene = new THREE.Scene();

// Creating the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0.23;
camera.position.x = 0.0046;
camera.position.y = 0.0046;

// Creating the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

// Set the background colour of the scene
renderer.setClearColor('#1d1135');
// Creating a geometry (a cube in this case)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Adding a torus below the cube
const geometryTorus = new THREE.TorusGeometry(10, 3, 16, 100);
const materialTorus = new THREE.MeshBasicMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometryTorus, materialTorus);
scene.add(torus);

const stars = new THREE.Group();
// Adding stars to the scene
const addStar = () => {
    const geometry = new THREE.SphereGeometry(0.25);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    // Randomly position the star
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z);
    scene.add(star);
    stars.add(star);
}

// Adding 1000 stars to the scene
Array(1000).fill().forEach(addStar);
scene.add(stars);

// Creating a point light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Creating an ambient light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
// Scroll Event
document.body.onscroll = scrollHandler;

// Move the camera based on the scroll position
function scrollHandler() {
    // Move the camera based on the scroll position
    const t = document.body.getBoundingClientRect().top;
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.075;
    cube.rotation.z += 0.05;

    // Move the camera based on the scroll position
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.position.y = t * -0.0002;
}

// Animation function
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Rotate the torus
    torus.rotation.x += 0.005;
    torus.rotation.y += 0.0075;


    // Render the scene with the camera
    renderer.render(scene, camera);
}

// Start the animation
animate();
