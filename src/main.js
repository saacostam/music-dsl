import AudioContextDelivery from "./Classes/AudioContextDelivery/index.mjs";
import audioFiles from "./Classes/AudioContextDelivery/audioFiles.js";
import createBuffer from "@/Classes/AudioContextDelivery/createBuffer.js";

function createAudioElement(file) {
  const audioElement = document.createElement("audio");
  audioElement.src = file;
  audioElement.id = file;

  return audioElement;
}

const audioElementsDiv = document.getElementById("audio-elements");
const audioContextDelivery = new AudioContextDelivery();
const audioContext = audioContextDelivery.getAudioContext();

for (const i in audioFiles) {
  const audioFile = audioFiles[i];

  const audioElement = createAudioElement(audioFile);
  audioElementsDiv.append(audioElement);

  const mediaElementSource =
    audioContext.createMediaElementSource(audioElement);

  const audioBuffer = createBuffer(audioContext, audioFile);

  audioContextDelivery.addAudioElement(
    audioFile,
    audioElement,
    mediaElementSource,
    audioBuffer
  );
}

// Console Setup

const _error = console.error,
  _clear = console.clear;

console.error = function () {
  const myConsole = document.getElementById("console-error");

  let newLog = "❌ ";
  for (let i = 0; i < arguments.length; i++) {
    newLog += arguments[i];
  }

  myConsole.innerText += newLog + "\n";

  return _error.apply(console, arguments);
};

console.clear = function () {
  const myConsole = document.getElementById("console-error");
  myConsole.innerText = "Running...\n";

  return _clear.apply(console, arguments);
};

// Vue Setup

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
