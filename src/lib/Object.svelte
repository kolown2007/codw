<script lang="ts">
  import { onMount } from "svelte";
  import * as BABYLON from "@babylonjs/core";
  import "@babylonjs/loaders/glTF";
  import { user } from "./we";

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
        new BABYLON.Vector3(0, 0, 0),
        scene
      );
      camera.setTarget(BABYLON.Vector3.Zero());
      camera.attachControl(canvas, true);

      const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, -50),
        scene
      );
      light.intensity = 0.7;

      //torus

      const torus = BABYLON.MeshBuilder.CreateTorus("torus", {
        thickness: 0.5,
        diameter: 5,
        tessellation:8
      });
      torus.position = new BABYLON.Vector3(0, 5, 0);

      //coconut
      BABYLON.SceneLoader.ImportMesh(
        "",
        "/src/lib/obj/coco2.glb",
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
          basicMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0); // Set the color to white

          // Apply the basic material to the GLTF mesh
          sculptureMesh.material = basicMaterial;
        }
      );

      //   const plane = BABYLON.MeshBuilder.CreatePlane('plane', { size: 10 }, scene);
      // plane.position = new BABYLON.Vector3(0, 0, 0);

      // // Add a material to the plane (optional)
      // const planeMaterial = new BABYLON.StandardMaterial('planeMaterial', scene);
      // planeMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0); // Set the color to white
      // plane.material = planeMaterial;


      //CUBE
      const cube = BABYLON.MeshBuilder.CreateBox(
        "cube",
        { height: 5, width: 5, depth: 5 },
        scene
      );

      cube.position = new BABYLON.Vector3(0, -2.6, 0);

      // Add a material to the box
      const material = new BABYLON.StandardMaterial("material", scene);
      material.diffuseColor = new BABYLON.Color3(1, 0, 0);

      cube.material = material;
      torus.material =material;
      material.wireframe = true;

      // Set up a basic animation
      scene.registerBeforeRender(() => {
        cube.rotation.y += 0.001 * $user.windspeed;
        torus.rotation.y += 0.005 * $user.windspeed;
      });

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
