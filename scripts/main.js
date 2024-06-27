// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    init3DScene();
});

function init3DScene() {
    const container = document.getElementById('3d-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    // 3D Volleyball Court
    const courtGeometry = new THREE.PlaneGeometry(10, 5);
    const courtMaterial = new THREE.MeshBasicMaterial({ color: 0xffc0cb, side: THREE.DoubleSide });
    const court = new THREE.Mesh(courtGeometry, courtMaterial);
    court.rotation.x = Math.PI / 2;
    scene.add(court);

    // Volleyball Net
    const netGeometry = new THREE.PlaneGeometry(10, 1);
    const netMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const net = new THREE.Mesh(netGeometry, netMaterial);
    net.position.y = 1;
    scene.add(net);

    // Haikyuu Logo
    const logoTexture = new THREE.TextureLoader().load('assets/images/haikyuu_logo.png');
    const logoGeometry = new THREE.PlaneGeometry(2, 2);
    const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true });
    const logo = new THREE.Mesh(logoGeometry, logoMaterial);
    logo.position.set(0, 2.5, -2);
    scene.add(logo);

    camera.position.z = 8;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}


