import Oscillator from "../Oscillator/index.mjs";
import AudioContextDelivery from '../AudioContextDelivery/index.mjs';

class Source{
    constructor(audioContext, config){
        this.audioContext = audioContext;
        this.srcType = 'osc';
        this.src = null;

        this.config = config;

        // HardCoded
        this.gridDetail = 4;
    }

    setSrc(srcType, srcConfig){
        if (!(srcType === 'osc' || srcType === 'file')){
            console.error('Invalid Source Type for Bus object');
            return;
        }
        
        this.srcType = srcType;

        if (this.srcType == 'osc'){
            this.src = new Oscillator(this.audioContext, srcConfig);
        }else{
            const {file} = srcConfig;

            const audioContextDelivery = new AudioContextDelivery();
            const temp = audioContextDelivery.getAudioElement(file)
            
            this.audioElement = temp.audioElement;
            this.src = temp.mediaElementSource;
        }
    }

    setFXChain(fxChain){
        if (this.src == null){
            console.error('Source element was not defined')
            return;
        }

        let lastNode;
        if (this.srcType == 'osc'){
            lastNode = this.src.vca;
        }else{
            lastNode = this.src;
        }

        for (let fxIndex = 0; fxIndex < fxChain.length; fxIndex+=1){
            lastNode.connect( fxChain[fxIndex] );
            lastNode = fxChain[fxIndex];
        }

        lastNode.connect(this.audioContext.destination);
    }

    play(tablature, timeOuts){
        if (this.srcType === 'osc'){
            this.playOscillator(tablature, timeOuts);
        }else{
            // this.srcType === "file"
            this.playFile(tablature, timeOuts);
        }
    }

    playOscillator(tablature, timeOuts){
        if (tablature.length === 0){return;}

        const {freq, length} = tablature.shift();

        const delta = (60 / this.config.bpm)/this.gridDetail;
        
        const t = this.audioContext.currentTime;
        const tf = t + delta*length;

        const nextCall = delta*length*1000;

        this.src.oscillator.frequency.setValueAtTime(freq, t);
        this.src.envelope.gateOn(t);
        this.src.envelope.gateOff(tf);

        const newTimeout = window.setTimeout( this.playOscillator.bind(this, tablature, timeOuts), nextCall);
        timeOuts.push(newTimeout);
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
}

export default Source;