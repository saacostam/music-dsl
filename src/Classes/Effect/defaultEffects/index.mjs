import Tuna from "tunajs";
import Pizzicato from 'pizzicato';

function getDefaultEffects(audioContext){
    const tuna = new Tuna(audioContext);
    Pizzicato.context = audioContext;

    return {
        delay : new Pizzicato.Effects.Delay({
            feedback: 0.1,
            time: 0.3,
            mix: 0.5
        }),
        distortion : new Pizzicato.Effects.Distortion({
            gain: 1
        }),
        lowpassfilter : new Pizzicato.Effects.LowPassFilter({
            frequency: 400,
            peak: 10
        }),
        highpassfilter : new Pizzicato.Effects.HighPassFilter({
            frequency: 1000,
            peak: 10
        }),
        bitcrusher : new tuna.Bitcrusher({
            bits: 1,          //1 to 16
            normfreq: 0.1,    //0 to 1
            bufferSize: 4096  //256 to 16384
        }),
        pingPongDelay : new tuna.PingPongDelay({
            wetLevel: 0.5,       //0 to 1
            feedback: 0.5,       //0 to 1
            delayTimeLeft: 50,  //1 to 10000 (milliseconds)
            delayTimeRight: 50  //1 to 10000 (milliseconds)
        }),
        wahwah : new tuna.WahWah({
            automode: true,                  //true/false
            baseFrequency: 0.153,            //0 to 1
            excursionOctaves: 3.3,           //1 to 6
            sweep: 0.35,                     //0 to 1
            resonance: 19,                   //1 to 100
            sensitivity: -0.5,               //-1 to 1
            bypass: 0
        }),
        tremolo : new Pizzicato.Effects.Tremolo({
            speed: 5,
            depth: 1,
            mix: 0.5
        }),
        reverb : new Pizzicato.Effects.Reverb({
            time: 0.1,
            decay: 0.1,
            reverse: false,
            mix: 0.8
        }),
        flanger : new Pizzicato.Effects.Flanger({
            time: 0.45,
            speed: 0.2,
            depth: 0.1,
            feedback: 0.5,
            mix: 0.5
        })
    }
}

export default getDefaultEffects;