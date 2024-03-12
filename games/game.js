// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube as the character
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Set up controls for moving the character
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Function to handle window resizing
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

// Function to handle keyboard input for moving the character
function onKeyDown(event) {
    switch (event.keyCode) {
        case 37: // Left arrow
            cube.position.x -= 0.1;
            break;
        case 38: // Up arrow
            cube.position.z -= 0.1;
            break;
        case 39: // Right arrow
            cube.position.x += 0.1;
            break;
        case 40: // Down arrow
            cube.position.z += 0.1;
            break;
    }
}
window.addEventListener('keydown', onKeyDown);

// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
