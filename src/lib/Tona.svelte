<script lang="ts">
  // @ts-nocheck
  import { onMount } from 'svelte';
  import MyWorker  from './worker?worker'

  const density = '█▓▒░░aaaaccctttgg::...                ';
  let video;

  onMount(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error('No canvas element found');
      return;
    }
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    video = document.createElement('video');
    video.src = './weaving.mp4';
    video.loop = true;
    video.muted = true;
    video.play();

    const worker = new MyWorker();
    worker.onmessage = (event) => {
      const { i, j, c } = event.data;
      ctx.fillStyle = 'red'; // Set the fill color to red
      ctx.font = '7px Arial';
      ctx.fillText(c, i * 2, j * 2); // Multiply the coordinates by the font size
    };

    video.onplay = () => {
      setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height); // Draw the video frame onto the canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); // Get the image data
        worker.postMessage({ imageData, density });
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      }, 1000 / 10); 
    };
  });
</script>

<canvas id="canvas" width="300" height="300"></canvas>