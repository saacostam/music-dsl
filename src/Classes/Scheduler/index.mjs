import {MelodicTablature, RhythmicTablature} from "../Tablature";
import {TrackLoop, TrackSequential} from "../Track";
import {SourceOsc, SourceFile} from "../Source";
import AudioContextDelivery from '../AudioContextDelivery';
import Pattern from '../Pattern';
import Effect from "../Effect";

import getDefaultEffects from '../Effect/defaultEffects';

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
        this.tracks = [];
    }

    buildNodes(){
        this.config = {
            bpm : 128,
        };

        this.tablatures.tab1 = new MelodicTablature();
        this.tablatures.tab1.setNotes([
            {freq: 220, length: 2},
            {freq: 0, length: 2},
            {freq: 245, length: 2},
            {freq: 0, length: 2},
            {freq: 260, length: 2},
            {freq: 0, length: 2},
            {freq: 245, length: 2},
            {freq: 0, length: 2},
            {freq: 220, length: 2},
            {freq: 0, length: 2},
            {freq: 245, length: 2},
            {freq: 0, length: 2},
            {freq: 260, length: 2},
            {freq: 0, length: 2},
            {freq: 245, length: 2},
            {freq: 0, length: 2},
        ]);

        this.tablatures.tab2 = new RhythmicTablature();
        this.tablatures.tab2.setNotes(".___ .___ .___ .___ .___ .___ .___ .___");

        this.tablatures.tab3 = new RhythmicTablature();
        this.tablatures.tab3.setNotes("___. __._ ___. __._ ___. __._ ___. __._ ");

        this.tablatures.tab4 = new RhythmicTablature();
        this.tablatures.tab4.setNotes("__._ __._ __._ __._ __._ __._ __._ __._ ");

        this.tablatures.tab5 = new RhythmicTablature();
        this.tablatures.tab5.setNotes("._.. ._.. ._.. ._.. ._.. ._.. ._.. ._.. ");

        // Effects
        const effectSingleton = new Effect();
        this.fxs["myReverb"] = effectSingleton.createEffect('Reverb', {
            time: 0.1,
            decay: 0.1,
            reverse: false,
            mix: 0.8
        });

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

        // Patterns

        this.patterns.pattern1 = new Pattern( this.tablatures.tab1, this.sources.bus1 );
        this.patterns.pattern2 = new Pattern( this.tablatures.tab2, this.sources.bus2 );
        this.patterns.pattern3 = new Pattern( this.tablatures.tab3, this.sources.bus3 );
        this.patterns.pattern4 = new Pattern( this.tablatures.tab4, this.sources.bus4 );
        this.patterns.pattern5 = new Pattern( this.tablatures.tab5, this.sources.bus5 );

        // Tracks
        // this.tracks.push( new TrackLoop( this.patterns.pattern1, this.config ) );
        this.tracks.push( new TrackLoop( this.patterns.pattern2, this.config ) );
        // this.tracks.push( new TrackLoop( this.patterns.pattern3, this.config ) );
        this.tracks.push( new TrackLoop( this.patterns.pattern4, this.config ) );
        // this.tracks.push( new TrackLoop( this.patterns.pattern5, this.config ) );}
    }

    testPlay(){
        // Inicializar todos los tracks
        for (const i in this.tracks){
            this.tracks[i].play( this.timeOuts );
        }
    }

    testPause(){
        // Remover todos los timeouts
        for (const i in this.timeOuts){
            clearTimeout(this.timeOuts[i]);
        }
    }

    clearNodes(){
        // Remover conexiones the cada node de audio
        for (const i in this.sources){
            this.sources[i].clearNodes();
        }

        // Remover todos los timeouts
        for (const i in this.timeOuts){
            clearTimeout(this.timeOuts[i]);
        }

        // Reiniciar el estado
        this.timeOuts = []; 
        this.tablatures = {};
        this.fxs = getDefaultEffects(this.audioContext);
        this.sources = {};
        this.patterns = {};
        this.config = {};
        this.tracks = [];
    }
}

export default Scheduler;