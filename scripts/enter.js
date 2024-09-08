let scene, camera, renderer, sphere;

function init() {
    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Sphere creation
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const texture = new THREE.TextureLoader().load('path/to/your/circle-image.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();

    // Set timeout for redirection
    setTimeout(redirectToOpening, 3000);
}

function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001; // Convert to seconds

    // Animate size and opacity
    const scale = 1 + Math.sin(time * 2) * 0.1; // Scale between 0.9 and 1.1
    sphere.scale.set(scale, scale, scale);

    const opacity = 0.7 + Math.sin(time * 2) * 0.3; // Opacity between 0.4 and 1
    sphere.material.opacity = opacity;
    sphere.material.transparent = true;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function redirectToOpening() {
    window.location.href = 'opening.html';
}

// Initialize the scene when the page loads
window.addEventListener('load', init);
