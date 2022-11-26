class AudioContextDelivery{
    constructor(){
        if (AudioContextDelivery.instance){
            return AudioContextDelivery.instance;
        }

        AudioContextDelivery.instance = this;

        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.audioElements = {};

        this.buffers = {};
    }

    getAudioContext(){
        return this.audioContext;
    }

    storeBuffer(audioFile, buffer){
        this.buffers[audioFile] = buffer;
    }

    getBuffer(audioFile){
        return this.buffers[audioFile];
    }

    addAudioElement(audioFile, audioElement, mediaElementSource){
        this.audioElements[audioFile] = {audioElement, mediaElementSource};
    }

    getAudioElement(audioFile){
        return this.audioElements[audioFile];
    }
}

export default AudioContextDelivery;