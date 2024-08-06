document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Por favor, selecciona un archivo STL.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const stlData = event.target.result;
        loadSTL(stlData);
    };

    reader.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentLoaded = Math.round((event.loaded / event.total) * 100);
            document.getElementById('progress-container').style.display = 'block';
            document.getElementById('progress-bar').style.width = percentLoaded + '%';
            document.getElementById('progress-bar').textContent = percentLoaded + '%';
        }
    };

    reader.readAsArrayBuffer(file);
});

function loadSTL(stlData) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('preview-container').innerHTML = '';
    document.getElementById('preview-container').appendChild(renderer.domElement);

    // Agregar una luz a la escena
    const ambientLight = new THREE.AmbientLight(0x404040); // Luz suave
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Luz direccional
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const loader = new THREE.STLLoader();
    loader.load(URL.createObjectURL(new Blob([stlData])), function(geometry) {
        const material = new THREE.MeshStandardMaterial({ color: 0x0077ff }); // Material estándar
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Ajustar la escala del objeto
        mesh.scale.set(0.1, 0.1, 0.1); // Escalar según sea necesario

        // Ajustar la posición de la cámara
        camera.position.z = 10;
        
        function animate() {
            requestAnimationFrame(animate);
            // Opcional: Mover la cámara o el objeto si se desea
            // mesh.rotation.y += 0.01; // Girar ligeramente para mejor visualización
            renderer.render(scene, camera);
        }
        animate();
    });
}
