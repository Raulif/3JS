var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 30

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

var light = new THREE.AmbientLight( 0xFFFFFF )
scene.add( light )

var earthGeometry = new THREE.SphereGeometry( 10, 32, 32 )
var earthMaterial = new THREE.MeshToonMaterial()
earthMaterial.map = new THREE.TextureLoader().load('/public/earthmap4k.jpg')
var earthMesh = new THREE.Mesh( earthGeometry, earthMaterial )
console.log(earthMesh);

scene.add( earthMesh )

var moonGeometry = new THREE.SphereGeometry( 3, 32, 32 )
var moonMaterial = new THREE.MeshToonMaterial()
moonMaterial.map = new THREE.TextureLoader().load('/public/moonmap4k.jpg')
var moonMesh = new THREE.Mesh( moonGeometry, moonMaterial )
moonMesh.position.set(40, 0, 0)

var pivot = new THREE.Object3D();

scene.add( moonMesh )
pivot.add(moonMesh)

scene.add(pivot)

var orbit = new THREE.OrbitControls(camera, renderer.domElement)
orbit.enableZoom = true

var imagePrefix = '/public/'
var urls = [ 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg' ]
var skyBox = new THREE.CubeTextureLoader().setPath(imagePrefix).load(urls)
scene.background = skyBox

var controls = new function() {
    this.textColor = 0xffae23
    this.earthGuiRotationX = 0.000
    this.earthGuiRotationY = 0.000
    this.moonGuiRotationX = 0.000
    this.moonGuiRotationY = 0.000
    this.moonPivotY = 0.002
    this.moonPivotX = 0.002

}

var gui = new dat.GUI()
gui.add(controls, 'earthGuiRotationX', 0, .5)
gui.add(controls, 'earthGuiRotationY', 0, .5)
gui.add(controls, 'moonGuiRotationX', 0, .5)
gui.add(controls, 'moonGuiRotationY', 0, .5)
gui.add(controls, 'moonPivotY', 0, .5)
gui.add(controls, 'moonPivotX', 0, .5)


gui.addColor(controls, 'textColor').onChange(function (e) {
    textMesh.material.color = new THREE.Color(e)
})

var render = function() {
    requestAnimationFrame(render)
    earthMesh.rotation.x += controls.earthGuiRotationX
    earthMesh.rotation.y += controls.earthGuiRotationY
    moonMesh.rotation.x += controls.moonGuiRotationX
    moonMesh.rotation.y += controls.moonGuiRotationY
    pivot.rotation.y += controls.moonPivotY
    pivot.rotation.x += controls.moonPivotX
    renderer.render(scene, camera)
}
render()
