import Tuna from "tunajs";
import Pizzicato from "pizzicato";
import AudioContextDelivery from "../AudioContextDelivery/index.mjs";

class Effect {
  constructor() {
    if (Effect.instance) {
      return Effect.instance;
    }

    Effect.instance = this;

    this.audioContext = new AudioContextDelivery().getAudioContext();

    this.tuna = new Tuna(this.audioContext);
    Pizzicato.context = this.audioContext;

    this.constructorMapper = {
      Delay: Pizzicato.Effects.Delay,
      Distortion: Pizzicato.Effects.Distortion,
      LowpassFilter: Pizzicato.Effects.LowPassFilter,
      BitCrusher: this.tuna.Bitcrusher,
      PingPongDelay: this.tuna.PingPongDelay,
      WahWah: this.tuna.WahWah,
      Tremolo: Pizzicato.Effects.Tremolo,
      Reverb: Pizzicato.Effects.Reverb,
      Flanger: Pizzicato.Effects.Flanger,
      Gain: this.tuna.Gain,
    };
  }

  createEffect(effectType, configElement) {
    const effectConstructor = this.constructorMapper[effectType];

    if (effectConstructor === null) {
      console.error("Undefined <effectType>");
      return;
    }

    return new effectConstructor(configElement);
  }
}

export default Effect;
