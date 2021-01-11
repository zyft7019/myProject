<template>
  <div id="canvas_con"></div>
</template>
<script>
import * as THREE from "three";
export default {
  data() {
    return {
      a: 123,
      inpCon: "",
      camera: null, // 相机
      scene: null, // 场景
      renderer: null, // 渲染器
      mesh: null,
      light: null,
      cube: null,
      width: null,
      height: null
    };
  },
  methods: {
    // 初始化renderer
    initThree() {
      this.width = document.getElementById('canvas_con').clientWidth
      this.height = document.getElementById('canvas_con').clientHeight
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      this.renderer.setSize(this.width, this.height)
      document.getElementById('canvas_con').appendChild(this.renderer.domElement)
      this.renderer.setClearColor(0xFFFFFF, 1.0)
      this.initCamera()
    },
    // 初始化 camera
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000)
      this.camera.position.x = 0
      this.camera.position.y = 1000
      this.camera.position.z = 0
      this.camera.up.x = 0
      this.camera.up.y = 0
      this.camera.up.z = 1
      this.camera.lookAt({
        x: 0,
        y: 0,
        z: 0,
      })
      this.initScene()
    },

    // 初始化场景
    initScene() {
      this.scene = THREE.Scene()
      this.initLight()
    },

    // 初始化 光
    initLight() {
      this.light = new THREE.DirectionalLight(0xFF0000, 1.0, 0)
      this.light.position.set(100, 100, 200)
      this.scene.add(this.light)
    },

    // 
    threeStart() {
      this.initThree()
      // this.initCamera()
      // this.initScene()
      // this.initLight()

      this.renderer.clear()
      this.renderer.render(this.scene, this.camera)
    }




    // init() {
    //   this.scene = new THREE.Scene();

    //   this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

    //   this.renderer = new THREE.WebGLRenderer();

    //   this.renderer.setSize(window.innerWidth, window.innerHeight);

    //   document.body.appendChild(this.renderer.domElement);
    //   var geometry = new THREE.CubeGeometry(1, 1, 2);
    //   var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //   this.cube = new THREE.Mesh(geometry, material);
    //   this.scene.add(this.cube);
    //   this.camera.position.z = 5;
    // },
    // render() {
    //   requestAnimationFrame(this.render);
    //   this.cube.rotation.x += 0.1;
    //   this.cube.rotation.y += 0.1;
    //   this.renderer.render(this.scene, this.camera);
    // }
  },
  created() {
    // this.threeStart()
  },
  mounted() {
    this.initThree()
    // this.threeStart()
    // this.init();
    // this.render();
  }
};
</script>
<style scoped>
</style>