<script lang="ts">
    import { onMount } from "svelte";
    import * as BABYLON from "@babylonjs/core";
    import "@babylonjs/loaders/glTF";
 
  
    onMount(() => {
      // Create a Babylon.js scene
      const canvas = document.getElementById("babylon-canvas");
      // @ts-ignore
      const engine = new BABYLON.Engine(canvas, true);
      
  
      const createScene = function () {
        const scene = new BABYLON.Scene(engine);
  
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
  
        const camera = new BABYLON.ArcRotateCamera(
          "Camera",
          Math.PI / 2,
          Math.PI / 2,
          2,
          new BABYLON.Vector3(751,83, 356),
          scene
        );
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);


        // scene.registerBeforeRender(() => {
        //   console.log(camera.position);
        // });



  
        const light = new BABYLON.HemisphericLight(
          "light",
          new BABYLON.Vector3(0, 1, -50),
          scene
        );
        light.intensity = 0.7;
  
     

        //coke
        BABYLON.SceneLoader.ImportMesh(
          "",
          "https://kolown.net/assets/mona.glb",
          "",
          scene,
          (meshes) => {
            console.log("meshes", meshes);
            const sculptureMesh = meshes[1];
  
            // Create a basic material with a flat color
            const basicMaterial = new BABYLON.StandardMaterial(
              "basicMaterial",
              scene
            );
            basicMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0); 
               // Render as wireframe
    //basicMaterial.wireframe = true;
  
            // Apply the basic material to the GLTF mesh
            sculptureMesh.material = basicMaterial;


               // Calculate the center of the mesh
               sculptureMesh.computeWorldMatrix(true);
            const boundingInfo = sculptureMesh.getBoundingInfo();
            const center = boundingInfo.boundingBox.centerWorld;

            // Center the mesh in the scene
            sculptureMesh.position = center.scale(-1);

            // Rotate the mesh before each render
            scene.registerBeforeRender(() => {
              sculptureMesh.rotate(BABYLON.Axis.Y, 0.01, BABYLON.Space.LOCAL);
            });

          }
        );
  
      
        return scene;
      };
  


      const scene = createScene();
  
      engine.runRenderLoop(() => {
        scene.render();
      });
  
      window.addEventListener("resize", () => {
        engine.resize();
      });
  
      // scene.debugLayer.show();
    });
  </script>
  
  <canvas id="babylon-canvas" />
  