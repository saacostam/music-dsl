import antlr4 from 'antlr4';
import MusicCreatorLexer from './MusicCreatorLexer.js';
import MusicCreatorParser from './MusicCreatorParser.js';
import MusicCreatorVisitor from './MusicCreatorVisitor.js';
import Scheduler from '@/Classes/Scheduler/index.mjs';
// import MusicCreatorListener from './MusicCreatorListener.js';

class Visitor extends MusicCreatorVisitor{
    constructor(){
        super();
        this.scheduler = new Scheduler();
    }

    // Config
    visitBpm(ctx){
        const bpm = parseInt( ctx.INT_NUM().getText(), 10);
        this.scheduler.config['bpm'] = bpm;
    }
    visitDetail(ctx){
        const detail = parseInt( ctx.INT_NUM().getText(), 10);
        this.scheduler.config['detail'] = detail;
    }

    // Tablature
    visitTablature_melodic(ctx){
        const id = ctx.ID().getText();
        const notesString = ctx.notes().getText();

        this.scheduler.createMelodicTablature( id, notesString )
    }

    visitTablature_rhythmic(ctx){
        const id = ctx.ID().getText();
        const strokesString = ctx.strokes().getText();
        
        this.scheduler.createRhythmicTablature( id, strokesString )
    }

    // Effect
    visitEffect(ctx){
        const id = ctx.ID().getText();
        const effectType = ctx.EFFECT_TYPE().getText();
                
        const effectConfig = {};
        
        const effectParams = ctx.effect_params().param();
        for (let i =0; i < effectParams.length; i++){
            const param = effectParams[i];
            const paramId = param.ID().getText();
            const paramValueCtx = param.param_value();

            let paramValue;
            if (paramValueCtx.INT_NUM() != null){
                // Integer Parameter
                paramValue = parseInt( paramValueCtx.INT_NUM().getText(), 10 );
            }else if (paramValueCtx.FLOAT_NUM() != null){
                // Float Parameter
                paramValue = parseFloat( paramValueCtx.FLOAT_NUM().getText() );
            }else{
                // Boolean
                paramValue = (paramValueCtx.BOOLEAN().getText() === 'true') ? true : false;
            }

            effectConfig[ paramId ] = paramValue;
        }

        this.scheduler.createEffect( id, effectType, effectConfig )
    }

    // Audio Source
    visitSource_osc(ctx){
        const id = ctx.ID().getText();
        const oscType = ctx.OSC_TYPE().getText();

        let effectChainString = "";
        if (ctx.effect_chain() != null){
            effectChainString = ctx.effect_chain().getText();
        }

        this.scheduler.createOscSource(id, oscType, effectChainString)
    }

    visitSource_file(ctx){
        const id = ctx.ID().getText();
        let audioPath = ctx.STR().getText();
        audioPath = audioPath.slice(1, audioPath.length-1);

        let effectChainString = "";
        if (ctx.effect_chain() != null){
            effectChainString = ctx.effect_chain().getText();
        }

        this.scheduler.createFileSource(id, audioPath, effectChainString);
    }

    // Pattern
    visitPattern(ctx){
        const ids = ctx.ID();
        const patternId = ids[0].getText(), tabId= ids[1].getText(), sourceId = ids[2].getText();
        this.scheduler.createPattern(patternId, tabId, sourceId);
    }

    // Scheduler
    visitTrack_loop(ctx){
        const id = ctx.ID().getText();
        this.scheduler.createTrackLoop(id);
    }

    visitTrack_sequential(ctx){
        const ids = ctx.ID();
        this.scheduler.createSequentialLoop(ids);
    }
}

function build(input){
    const chars = new antlr4.InputStream(input);
    const lexer = new MusicCreatorLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MusicCreatorParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.init();
    
    // Visitor
    tree.accept(new Visitor());
}

export default build;