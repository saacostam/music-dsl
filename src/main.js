import AudioContextDelivery from './Classes/AudioContextDelivery/index.mjs';

// Audio Constant Configuration
const audioFiles = ["std/Kick.wav", "std/Snare.wav", "std/Shaker.wav", "std/Hihat.wav"];

function createAudioElement(file){
    const audioElement = document.createElement('audio');
    audioElement.src = file;
    audioElement.id = file;

    return audioElement
}

const audioElementsDiv = document.getElementById("audio-elements");
const audioContextDelivery = new AudioContextDelivery();
const audioContext = audioContextDelivery.getAudioContext();

for (const i in audioFiles){
    const audioFile = audioFiles[i];

    const audioElement = createAudioElement(audioFile);
    audioElementsDiv.append( audioElement);

    const mediaElementSource = audioContext.createMediaElementSource( audioElement );

    audioContextDelivery.addAudioElement(audioFile, audioElement, mediaElementSource);
}

// Vue Setup

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
