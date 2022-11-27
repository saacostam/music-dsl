import Oscillator from "../Oscillator/index.mjs";
import AudioContextDelivery from '../AudioContextDelivery/index.mjs';

class SourceOsc{
    constructor(audioContext, generalConfig, srcConfig){
        this.audioNodes = [];

        this.audioContext = audioContext;
        this.src = new Oscillator(this.audioContext, srcConfig);;

        this.config = generalConfig;

        // HardCoded
        this.gridDetail = 4;
    }

    setFXChain(fxChain){
        if (this.src == null){
            console.error('Source element was not defined')
            return;
        }

        let lastNode = this.src.vca;

        for (let fxIndex = 0; fxIndex < fxChain.length; fxIndex+=1){
            this.audioNodes.push( lastNode );
            lastNode.connect( fxChain[fxIndex] );

            lastNode = fxChain[fxIndex];
        }

        this.audioNodes.push( lastNode );

        const audioContextDelivery = new AudioContextDelivery();
        lastNode.connect( audioContextDelivery.getDestination() );
    }

    play( tab, playTime ){
        const {freq, length} = tab;

        const delta = (60 / this.config.bpm)/this.gridDetail;
        
        const t = playTime;
        const tf = t + delta*length;

        this.src.oscillator.frequency.setValueAtTime(freq, t);
        this.src.envelope.gateOn(t);
        this.src.envelope.gateOff(tf);

        return tf;
    }

    clearNodes(){
        for (let i = 0; i < this.audioNodes.length; i++){
            this.audioNodes[i].disconnect();
        }
        this.src.clearNodes();
    }
}

class SourceFile{
    constructor(audioContext, generalConfig, srcConfig){
        this.audioNodes = [];

        this.audioContext = audioContext;
        
        const {file} = srcConfig;
        this.file = file;

        const audioContextDelivery = new AudioContextDelivery();
        const temp = audioContextDelivery.getAudioElement(file);

        // If audio file not found
        if (temp === undefined){
            console.error( `File ${file} was not found` );
            return;
        }
        
        this.audioElement = temp.audioElement;

        this.config = generalConfig;
        this.audioNodes = [];

        // HardCoded
        this.gridDetail = 4;
    }

    setFXChain(fxChain){
        this.fxChain = fxChain;
    }

    getSrc(){
        const audioContextDelivery = new AudioContextDelivery();
        this.src = this.audioContext.createBufferSource();
        this.src.buffer = audioContextDelivery.getBuffer( this.file );
    }

    applyFxChain(){
        const fxChain = this.fxChain;

        if (this.src == null){
            console.error('Source element was not defined')
            return;
        }

        let lastNode = this.src;

        for (let fxIndex = 0; fxIndex < fxChain.length; fxIndex+=1){
            this.audioNodes.push( lastNode );
            lastNode.connect( fxChain[fxIndex] );

            lastNode = fxChain[fxIndex];
        }

        this.audioNodes.push( lastNode );

        const audioContextDelivery = new AudioContextDelivery();
        lastNode.connect( audioContextDelivery.getDestination() );
    }

    play(tab, playTime){
        this.getSrc();
        this.applyFxChain();

        const delta = (60 / this.config.bpm)/this.gridDetail;
        
        const t = playTime;
        const tf = t + delta;

        if (tab){
            this.src.start( playTime, 0 );
        }

        return tf;
    }

    clearNodes(){
        for (let i = 0; i < this.audioNodes.length; i++){
            this.audioNodes[i].disconnect();
        }
    }
}

export {SourceOsc, SourceFile};