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
        lastNode.connect(this.audioContext.destination);
    }

    play(tablature, timeOuts){
        this.playOscillator(tablature, timeOuts)
    }

    playOscillator(tablature, timeOuts){
        if (tablature.length === 0){return;}

        const {freq, length} = tablature.shift();

        const delta = (60 / this.config.bpm)/this.gridDetail;
        
        const t = this.audioContext.currentTime;
        const tf = t + (delta*length)*0.5;

        const nextCall = delta*length*1000;

        this.src.oscillator.frequency.setValueAtTime(freq, t);
        this.src.envelope.gateOn(t);
        this.src.envelope.gateOff(tf);

        const newTimeout = window.setTimeout( this.playOscillator.bind(this, tablature, timeOuts), nextCall);
        timeOuts.push(newTimeout);
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

        const audioContextDelivery = new AudioContextDelivery();

        const temp = audioContextDelivery.getAudioElement(file);

        // If audio file not found
        if (temp === undefined){
            console.error( `File ${file} was not found` );
            return;
        }
        
        this.audioElement = temp.audioElement;
        this.src = temp.mediaElementSource;

        this.config = generalConfig;
        this.audioNodes = [];

        // HardCoded
        this.gridDetail = 4;
    }

    setFXChain(fxChain){
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
        lastNode.connect(this.audioContext.destination);
    }

    play(tablature, timeOuts){
        this.playFile(tablature, timeOuts);
    }

    playFile(tablature, timeOuts){
        if (tablature.length === 0){return;}

        const hit = tablature.shift();

        const delta = (60 / this.config.bpm)/this.gridDetail;
        
        const t = this.audioContext.currentTime;
        const tf = t + delta;

        const nextCall = delta*1000;

        if (hit){
            this.audioElement.currentTime = 0;
            this.audioElement.play();
        }

        const newTimeout = window.setTimeout( this.playFile.bind(this, tablature, timeOuts), nextCall);
        timeOuts.push(newTimeout);
    }

    clearNodes(){
        for (let i = 0; i < this.audioNodes.length; i++){
            this.audioNodes[i].disconnect();
        }
    }
}

export {SourceOsc, SourceFile};