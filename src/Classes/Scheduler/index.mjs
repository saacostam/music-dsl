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

        this.playing = false;

        this.tablatures = {};
        this.fxs = getDefaultEffects(this.audioContext);
        this.sources = {};
        this.patterns = {};
        this.config = {};
        this.tracks = [];
    }

    createMelodicTablature(id, notesString){
        this.tablatures[id] = new MelodicTablature();
        this.tablatures[id].parseNotes( notesString ); 
    }

    createRhythmicTablature(id, strokesString){
        this.tablatures[id] = new RhythmicTablature();
        this.tablatures[id].setNotes( strokesString );
    }

    createEffect( id, effectType, effectConfig ){
        const effectSingleton = new Effect();
        this.fxs[id] = effectSingleton.createEffect(effectType, effectConfig);
    }

    // Audio Sources
    createOscSource(id, type, effectChainString){
        this.sources[id] = new SourceOsc(this.audioContext, this.config, {type});

        let effectIds = [];
        if (effectChainString !== ''){
            effectIds = effectChainString.split('->');
        }
        let effectChain = []

        for (let i=0; i < effectIds.length; i++){
            const id = effectIds[i];

            if ( this.fxs[ id ] !== undefined ){
                effectChain.push( this.fxs[id] );
            }else{
                console.error( `Effect ${id} not created` )
            }
        }

        this.sources[id].setFXChain(effectChain);
    }

    createFileSource(id, audioPath, effectChainString){
        this.sources[id] = new SourceFile(this.audioContext, this.config, {file: audioPath});

        let effectIds = [];
        if (effectChainString !== ''){
            effectIds = effectChainString.split('->');
        }
        let effectChain = []

        for (let i=0; i < effectIds.length; i++){
            const id = effectIds[i];

            if ( this.fxs[ id ] !== undefined ){
                effectChain.push( this.fxs[id] );
            }else{
                console.error( `Effect ${id} not created` )
            }
        }

        this.sources[id].setFXChain(effectChain);
    }

    createPattern(patternId, tabId, sourceId){
        // Check if created
        if (this.tablatures[tabId] === undefined){
            console.error(`Tablature ${tabId} not created`);
            return;
        }

        if (this.sources[sourceId] === undefined){
            console.error(`Source ${sourceId} not created`);
            return;
        }

        // Check if compatible
        const tabClass = this.tablatures[tabId].constructor.name;
        const sourceClass = this.sources[sourceId].constructor.name;

        if ( (tabClass === 'RhythmicTablature' && sourceClass !== 'SourceFile') || (tabClass === 'MelodicTablature' && sourceClass !== 'SourceOsc')){
            console.error(`Incompatible tablature and source type`);
            return;
        }

        this.patterns[patternId] = new Pattern( this.tablatures[tabId], this.sources[sourceId]);
    }

    createTrackLoop(patternId){
        // Check if pattern was created
        const pattern = this.patterns[patternId];

        if (pattern === undefined){
            console.error(`Pattern ${patternId} not created`);
            return;
        }

        this.tracks.push( new TrackLoop( pattern, this.config ) );
    }

    createSequentialLoop(patternIds){
        // Check if pattern were created
        let patterns = [];

        for (let i = 0; i < patternIds.length; i++){
            const patternId = patternIds[i].getText();
            const pattern = this.patterns[ patternId ];

            if (pattern === undefined){
                console.error(`Pattern ${ patternId } not created`);
                return;
            }else{
                patterns.push( pattern );
            }
        }

        this.tracks.push( new TrackSequential(patterns, this.config) );
    }






    // Utils
    play(){
        this.playing = true;

        this.schedule();
    }

    sync(){
        const currentTime = this.audioContext.currentTime;

        for (let i = 0; i < this.tracks.length; i++){
            this.tracks[i].setEndTime(currentTime+1);
        }
    }

    pause(){
        this.playing = false;
    }

    schedule(){
        if (!this.playing){return;}

        const currentTime = this.audioContext.currentTime;

        for (let i = 0; i < this.tracks.length; i++){
            const track = this.tracks[i];
            const endTime = track.getEndTime();

            // Sincronizar si ocurrio alguna interrupción
            if (endTime - currentTime < 0){
                this.sync();
                console.error('out-of-sync 🤔: please re-run the script or re-load page!');
            }

            if (currentTime + 1 >= endTime){
                track.playNext();
            }
        }

        setTimeout( this.schedule.bind(this), 100);
    }

    clearNodes(){
        // Remover conexiones the cada node de audio
        for (const i in this.sources){
            this.sources[i].clearNodes();
        }

        // Reiniciar el estado
        this.tablatures = {};
        this.fxs = getDefaultEffects(this.audioContext);
        this.sources = {};
        this.patterns = {};
        this.config = {};
        this.tracks = [];
    }
}

export default Scheduler;