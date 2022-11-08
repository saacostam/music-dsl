import {MelodicTablature, RhythmicTablature} from "../Tablature/index.mjs";
import Source from "../Source";
import AudioContextDelivery from '../AudioContextDelivery';

import getDefaultEffects from '../Effect/defaultEffects/index.mjs';

class Scheduler{
    constructor(){
        // if (Scheduler.instance != null){
        //     return Scheduler.instance;
        // }

        // Scheduler.instance = this;

        this.audioContext = new AudioContextDelivery().getAudioContext();
        this.config = {
            bpm : 110,
        };

        // Lista de timeOuts :: para poder limpiar los timeouts si se detiene la reproducción
        this.timeOuts = []; 

        // Tablatures
        this.tablatures = {};

        this.tablatures.tab1 = new MelodicTablature();
        this.tablatures.tab1.setNotes([
            {freq: 220, length: 1},
            {freq: 0, length: 7},
            {freq: 220, length: 1},
            {freq: 0, length: 7},
            {freq: 220, length: 1},
            {freq: 0, length: 7},
            {freq: 220, length: 1},
            {freq: 0, length: 7},
        ]);

        this.tablatures.tab2 = new RhythmicTablature();
        this.tablatures.tab2.setNotes([
            true, false, false, false,
            true, false, false, false,
            true, false, false, false,
            true, false, false, false,
            true, false, false, false,
            true, false, false, false,
            true, false, false, false,
            true, false, false, false,
        ])

        this.tablatures.tab3 = new RhythmicTablature();
        this.tablatures.tab3.setNotes([
            false, false, false, true,
            false, false, true, false,
            false, false, false, true,
            false, false, true, false,
            false, false, false, true,
            false, false, true, false,
            false, false, false, true,
            false, false, true, false,
        ])

        this.tablatures.tab4 = new RhythmicTablature();
        this.tablatures.tab4.setNotes([
            false, false, true, false,
            false, false, true, false,
            false, false, true, false,
            false, false, true, false,
            false, false, true, false,
            false, false, true, false,
            false, false, true, false,
            false, false, true, false,
        ])

        this.tablatures.tab5 = new RhythmicTablature();
        this.tablatures.tab5.setNotes([
            true, false, true, true, true, false, true,
            true, true, false, true,
            true, true, false, true,
            true, true, false, true,
            true, true, false, true,
            true, true, false, true,
            true, true, false, true,
            true, 
        ])

        // FX's
        this.fxs = getDefaultEffects(this.audioContext);

        // Sources
        this.sources = {};

        this.sources.bus1 = new Source(this.audioContext, this.config);
        this.sources.bus1.setSrc('osc', {type: 'square'});
        this.sources.bus1.setFXChain([
            // this.fxs.delay,
            this.fxs.reverb,
            // this.fxs.highpassfilter,
        ]);

        this.sources.bus2 = new Source(this.audioContext, this.config);
        this.sources.bus2.setSrc('file', {file: 'std/Kick.wav'});
        this.sources.bus2.setFXChain([]);

        this.sources.bus3 = new Source(this.audioContext, this.config);
        this.sources.bus3.setSrc('file', {file: 'std/Snare.wav'});
        this.sources.bus3.setFXChain([
            // this.fxs.pingPongDelay,
            // this.fxs.highpassfilter,
        ]);

        this.sources.bus4 = new Source(this.audioContext, this.config);
        this.sources.bus4.setSrc('file', {file: 'std/Hihat.wav'});
        this.sources.bus4.setFXChain([
            // this.fxs.reverb,
            // this.fxs.highpassfilter,
        ]);

        this.sources.bus5 = new Source(this.audioContext, this.config);
        this.sources.bus5.setSrc('file', {file: 'std/Shaker.wav'});
        this.sources.bus5.setFXChain([
            this.fxs.reverb,
            // this.fxs.highpassfilter,
        ]);

        // this.sources.bus1.play(this.tablatures.tab1.getNotes(), this.timeOuts);
        this.sources.bus2.play(this.tablatures.tab2.getNotes(), this.timeOuts);
        this.sources.bus3.play(this.tablatures.tab3.getNotes(), this.timeOuts);
        // this.sources.bus4.play(this.tablatures.tab4.getNotes(), this.timeOuts);
        this.sources.bus5.play(this.tablatures.tab5.getNotes(), this.timeOuts);
    }
}

export default Scheduler;