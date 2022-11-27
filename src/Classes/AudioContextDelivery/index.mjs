class AudioContextDelivery{
    constructor(){
        if (AudioContextDelivery.instance){
            return AudioContextDelivery.instance;
        }

        AudioContextDelivery.instance = this;

        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.connect( this.audioContext.destination );
        this.analyser.fftSize = 64;
        this.bufferLength = this.analyser.frequencyBinCount;

        this.audioElements = {};

        this.buffers = {};
    }

    getAudioContext(){
        return this.audioContext;
    }

    getDestination(){
        return this.analyser;
    }

    getDataArray(){
        const dataArray = new Uint8Array(this.bufferLength);
        this.analyser.getByteFrequencyData(dataArray);
        
        return dataArray;
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