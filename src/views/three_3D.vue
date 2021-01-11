<template>
    <canvas id="mainCanvas" width="800px" height="600px" ></canvas>
</template>
<script>
export default {
    data() {
        return {
            a: 1,
            scene: null,
            camera: null,
            renderer: null,
            mesh: null,
            id: null,
        }
    },
    methods: {
            init() {
                let renderer = new THREE.WebGLRenderer({//渲染器
                    canvas: document.getElementById('mainCanvas')//画布
                });
                renderer.setClearColor(0x000000);//画布颜色
                let scene = new THREE.Scene();//创建场景
                
                let camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);//正交投影照相机
                camera.position.set(15, 25, 25);//相机位置
                camera.lookAt(new THREE.Vector3(0, 2, 0));//lookAt()设置相机所看的位置
                scene.add(camera);//把相机添加到场景中
                
                var loader = new THREE.OBJLoader();//在init函数中，创建loader变量，用于导入模型
                loader.load('./HM.obj', function(obj) {//第一个表示模型路径，第二个表示完成导入后的回调函数，一般我们需要在这个回调函数中将导入的模型添加到场景中
                    obj.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                            child.material.side = THREE.DoubleSide;
                        }
                    });
                
                    this.mesh = obj;//储存到全局变量中
                    scene.add(obj);//将导入的模型添加到场景中
                });
                
                var light = new THREE.DirectionalLight(0xffffff);//光源颜色
                light.position.set(20, 10, 5);//光源位置
                scene.add(light);//光源添加到场景中
                
                this.id = setInterval(draw, 20);//每隔20s重绘一次
            },
            
            draw() {//们在重绘函数中让茶壶旋转：
                renderer.render(scene, camera);//调用WebGLRenderer的render函数刷新场景
                
                this.mesh.rotation.y += 0.01;//添加动画
                if (this.mesh.rotation.y > Math.PI * 2) {
                    this.mesh.rotation.y -= Math.PI * 2;
                }
            }
    }
}
</script>
<style scoped>

</style>