class AudioContextDelivery{
    constructor(){
        if (AudioContextDelivery.instance != null){
            return AudioContextDelivery.instance;
        }

        AudioContextDelivery.instance = this;

        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.audioElements = {};
    }

    getAudioContext(){
        return this.audioContext;
    }

    addAudioElement(audioFile, audioElement, mediaElementSource){
        this.audioElements[audioFile] = {audioElement, mediaElementSource};
    }

    getAudioElement(audioFile){
        return this.audioElements[audioFile];
    }
}

export default AudioContextDelivery;