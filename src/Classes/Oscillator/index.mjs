import EnvGen from 'fastidious-envelope-generator';

class Oscillator{
    constructor(audioContext, {type}){
        type = type.toLowerCase();
        this.oscillator = audioContext.createOscillator();
        this.oscillator.type = type;
        
        this.vca = audioContext.createGain();
        
        this.oscillator.connect(this.vca);

        const volumeAdjust = audioContext.createGain();
        volumeAdjust.gain.setValueAtTime(0.1, audioContext.currentTime);

        // this.vca.connect(audioContext.destination);

        this.vca.connect( volumeAdjust );

        volumeAdjust.connect( audioContext.destination );
        
        this.envelope = new EnvGen(audioContext, this.vca.gain);
        this.envelope.mode = 'ADSR';
        this.envelope.attackTime = 0.1;
        this.envelope.releaseTime = 0.01;

        const t = audioContext.currentTime;
        this.envelope.gateOff(t);
        this.oscillator.start();
    }

    clearNodes(){
        this.oscillator.stop();
        this.vca.disconnect();
        this.oscillator.disconnect();
    }
}

export default Oscillator;