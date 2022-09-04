import * as THREE from 'three'

// Scene Properties
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('sketch-holder')});
renderer.setSize(window.innerWidth, window.innerHeight);


// Geometries

function torusKnotMaker(radius, tube, radialSegments, tubularSegments, p, q, color, wireframeBool, transparentBool, opacity, flatShading, side)
{
	var geometry = new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q);
	var material = new THREE.MeshNormalMaterial(
	{
		color: color,
		wireframe: wireframeBool,
		transparent: transparentBool,
		opacity: opacity,
		flatShading: flatShading,
		side : side,
		// blending: THREE.MultiplyBlending,
	});
	var torus = new THREE.Mesh(geometry, material);
	return torus
}

var torusA = torusKnotMaker(6, 1, 210, 10, 19, 3, "#0095dd", false, true, .1, false, THREE.DoubleSide)
scene.add(torusA);

var torusB = torusKnotMaker(6, 1, 210, 10, 19, 3, "#0095dd", false, true, .7, true, THREE.DoubleSide)
// scene.add(torusB);

camera.position.z = 10;


// Lighting

const pointLightA = new THREE.PointLight("#ffffff");
pointLightA.position.set(50, 10, 10);

const pointLightB = new THREE.PointLight("#ffffff");
pointLightB.position.set(-500, -100, -100);

const hemisphereLightA = new THREE.HemisphereLight("#ffffff", "#ffffff", 1);

scene.add(pointLightA, pointLightB, hemisphereLightA);


// Background

const background = new THREE.TextureLoader().load('./assets/background.png');
scene.background = background;


// Animation and Rendering

function animate()
{
	requestAnimationFrame(animate);
	objectAnimate(torusA, 0.01);
	// objectAnimate(torusB, -0.01);
	renderer.render( scene, camera );
}
animate();

function objectAnimate(obj, amount)
{
	obj.rotation.x += amount;
	obj.rotation.y -= amount;
	obj.rotation.z += amount;
}

function moveCamera()
{
	const t = document.body.getBoundingClientRect().top;

	objectAnimate(torusA, t * 0.00001);
	// objectAnimate(torusB, t * -0.0001);

	// camera.position.z = t * -0.001; // turned off custom camera position
	// camera.position.x = t * -0.001;
	// camera.rotation.y = t * -0.001;
}

document.body.onscroll = moveCamera;
moveCamera();
  