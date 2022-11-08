import {MelodicTablature, RhythmicTablature} from "../Tablature/index.mjs";
import {SourceOsc, SourceFile} from "../Source";
import AudioContextDelivery from '../AudioContextDelivery';
import Pattern from '../Pattern';
import Effect from "../Effect";

import getDefaultEffects from '../Effect/defaultEffects/index.mjs';

class Scheduler{
    constructor(){
        // Singleton
        if (Scheduler.instance){
            return Scheduler.instance;
        }

        Scheduler.instance = this;

        this.audioContext = new AudioContextDelivery().getAudioContext();

        // Lista de timeOuts :: para poder limpiar los timeouts si se detiene la reproducción
        this.timeOuts = []; 
        this.tablatures = {};
        this.fxs = getDefaultEffects(this.audioContext);
        this.sources = {};
        this.patterns = {};
        this.config = {};
    }

    buildNodes(){
        this.config = {
            bpm : 110,
        };

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

        // Effects
        const effectSingleton = new Effect();
        this.fxs.myReverb = effectSingleton.createEffect('Reverb', {
            time: 0.1,
            decay: 0.1,
            reverse: false,
            mix: 0.8
        });

        console.log(this.fxs.myReverb);
        

        this.sources.bus1 = new SourceOsc(this.audioContext, this.config, {type: 'square'});
        this.sources.bus1.setFXChain([
            // this.fxs.delay,
            this.fxs.reverb,
            // this.fxs.highpassfilter,
        ]);

        this.sources.bus2 = new SourceFile(this.audioContext, this.config, {file: 'std/Kick.wav'});
        this.sources.bus2.setFXChain([]);

        this.sources.bus3 = new SourceFile(this.audioContext, this.config, {file: 'std/Snare.wav'});
        this.sources.bus3.setFXChain([
            // this.fxs.reverb,
            // this.fxs.highpassfilter,
        ]);

        this.sources.bus4 = new SourceFile(this.audioContext, this.config, {file: 'std/Hihat.wav'});
        this.sources.bus4.setFXChain([
            // this.fxs.reverb,
            // this.fxs.highpassfilter,
        ]);

        this.sources.bus5 = new SourceFile(this.audioContext, this.config, {file: 'std/Shaker.wav'});
        this.sources.bus5.setFXChain([
            this.fxs.reverb,
            // this.fxs.highpassfilter,
        ]);


        this.patterns.pattern1 = new Pattern( this.tablatures.tab1, this.sources.bus1 );
        this.patterns.pattern2 = new Pattern( this.tablatures.tab2, this.sources.bus2 );
        this.patterns.pattern3 = new Pattern( this.tablatures.tab3, this.sources.bus3 );
        this.patterns.pattern4 = new Pattern( this.tablatures.tab4, this.sources.bus4 );
        this.patterns.pattern5 = new Pattern( this.tablatures.tab5, this.sources.bus5 );
    }

    testPlay(){
        // this.patterns.pattern1.play(this.timeOuts);
        this.patterns.pattern2.play(this.timeOuts);
        this.patterns.pattern3.play(this.timeOuts);
        this.patterns.pattern4.play(this.timeOuts);
        this.patterns.pattern5.play(this.timeOuts);
    }

    testPause(){
        // Remove all timeouts
        for (const i in this.timeOuts){
            clearTimeout(this.timeOuts[i]);
        }
    }

    clearNodes(){
        // Clear fx node chain from source element
        for (const i in this.sources){
            this.sources[i].clearNodes();
        }

        // Remove all timeouts
        for (const i in this.timeOuts){
            clearTimeout(this.timeOuts[i]);
        }

        // Restart state
        this.timeOuts = []; 
        this.tablatures = {};
        this.fxs = getDefaultEffects(this.audioContext);
        this.sources = {};
        this.patterns = {};
        this.config = {};
    }
}

export default Scheduler;