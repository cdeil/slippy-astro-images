var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.z = 3;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.85, window.innerHeight * 0.85);

//document.body.appendChild(renderer.domElement);
document.getElementById("threejs");
threejs.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(0.5, 32, 32);
//SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
var material = new THREE.MeshPhongMaterial();
//MeshPhongMaterial gives the special shading and reflection
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// You need to add directional light for MeshPhongMaterial to work. We will also use ambient.
var ambient_light = new THREE.AmbientLight(0x404040, 2.5);

var directional_light = new THREE.DirectionalLight(0xffffff, 0.5); //50% opacity for an even shade
directional_light.position.set(5, 3, 5);

scene.add(ambient_light, directional_light);

//Adding the image overlay:
material.map = THREE.ImageUtils.loadTexture('earthmap1k.jpg');
material.transparent = true;

//Adding details to the image overlay:
material.bumpMap = THREE.ImageUtils.loadTexture('earthbump1k.jpg');
material.bumpScale = 0.05;

material.specularMap = THREE.ImageUtils.loadTexture('earthspec1k.jpg');
material.specular = new THREE.Color('grey');

//Adding the halo:
var geometry = new THREE.SphereGeometry(0.525, 32, 32);
var material = new THREE.MeshPhongMaterial({
  color: 0x0077f4,
  side: THREE.BackSide,
  opacity: 0.3,
  transparent: true,
  depthWrite: false,
});
var halo = new THREE.Mesh(geometry, material);
scene.add(halo);

//Adding the clouds:
var geometry = new THREE.SphereGeometry(0.51, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('Earth-clouds.png'),
  transparent: true,
  side: THREE.DoubleSide,
  opacity: 0.8

});
var clouds = new THREE.Mesh(geometry, material);
scene.add(clouds);


//Adding the star background:
var geometry = new THREE.SphereGeometry(90, 32, 32);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.ImageUtils.loadTexture('galaxy_starfield.png'),
  side: THREE.BackSide
});
var backgroundMesh = new THREE.Mesh(geometry, material);
scene.add(backgroundMesh);

controls = new THREE.TrackballControls(camera);
controls.noPan = true;
                                                    //TODO make controls only rotate upon y-axis
controls.rotateSpeed = 5;


// controls.addEventListener('change', render); <-- Not needed as render is called below

//adding the stats indicator:
var stats = new Stats();
stats.domElement.style.position = 'absolute';
threejs.appendChild(stats.domElement);

function animate() {
    requestAnimationFrame(animate);

    stats.update();



    clouds.rotation.y += 0.001;
    clouds.rotation.x -= 0.0005;
}
animate();

function render() {

  requestAnimationFrame(render);


  var direction = camera.getWorldDirection();
  var newDirection = new THREE.Euler();
  camera.position.x = 0;
  camera.position.z = 2;
  newDirection._x = 0;
  newDirection._z = 0;
  camera.setRotationFromEuler(newDirection);
  controls.update();
  
  renderer.render(scene, camera);

}
render();
