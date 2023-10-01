import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import{CSS2DObject, CSS2DRenderer} from 'three/examples/jsm/renderers/CSS2DRenderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  

ngOnInit(): void {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
  camera.position.set(-900, 0, -900)
  // let controls=new THREE.OrbitControls(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  let controls = new OrbitControls(camera, renderer.domElement)
  // controls.enableDamping=true
  // controls.minDistance = 500
  // controls.maxDistance = 1500
  // document.body.appendChild(renderer.domElement);
  let display = (<HTMLInputElement>document.getElementById("displayText"))
  display.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(10000, 10000, 10000);
  const geometry1 = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  let materialArray = []
  let textureft = new THREE.TextureLoader().load("../assets/gallery/barren_ft.jpg")
  let texturebk = new THREE.TextureLoader().load("../assets/gallery/barren_bk.jpg")
  let textureup = new THREE.TextureLoader().load("../assets/gallery/barren_up.jpg")
  let texturedn = new THREE.TextureLoader().load("../assets/gallery/barren_dn.jpg")
  let texturert = new THREE.TextureLoader().load("../assets/gallery/barren_rt.jpg")
  let texturelt = new THREE.TextureLoader().load("../assets/gallery/barren_lf.jpg")

  materialArray.push(new THREE.MeshBasicMaterial({ map: textureft }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texturebk }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: textureup }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texturedn }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texturert }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texturelt }))

  for (let i = 0; i < 6; i++) { materialArray[i].side = THREE.BackSide }


  let skyboxgeo = new THREE.BoxGeometry(10000, 10000, 10000)
  let skybox = new THREE.Mesh(skyboxgeo, material)
  

  // const cube = new THREE.Mesh( geometry, material );
  const cube = new THREE.Mesh(geometry, materialArray);
  scene.add(cube);
 
  
  let texture1= new THREE.TextureLoader().load("../assets/gallery/barren_ft.jpg")
 
  let material4;
  let materialArray4 = []
  materialArray4.push(new THREE.MeshBasicMaterial({ map: texturebk }))
  materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400}))//map: texturebk }))
  materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  console.log("matarr4, ",materialArray4)
  let texture8= new THREE.TextureLoader().load("../assets/gallery/foto3.JPG")
  let materialArray8 = []
  materialArray8.push(new THREE.MeshBasicMaterial({ map: texture8 }))
  materialArray8.push(new THREE.MeshBasicMaterial({ color: 0x563400}))//map: texturebk }))
  materialArray8.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray8.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray8.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray8.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))

  let texture9= new THREE.TextureLoader().load("../assets/gallery/foto4.JPG")
  let materialArray9 = []
  materialArray9.push(new THREE.MeshBasicMaterial({ map: texture9 }))
  materialArray9.push(new THREE.MeshBasicMaterial({ color: 0x563400}))//map: texturebk }))
  materialArray9.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray9.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray9.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
  materialArray9.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))





  let materialArray5=[]
  const numCubes = 8; // Liczba sześcianów
  const cubes = [];
  let textureFoto= new THREE.TextureLoader().load("../assets/gallery/foto1.JPG")
  let textureFoto2= new THREE.TextureLoader().load("../assets/gallery/foto2.JPG")
  for (let i = 0; i < numCubes; i++) {
      // const geometry = new THREE.BoxGeometry(1, 1, 1);
      let geometry5 = new THREE.BoxGeometry(10, 240, 350)
      let material5
      if (i==2)  //(i%2==0)
      {
       
        materialArray5[0]=new THREE.MeshBasicMaterial({ map: textureFoto2 })
        material5 = materialArray5}
      
      else{
        materialArray4[0]=new THREE.MeshBasicMaterial({ map: textureFoto })
        material5 = materialArray4
      
      }
      if (i==5)  
      {material5 = materialArray8}
      if (i==6)  
      {material5 = materialArray9}
      // material5 = materialArray4
      const cube4 = new THREE.Mesh(geometry5, material5);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // const cube = new THREE.Mesh(geometry, material);
      
      // Ustawienie pozycji sześcianu na okręgu
      const angle = (i / numCubes) * Math.PI * 2;
      const radius = 500; // Promień okręgu
      cube4.position.x = Math.cos(angle) * radius;
      cube4.position.z = Math.sin(angle) * radius;
  
      // Obrót sześcianu, aby ta sama ściana była na zewnątrz
      cube4.rotation.y = -angle;
  
      scene.add(cube4);
      // cubes.push(cube);
  }



  function animate() {
    requestAnimationFrame(animate);
    controls.update()
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
   
    renderer.render(scene, camera);
  }

  animate();
  

}


}
