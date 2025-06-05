import AudioContextDelivery from "@/Classes/AudioContextDelivery/index.mjs";

function updateCanvas(dataArray) {
  clearCanvas();

  const canvas = document.getElementById("visualizer");
  const context = canvas.getContext("2d");

  const width = canvas.width;
  const height = canvas.height;
  const padding = 10; // px
  const margin = 5; // px

  const len = dataArray.length;

  const squareWidth = (width - 2 * padding - margin * len) / len;
  const availableHeight = height - 2 * padding;

  context.fillStyle = "#007bff";

  for (let i = 0; i < len; i++) {
    const x = padding + (margin + squareWidth) * i;
    const h = (dataArray[i] / 256) * availableHeight;
    const y = height - padding - h;

    context.fillRect(x, y, squareWidth, h);
  }
}

const updateVisualizer = () => {
  const dataArray = new AudioContextDelivery().getDataArray();
  updateCanvas(dataArray);
  window.requestAnimationFrame(updateVisualizer);
};

function clearCanvas() {
  const canvas = document.getElementById("visualizer");
  const context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);
}

export default updateVisualizer;
