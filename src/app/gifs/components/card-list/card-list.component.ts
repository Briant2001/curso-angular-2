import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Gif } from '../../IGisf.interface';
import * as THREE from "three"

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private plane!: THREE.Mesh;


  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.initScene();
    this.createPlane();
    this.animate();
  }

  ngOnDestroy() {
    this.destroyScene();
  }

  private initScene() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.el.nativeElement.appendChild(this.renderer.domElement);
  }

  private createPlane() {
    const geometry = new THREE.PlaneGeometry(2, 2); // Ancho y alto de la superficie plana
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://media0.giphy.com/avatars/xbox/rgsPy6c93KaO.png'); // Reemplaza 'ruta-de-tu-imagen.jpg' con la ruta de tu imagen
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.plane = new THREE.Mesh(geometry, material);

    this.scene.add(this.plane);
  }

  private animate() {
    const animatePlane = () => {
      requestAnimationFrame(animatePlane);

      this.plane.rotation.x += 0.01;
      this.plane.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    };

    animatePlane();
  }

  private destroyScene() {
    this.renderer.dispose();
  }


}
