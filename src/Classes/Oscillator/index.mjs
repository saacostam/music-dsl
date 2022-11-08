import EnvGen from 'fastidious-envelope-generator';

class Oscillator{
    constructor(audioContext, {type}){
        type = type || 'triangle';
        this.oscillator = audioContext.createOscillator();
        this.oscillator.type = type;
        
        this.vca = audioContext.createGain();
        
        this.oscillator.connect(this.vca);
        this.vca.connect(audioContext.destination);
        
        this.envelope = new EnvGen(audioContext, this.vca.gain);
        this.envelope.mode = 'ADSR';
        this.envelope.attackTime = 0.01;
        this.envelope.releaseTime = 0.1;

        const t = audioContext.currentTime;
        this.envelope.gateOff(t);
        this.oscillator.start();
    }
}

export default Oscillator;