import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  code = [];
  currencyTab: any;
  // curr1Name: string;
  // curr1Code;
  curr1Days = [];
  curr1Mid = [];
  val1 = [];
  average = 0
  DisplayLength = 0
  cubeHights = []





  ngOnInit(): void {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const colorYellow = new THREE.Color('hsl(40,100%,60%)')
    const colorBlue = new THREE.Color('hsl(242, 42%, 51%)')
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);


    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }




    let display = (<HTMLInputElement>document.getElementById("displayText"))
    display.appendChild(renderer.domElement);
    let rnd = Math.random()

    console.log("raddom ", rnd)

    const texture = new THREE.TextureLoader().load("../assets/Space.jpg")


    let material = new THREE.MeshPhongMaterial({
      color: colorYellow,
      shininess: 80,
      map: texture
    })
    let materialMax = new THREE.MeshPhongMaterial({
      color: colorYellow,
      shininess: 80,
      //map: texture
    })
    let materialMin = new THREE.MeshPhongMaterial({
      color: colorBlue,
      shininess: 80,
      //map: texture
    })

    // wykres bez http 
    let hights = [1.3, 1.5, 1.34, 1.56, 1.74, 1.1, 1.9, 1.65, 1.9, 1.14, 1.3, 1.65, 1.5, 1.1, 1.9,
      1.3, 1.7, 1.34, 1.08, 1.74, 1.4, 1.9, 1.65, 1.76, 1.14, 1.3, 1.125, 1.5, 1.1, 2,
      1.3, 1.1, 1.34, 1.45, 1.74, 1.4, 1.45, 1.1, 1.76, 1.45, 1.1, 1.125, 1.5, 1.4, 1.34,

    ]
    let maxValue1 = Math.max(...hights)
    let minValue1 = Math.min(...hights)
    for (let i = 0; i < hights.length; i++) {
      console.log("pętla robi cuby bez http", hights[i])
      let cubeHight = (hights[i]) * 5;
      // let cubeHight=(this.curr1Mid[i]-0.5*this.curr1Mid[i];
      // this.cubeHights[i] = cubeHight
      var cubeGeometry = new THREE.BoxGeometry(0.4, cubeHight, 1);
      let cube = new THREE.Mesh(cubeGeometry, material);
      if (hights[i] == maxValue1) { cube = new THREE.Mesh(cubeGeometry, materialMax); }
      if (hights[i] == minValue1) { cube = new THREE.Mesh(cubeGeometry, materialMin); }

      cube.position.set(-10 + i / 2, cubeHight / 2 - 2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
      scene.add(cube);
      // console.log("y posit ",cubeHight/2- 2)
    }




    const textureP = new THREE.TextureLoader().load("../assets/chf.png")
    const geometryP = new THREE.PlaneGeometry(10, 3);
    const materialP = new THREE.MeshBasicMaterial(
      { color: 0xffffff, side: THREE.DoubleSide, map: textureP });
    // let materialP = new THREE.MeshPhongMaterial({
    //   color: colorYellow,
    //   shininess: 80,
    //   map: textureP
    // })
    const plane = new THREE.Mesh(geometryP, materialP);
    plane.position.set(1, -2, 3);
    plane.rotation.x = Math.PI / 2
    scene.add(plane);

    var mixer: any
    camera.position.z = 15;
    let hemilight = new THREE.HemisphereLight(0xffffff, 0x000000, 2)
    scene.add(hemilight)
    // let ambient = new THREE.AmbientLight(0x555500, 9)
    // scene.add(ambient)
    const light = new THREE.PointLight(colorYellow, 2)

    light.position.z = 20
    light.position.y = -20
    light.position.x = -40

    scene.add(light)

    let controls = new OrbitControls(camera, renderer.domElement)
    controls.update()


    const clock = new THREE.Clock()
    var animate = function () {
      requestAnimationFrame(animate);
      // console.log("animate")
      // impModel.rotation.x += 0.01;
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      // // stars.rotation.y += 0.001
      // cube.position.x = -2.11;
      const delta = clock.getDelta()
      //console.log(boolean(mixer))
      if (mixer) { mixer.update(delta) }
      renderer.render(scene, camera);
    };

    animate();







  }


}
