self.onmessage = function(event) {
  const { imageData, density } = event.data;

  for (let j = 0; j < imageData.height; j+=5) {
    for (let i = 0; i < imageData.width; i+=5) {
      const pixelIndex = (i + j * imageData.width) * 4;
      const r = imageData.data[pixelIndex + 0];
      const g = imageData.data[pixelIndex + 1];
      const b = imageData.data[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = Math.floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);

      // console.log(`Pixel at (${i}, ${j}): brightness = ${avg}, character = '${c}'`);
      self.postMessage({ i, j, c });
    }
  }
};

/**
 * @param {number} value
 * @param {number} start1
 * @param {number} stop1
 * @param {number} start2
 * @param {number} stop2
 */
function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}