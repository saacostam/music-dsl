// Generated from D:/Santiago/uni/viii/leng/coral-translator/grammar\MusicCreator.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MusicCreatorListener from './MusicCreatorListener.js';
import MusicCreatorVisitor from './MusicCreatorVisitor.js';

const serializedATN = [4,1,35,215,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,5,0,49,8,0,10,0,12,0,52,9,0,1,0,1,0,
1,1,1,1,1,1,1,1,3,1,60,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,3,2,75,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,
1,5,1,5,4,5,93,8,5,11,5,12,5,94,1,5,1,5,1,6,1,6,3,6,101,8,6,1,7,1,7,1,7,
1,8,1,8,1,8,1,8,5,8,110,8,8,10,8,12,8,113,9,8,1,9,1,9,3,9,117,8,9,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,4,11,129,8,11,11,11,12,11,130,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,4,13,142,8,13,11,13,12,13,143,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,5,15,157,8,15,10,
15,12,15,160,9,15,1,16,1,16,1,16,1,16,1,17,1,17,1,18,1,18,3,18,170,8,18,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,181,8,19,1,19,1,19,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,194,8,20,1,20,1,20,1,21,1,21,
1,21,5,21,201,8,21,10,21,12,21,204,9,21,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,0,1,1,0,31,33,207,0,46,1,0,0,0,2,59,1,0,0,0,4,61,1,0,0,0,
6,78,1,0,0,0,8,82,1,0,0,0,10,86,1,0,0,0,12,100,1,0,0,0,14,102,1,0,0,0,16,
105,1,0,0,0,18,116,1,0,0,0,20,118,1,0,0,0,22,128,1,0,0,0,24,132,1,0,0,0,
26,141,1,0,0,0,28,145,1,0,0,0,30,158,1,0,0,0,32,161,1,0,0,0,34,165,1,0,0,
0,36,169,1,0,0,0,38,171,1,0,0,0,40,184,1,0,0,0,42,197,1,0,0,0,44,205,1,0,
0,0,46,50,3,4,2,0,47,49,3,2,1,0,48,47,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,
0,50,51,1,0,0,0,51,53,1,0,0,0,52,50,1,0,0,0,53,54,3,10,5,0,54,1,1,0,0,0,
55,60,3,18,9,0,56,60,3,28,14,0,57,60,3,36,18,0,58,60,3,44,22,0,59,55,1,0,
0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,0,60,3,1,0,0,0,61,62,5,10,0,
0,62,63,5,5,0,0,63,74,5,1,0,0,64,65,3,6,3,0,65,66,5,7,0,0,66,67,3,8,4,0,
67,68,5,7,0,0,68,75,1,0,0,0,69,70,3,8,4,0,70,71,5,7,0,0,71,72,3,6,3,0,72,
73,5,7,0,0,73,75,1,0,0,0,74,64,1,0,0,0,74,69,1,0,0,0,75,76,1,0,0,0,76,77,
5,2,0,0,77,5,1,0,0,0,78,79,5,22,0,0,79,80,5,5,0,0,80,81,5,31,0,0,81,7,1,
0,0,0,82,83,5,23,0,0,83,84,5,5,0,0,84,85,5,31,0,0,85,9,1,0,0,0,86,87,5,19,
0,0,87,88,5,5,0,0,88,92,5,1,0,0,89,90,3,12,6,0,90,91,5,7,0,0,91,93,1,0,0,
0,92,89,1,0,0,0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,
96,97,5,2,0,0,97,11,1,0,0,0,98,101,3,14,7,0,99,101,3,16,8,0,100,98,1,0,0,
0,100,99,1,0,0,0,101,13,1,0,0,0,102,103,5,20,0,0,103,104,5,35,0,0,104,15,
1,0,0,0,105,106,5,21,0,0,106,111,5,35,0,0,107,108,5,9,0,0,108,110,5,35,0,
0,109,107,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,17,
1,0,0,0,113,111,1,0,0,0,114,117,3,20,10,0,115,117,3,24,12,0,116,114,1,0,
0,0,116,115,1,0,0,0,117,19,1,0,0,0,118,119,5,11,0,0,119,120,5,35,0,0,120,
121,5,5,0,0,121,122,5,12,0,0,122,123,5,1,0,0,123,124,3,22,11,0,124,125,5,
2,0,0,125,21,1,0,0,0,126,127,5,25,0,0,127,129,5,7,0,0,128,126,1,0,0,0,129,
130,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,23,1,0,0,0,132,133,5,11,
0,0,133,134,5,35,0,0,134,135,5,5,0,0,135,136,5,13,0,0,136,137,5,1,0,0,137,
138,3,26,13,0,138,139,5,2,0,0,139,25,1,0,0,0,140,142,5,26,0,0,141,140,1,
0,0,0,142,143,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,27,1,0,0,0,145,
146,5,14,0,0,146,147,5,35,0,0,147,148,5,5,0,0,148,149,5,27,0,0,149,150,5,
1,0,0,150,151,3,30,15,0,151,152,5,2,0,0,152,29,1,0,0,0,153,154,3,32,16,0,
154,155,5,7,0,0,155,157,1,0,0,0,156,153,1,0,0,0,157,160,1,0,0,0,158,156,
1,0,0,0,158,159,1,0,0,0,159,31,1,0,0,0,160,158,1,0,0,0,161,162,5,35,0,0,
162,163,5,5,0,0,163,164,3,34,17,0,164,33,1,0,0,0,165,166,7,0,0,0,166,35,
1,0,0,0,167,170,3,38,19,0,168,170,3,40,20,0,169,167,1,0,0,0,169,168,1,0,
0,0,170,37,1,0,0,0,171,172,5,15,0,0,172,173,5,35,0,0,173,174,5,5,0,0,174,
175,5,16,0,0,175,176,5,3,0,0,176,177,5,28,0,0,177,178,5,4,0,0,178,180,5,
1,0,0,179,181,3,42,21,0,180,179,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,
182,183,5,2,0,0,183,39,1,0,0,0,184,185,5,15,0,0,185,186,5,35,0,0,186,187,
5,5,0,0,187,188,5,17,0,0,188,189,5,3,0,0,189,190,5,34,0,0,190,191,5,4,0,
0,191,193,5,1,0,0,192,194,3,42,21,0,193,192,1,0,0,0,193,194,1,0,0,0,194,
195,1,0,0,0,195,196,5,2,0,0,196,41,1,0,0,0,197,202,5,35,0,0,198,199,5,9,
0,0,199,201,5,35,0,0,200,198,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,
203,1,0,0,0,203,43,1,0,0,0,204,202,1,0,0,0,205,206,5,18,0,0,206,207,5,35,
0,0,207,208,5,5,0,0,208,209,5,1,0,0,209,210,5,35,0,0,210,211,5,9,0,0,211,
212,5,35,0,0,212,213,5,2,0,0,213,45,1,0,0,0,14,50,59,74,94,100,111,116,130,
143,158,169,180,193,202];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MusicCreatorParser extends antlr4.Parser {

    static grammarFileName = "MusicCreator.g4";
    static literalNames = [ null, "'{'", "'}'", "'('", "')'", "':'", "'.'", 
                            "','", "'-'", "'->'", "'Config'", "'Tablature'", 
                            "'Melodic'", "'Rhythmic'", "'Effect'", "'Source'", 
                            "'Osc'", "'File'", "'Pattern'", "'Scheduler'", 
                            "'Loop'", "'Sequential'", "'bpm'", "'detail'" ];
    static symbolicNames = [ null, "OPENING_BRA", "CLOSING_BRA", "OPENING_PAR", 
                             "CLOSING_PAR", "ASSIGN", "POINT", "COMMA", 
                             "HYPHEN", "ARROW", "CONFIG", "TABLATURE", "MELODIC", 
                             "RHYTHMIC", "EFFECT", "SOURCE", "OSC", "FILE", 
                             "PATTERN", "SCHEDULER", "LOOP", "SEQUENTIAL", 
                             "BPM", "DETAIL", "NOTE_VALUE", "NOTE", "STROKE", 
                             "EFFECT_TYPE", "OSC_TYPE", "ESPACIO", "COMMENT", 
                             "INT_NUM", "FLOAT_NUM", "BOOLEAN", "STR", "ID" ];
    static ruleNames = [ "init", "command", "config", "bpm", "detail", "scheduler", 
                         "track", "track_loop", "track_sequential", "tablature", 
                         "tablature_melodic", "notes", "tablature_rhythmic", 
                         "strokes", "effect", "effect_params", "param", 
                         "param_value", "source", "source_osc", "source_file", 
                         "effect_chain", "pattern" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MusicCreatorParser.ruleNames;
        this.literalNames = MusicCreatorParser.literalNames;
        this.symbolicNames = MusicCreatorParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MusicCreatorParser.RULE_init);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.config();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MusicCreatorParser.TABLATURE) | (1 << MusicCreatorParser.EFFECT) | (1 << MusicCreatorParser.SOURCE) | (1 << MusicCreatorParser.PATTERN))) !== 0)) {
	            this.state = 47;
	            this.command();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
	        this.scheduler();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MusicCreatorParser.RULE_command);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MusicCreatorParser.TABLATURE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.tablature();
	            break;
	        case MusicCreatorParser.EFFECT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.effect();
	            break;
	        case MusicCreatorParser.SOURCE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
	            this.source();
	            break;
	        case MusicCreatorParser.PATTERN:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 58;
	            this.pattern();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	config() {
	    let localctx = new ConfigContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MusicCreatorParser.RULE_config);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(MusicCreatorParser.CONFIG);
	        this.state = 62;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 63;
	        this.match(MusicCreatorParser.OPENING_BRA);
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MusicCreatorParser.BPM:
	            this.state = 64;
	            this.bpm();
	            this.state = 65;
	            this.match(MusicCreatorParser.COMMA);
	            this.state = 66;
	            this.detail();
	            this.state = 67;
	            this.match(MusicCreatorParser.COMMA);
	            break;
	        case MusicCreatorParser.DETAIL:
	            this.state = 69;
	            this.detail();
	            this.state = 70;
	            this.match(MusicCreatorParser.COMMA);
	            this.state = 71;
	            this.bpm();
	            this.state = 72;
	            this.match(MusicCreatorParser.COMMA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 76;
	        this.match(MusicCreatorParser.CLOSING_BRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bpm() {
	    let localctx = new BpmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MusicCreatorParser.RULE_bpm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(MusicCreatorParser.BPM);
	        this.state = 79;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 80;
	        this.match(MusicCreatorParser.INT_NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	detail() {
	    let localctx = new DetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MusicCreatorParser.RULE_detail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(MusicCreatorParser.DETAIL);
	        this.state = 83;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 84;
	        this.match(MusicCreatorParser.INT_NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scheduler() {
	    let localctx = new SchedulerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MusicCreatorParser.RULE_scheduler);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(MusicCreatorParser.SCHEDULER);
	        this.state = 87;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 88;
	        this.match(MusicCreatorParser.OPENING_BRA);
	        this.state = 92; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 89;
	            this.track();
	            this.state = 90;
	            this.match(MusicCreatorParser.COMMA);
	            this.state = 94; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===MusicCreatorParser.LOOP || _la===MusicCreatorParser.SEQUENTIAL);
	        this.state = 96;
	        this.match(MusicCreatorParser.CLOSING_BRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	track() {
	    let localctx = new TrackContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MusicCreatorParser.RULE_track);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MusicCreatorParser.LOOP:
	            this.state = 98;
	            this.track_loop();
	            break;
	        case MusicCreatorParser.SEQUENTIAL:
	            this.state = 99;
	            this.track_sequential();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	track_loop() {
	    let localctx = new Track_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MusicCreatorParser.RULE_track_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(MusicCreatorParser.LOOP);
	        this.state = 103;
	        this.match(MusicCreatorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	track_sequential() {
	    let localctx = new Track_sequentialContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MusicCreatorParser.RULE_track_sequential);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(MusicCreatorParser.SEQUENTIAL);
	        this.state = 106;
	        this.match(MusicCreatorParser.ID);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MusicCreatorParser.ARROW) {
	            this.state = 107;
	            this.match(MusicCreatorParser.ARROW);
	            this.state = 108;
	            this.match(MusicCreatorParser.ID);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tablature() {
	    let localctx = new TablatureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MusicCreatorParser.RULE_tablature);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.tablature_melodic();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.tablature_rhythmic();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tablature_melodic() {
	    let localctx = new Tablature_melodicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MusicCreatorParser.RULE_tablature_melodic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(MusicCreatorParser.TABLATURE);
	        this.state = 119;
	        this.match(MusicCreatorParser.ID);
	        this.state = 120;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 121;
	        this.match(MusicCreatorParser.MELODIC);
	        this.state = 122;
	        this.match(MusicCreatorParser.OPENING_BRA);
	        this.state = 123;
	        this.notes();
	        this.state = 124;
	        this.match(MusicCreatorParser.CLOSING_BRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	notes() {
	    let localctx = new NotesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MusicCreatorParser.RULE_notes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 126;
	            this.match(MusicCreatorParser.NOTE);
	            this.state = 127;
	            this.match(MusicCreatorParser.COMMA);
	            this.state = 130; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===MusicCreatorParser.NOTE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tablature_rhythmic() {
	    let localctx = new Tablature_rhythmicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MusicCreatorParser.RULE_tablature_rhythmic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(MusicCreatorParser.TABLATURE);
	        this.state = 133;
	        this.match(MusicCreatorParser.ID);
	        this.state = 134;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 135;
	        this.match(MusicCreatorParser.RHYTHMIC);
	        this.state = 136;
	        this.match(MusicCreatorParser.OPENING_BRA);
	        this.state = 137;
	        this.strokes();
	        this.state = 138;
	        this.match(MusicCreatorParser.CLOSING_BRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	strokes() {
	    let localctx = new StrokesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MusicCreatorParser.RULE_strokes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 140;
	            this.match(MusicCreatorParser.STROKE);
	            this.state = 143; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===MusicCreatorParser.STROKE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	effect() {
	    let localctx = new EffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MusicCreatorParser.RULE_effect);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(MusicCreatorParser.EFFECT);
	        this.state = 146;
	        this.match(MusicCreatorParser.ID);
	        this.state = 147;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 148;
	        this.match(MusicCreatorParser.EFFECT_TYPE);
	        this.state = 149;
	        this.match(MusicCreatorParser.OPENING_BRA);
	        this.state = 150;
	        this.effect_params();
	        this.state = 151;
	        this.match(MusicCreatorParser.CLOSING_BRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	effect_params() {
	    let localctx = new Effect_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MusicCreatorParser.RULE_effect_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MusicCreatorParser.ID) {
	            this.state = 153;
	            this.param();
	            this.state = 154;
	            this.match(MusicCreatorParser.COMMA);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MusicCreatorParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(MusicCreatorParser.ID);
	        this.state = 162;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 163;
	        this.param_value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param_value() {
	    let localctx = new Param_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MusicCreatorParser.RULE_param_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (MusicCreatorParser.INT_NUM - 31)) | (1 << (MusicCreatorParser.FLOAT_NUM - 31)) | (1 << (MusicCreatorParser.BOOLEAN - 31)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	source() {
	    let localctx = new SourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MusicCreatorParser.RULE_source);
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.source_osc();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
	            this.source_file();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	source_osc() {
	    let localctx = new Source_oscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MusicCreatorParser.RULE_source_osc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(MusicCreatorParser.SOURCE);
	        this.state = 172;
	        this.match(MusicCreatorParser.ID);
	        this.state = 173;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 174;
	        this.match(MusicCreatorParser.OSC);
	        this.state = 175;
	        this.match(MusicCreatorParser.OPENING_PAR);
	        this.state = 176;
	        this.match(MusicCreatorParser.OSC_TYPE);
	        this.state = 177;
	        this.match(MusicCreatorParser.CLOSING_PAR);
	        this.state = 178;
	        this.match(MusicCreatorParser.OPENING_BRA);
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MusicCreatorParser.ID) {
	            this.state = 179;
	            this.effect_chain();
	        }

	        this.state = 182;
	        this.match(MusicCreatorParser.CLOSING_BRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	source_file() {
	    let localctx = new Source_fileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MusicCreatorParser.RULE_source_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(MusicCreatorParser.SOURCE);
	        this.state = 185;
	        this.match(MusicCreatorParser.ID);
	        this.state = 186;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 187;
	        this.match(MusicCreatorParser.FILE);
	        this.state = 188;
	        this.match(MusicCreatorParser.OPENING_PAR);
	        this.state = 189;
	        this.match(MusicCreatorParser.STR);
	        this.state = 190;
	        this.match(MusicCreatorParser.CLOSING_PAR);
	        this.state = 191;
	        this.match(MusicCreatorParser.OPENING_BRA);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MusicCreatorParser.ID) {
	            this.state = 192;
	            this.effect_chain();
	        }

	        this.state = 195;
	        this.match(MusicCreatorParser.CLOSING_BRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	effect_chain() {
	    let localctx = new Effect_chainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MusicCreatorParser.RULE_effect_chain);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(MusicCreatorParser.ID);
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MusicCreatorParser.ARROW) {
	            this.state = 198;
	            this.match(MusicCreatorParser.ARROW);
	            this.state = 199;
	            this.match(MusicCreatorParser.ID);
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pattern() {
	    let localctx = new PatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MusicCreatorParser.RULE_pattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(MusicCreatorParser.PATTERN);
	        this.state = 206;
	        this.match(MusicCreatorParser.ID);
	        this.state = 207;
	        this.match(MusicCreatorParser.ASSIGN);
	        this.state = 208;
	        this.match(MusicCreatorParser.OPENING_BRA);
	        this.state = 209;
	        this.match(MusicCreatorParser.ID);
	        this.state = 210;
	        this.match(MusicCreatorParser.ARROW);
	        this.state = 211;
	        this.match(MusicCreatorParser.ID);
	        this.state = 212;
	        this.match(MusicCreatorParser.CLOSING_BRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MusicCreatorParser.EOF = antlr4.Token.EOF;
MusicCreatorParser.OPENING_BRA = 1;
MusicCreatorParser.CLOSING_BRA = 2;
MusicCreatorParser.OPENING_PAR = 3;
MusicCreatorParser.CLOSING_PAR = 4;
MusicCreatorParser.ASSIGN = 5;
MusicCreatorParser.POINT = 6;
MusicCreatorParser.COMMA = 7;
MusicCreatorParser.HYPHEN = 8;
MusicCreatorParser.ARROW = 9;
MusicCreatorParser.CONFIG = 10;
MusicCreatorParser.TABLATURE = 11;
MusicCreatorParser.MELODIC = 12;
MusicCreatorParser.RHYTHMIC = 13;
MusicCreatorParser.EFFECT = 14;
MusicCreatorParser.SOURCE = 15;
MusicCreatorParser.OSC = 16;
MusicCreatorParser.FILE = 17;
MusicCreatorParser.PATTERN = 18;
MusicCreatorParser.SCHEDULER = 19;
MusicCreatorParser.LOOP = 20;
MusicCreatorParser.SEQUENTIAL = 21;
MusicCreatorParser.BPM = 22;
MusicCreatorParser.DETAIL = 23;
MusicCreatorParser.NOTE_VALUE = 24;
MusicCreatorParser.NOTE = 25;
MusicCreatorParser.STROKE = 26;
MusicCreatorParser.EFFECT_TYPE = 27;
MusicCreatorParser.OSC_TYPE = 28;
MusicCreatorParser.ESPACIO = 29;
MusicCreatorParser.COMMENT = 30;
MusicCreatorParser.INT_NUM = 31;
MusicCreatorParser.FLOAT_NUM = 32;
MusicCreatorParser.BOOLEAN = 33;
MusicCreatorParser.STR = 34;
MusicCreatorParser.ID = 35;

MusicCreatorParser.RULE_init = 0;
MusicCreatorParser.RULE_command = 1;
MusicCreatorParser.RULE_config = 2;
MusicCreatorParser.RULE_bpm = 3;
MusicCreatorParser.RULE_detail = 4;
MusicCreatorParser.RULE_scheduler = 5;
MusicCreatorParser.RULE_track = 6;
MusicCreatorParser.RULE_track_loop = 7;
MusicCreatorParser.RULE_track_sequential = 8;
MusicCreatorParser.RULE_tablature = 9;
MusicCreatorParser.RULE_tablature_melodic = 10;
MusicCreatorParser.RULE_notes = 11;
MusicCreatorParser.RULE_tablature_rhythmic = 12;
MusicCreatorParser.RULE_strokes = 13;
MusicCreatorParser.RULE_effect = 14;
MusicCreatorParser.RULE_effect_params = 15;
MusicCreatorParser.RULE_param = 16;
MusicCreatorParser.RULE_param_value = 17;
MusicCreatorParser.RULE_source = 18;
MusicCreatorParser.RULE_source_osc = 19;
MusicCreatorParser.RULE_source_file = 20;
MusicCreatorParser.RULE_effect_chain = 21;
MusicCreatorParser.RULE_pattern = 22;

class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_init;
    }

	config() {
	    return this.getTypedRuleContext(ConfigContext,0);
	};

	scheduler() {
	    return this.getTypedRuleContext(SchedulerContext,0);
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_command;
    }

	tablature() {
	    return this.getTypedRuleContext(TablatureContext,0);
	};

	effect() {
	    return this.getTypedRuleContext(EffectContext,0);
	};

	source() {
	    return this.getTypedRuleContext(SourceContext,0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitCommand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConfigContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_config;
    }

	CONFIG() {
	    return this.getToken(MusicCreatorParser.CONFIG, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	OPENING_BRA() {
	    return this.getToken(MusicCreatorParser.OPENING_BRA, 0);
	};

	CLOSING_BRA() {
	    return this.getToken(MusicCreatorParser.CLOSING_BRA, 0);
	};

	bpm() {
	    return this.getTypedRuleContext(BpmContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.COMMA);
	    } else {
	        return this.getToken(MusicCreatorParser.COMMA, i);
	    }
	};


	detail() {
	    return this.getTypedRuleContext(DetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterConfig(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitConfig(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitConfig(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BpmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_bpm;
    }

	BPM() {
	    return this.getToken(MusicCreatorParser.BPM, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	INT_NUM() {
	    return this.getToken(MusicCreatorParser.INT_NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterBpm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitBpm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitBpm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_detail;
    }

	DETAIL() {
	    return this.getToken(MusicCreatorParser.DETAIL, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	INT_NUM() {
	    return this.getToken(MusicCreatorParser.INT_NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitDetail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SchedulerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_scheduler;
    }

	SCHEDULER() {
	    return this.getToken(MusicCreatorParser.SCHEDULER, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	OPENING_BRA() {
	    return this.getToken(MusicCreatorParser.OPENING_BRA, 0);
	};

	CLOSING_BRA() {
	    return this.getToken(MusicCreatorParser.CLOSING_BRA, 0);
	};

	track = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TrackContext);
	    } else {
	        return this.getTypedRuleContext(TrackContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.COMMA);
	    } else {
	        return this.getToken(MusicCreatorParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterScheduler(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitScheduler(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitScheduler(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TrackContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_track;
    }

	track_loop() {
	    return this.getTypedRuleContext(Track_loopContext,0);
	};

	track_sequential() {
	    return this.getTypedRuleContext(Track_sequentialContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterTrack(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitTrack(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitTrack(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Track_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_track_loop;
    }

	LOOP() {
	    return this.getToken(MusicCreatorParser.LOOP, 0);
	};

	ID() {
	    return this.getToken(MusicCreatorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterTrack_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitTrack_loop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitTrack_loop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Track_sequentialContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_track_sequential;
    }

	SEQUENTIAL() {
	    return this.getToken(MusicCreatorParser.SEQUENTIAL, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.ID);
	    } else {
	        return this.getToken(MusicCreatorParser.ID, i);
	    }
	};


	ARROW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.ARROW);
	    } else {
	        return this.getToken(MusicCreatorParser.ARROW, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterTrack_sequential(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitTrack_sequential(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitTrack_sequential(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TablatureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_tablature;
    }

	tablature_melodic() {
	    return this.getTypedRuleContext(Tablature_melodicContext,0);
	};

	tablature_rhythmic() {
	    return this.getTypedRuleContext(Tablature_rhythmicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterTablature(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitTablature(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitTablature(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tablature_melodicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_tablature_melodic;
    }

	TABLATURE() {
	    return this.getToken(MusicCreatorParser.TABLATURE, 0);
	};

	ID() {
	    return this.getToken(MusicCreatorParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	MELODIC() {
	    return this.getToken(MusicCreatorParser.MELODIC, 0);
	};

	OPENING_BRA() {
	    return this.getToken(MusicCreatorParser.OPENING_BRA, 0);
	};

	notes() {
	    return this.getTypedRuleContext(NotesContext,0);
	};

	CLOSING_BRA() {
	    return this.getToken(MusicCreatorParser.CLOSING_BRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterTablature_melodic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitTablature_melodic(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitTablature_melodic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NotesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_notes;
    }

	NOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.NOTE);
	    } else {
	        return this.getToken(MusicCreatorParser.NOTE, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.COMMA);
	    } else {
	        return this.getToken(MusicCreatorParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterNotes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitNotes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitNotes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tablature_rhythmicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_tablature_rhythmic;
    }

	TABLATURE() {
	    return this.getToken(MusicCreatorParser.TABLATURE, 0);
	};

	ID() {
	    return this.getToken(MusicCreatorParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	RHYTHMIC() {
	    return this.getToken(MusicCreatorParser.RHYTHMIC, 0);
	};

	OPENING_BRA() {
	    return this.getToken(MusicCreatorParser.OPENING_BRA, 0);
	};

	strokes() {
	    return this.getTypedRuleContext(StrokesContext,0);
	};

	CLOSING_BRA() {
	    return this.getToken(MusicCreatorParser.CLOSING_BRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterTablature_rhythmic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitTablature_rhythmic(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitTablature_rhythmic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StrokesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_strokes;
    }

	STROKE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.STROKE);
	    } else {
	        return this.getToken(MusicCreatorParser.STROKE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterStrokes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitStrokes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitStrokes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_effect;
    }

	EFFECT() {
	    return this.getToken(MusicCreatorParser.EFFECT, 0);
	};

	ID() {
	    return this.getToken(MusicCreatorParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	EFFECT_TYPE() {
	    return this.getToken(MusicCreatorParser.EFFECT_TYPE, 0);
	};

	OPENING_BRA() {
	    return this.getToken(MusicCreatorParser.OPENING_BRA, 0);
	};

	effect_params() {
	    return this.getTypedRuleContext(Effect_paramsContext,0);
	};

	CLOSING_BRA() {
	    return this.getToken(MusicCreatorParser.CLOSING_BRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Effect_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_effect_params;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.COMMA);
	    } else {
	        return this.getToken(MusicCreatorParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterEffect_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitEffect_params(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitEffect_params(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_param;
    }

	ID() {
	    return this.getToken(MusicCreatorParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	param_value() {
	    return this.getTypedRuleContext(Param_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Param_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_param_value;
    }

	INT_NUM() {
	    return this.getToken(MusicCreatorParser.INT_NUM, 0);
	};

	FLOAT_NUM() {
	    return this.getToken(MusicCreatorParser.FLOAT_NUM, 0);
	};

	BOOLEAN() {
	    return this.getToken(MusicCreatorParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterParam_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitParam_value(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitParam_value(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_source;
    }

	source_osc() {
	    return this.getTypedRuleContext(Source_oscContext,0);
	};

	source_file() {
	    return this.getTypedRuleContext(Source_fileContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterSource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitSource(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitSource(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Source_oscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_source_osc;
    }

	SOURCE() {
	    return this.getToken(MusicCreatorParser.SOURCE, 0);
	};

	ID() {
	    return this.getToken(MusicCreatorParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	OSC() {
	    return this.getToken(MusicCreatorParser.OSC, 0);
	};

	OPENING_PAR() {
	    return this.getToken(MusicCreatorParser.OPENING_PAR, 0);
	};

	OSC_TYPE() {
	    return this.getToken(MusicCreatorParser.OSC_TYPE, 0);
	};

	CLOSING_PAR() {
	    return this.getToken(MusicCreatorParser.CLOSING_PAR, 0);
	};

	OPENING_BRA() {
	    return this.getToken(MusicCreatorParser.OPENING_BRA, 0);
	};

	CLOSING_BRA() {
	    return this.getToken(MusicCreatorParser.CLOSING_BRA, 0);
	};

	effect_chain() {
	    return this.getTypedRuleContext(Effect_chainContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterSource_osc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitSource_osc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitSource_osc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Source_fileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_source_file;
    }

	SOURCE() {
	    return this.getToken(MusicCreatorParser.SOURCE, 0);
	};

	ID() {
	    return this.getToken(MusicCreatorParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	FILE() {
	    return this.getToken(MusicCreatorParser.FILE, 0);
	};

	OPENING_PAR() {
	    return this.getToken(MusicCreatorParser.OPENING_PAR, 0);
	};

	STR() {
	    return this.getToken(MusicCreatorParser.STR, 0);
	};

	CLOSING_PAR() {
	    return this.getToken(MusicCreatorParser.CLOSING_PAR, 0);
	};

	OPENING_BRA() {
	    return this.getToken(MusicCreatorParser.OPENING_BRA, 0);
	};

	CLOSING_BRA() {
	    return this.getToken(MusicCreatorParser.CLOSING_BRA, 0);
	};

	effect_chain() {
	    return this.getTypedRuleContext(Effect_chainContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterSource_file(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitSource_file(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitSource_file(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Effect_chainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_effect_chain;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.ID);
	    } else {
	        return this.getToken(MusicCreatorParser.ID, i);
	    }
	};


	ARROW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.ARROW);
	    } else {
	        return this.getToken(MusicCreatorParser.ARROW, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterEffect_chain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitEffect_chain(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitEffect_chain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MusicCreatorParser.RULE_pattern;
    }

	PATTERN() {
	    return this.getToken(MusicCreatorParser.PATTERN, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MusicCreatorParser.ID);
	    } else {
	        return this.getToken(MusicCreatorParser.ID, i);
	    }
	};


	ASSIGN() {
	    return this.getToken(MusicCreatorParser.ASSIGN, 0);
	};

	OPENING_BRA() {
	    return this.getToken(MusicCreatorParser.OPENING_BRA, 0);
	};

	ARROW() {
	    return this.getToken(MusicCreatorParser.ARROW, 0);
	};

	CLOSING_BRA() {
	    return this.getToken(MusicCreatorParser.CLOSING_BRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.enterPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MusicCreatorListener ) {
	        listener.exitPattern(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MusicCreatorVisitor ) {
	        return visitor.visitPattern(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MusicCreatorParser.InitContext = InitContext; 
MusicCreatorParser.CommandContext = CommandContext; 
MusicCreatorParser.ConfigContext = ConfigContext; 
MusicCreatorParser.BpmContext = BpmContext; 
MusicCreatorParser.DetailContext = DetailContext; 
MusicCreatorParser.SchedulerContext = SchedulerContext; 
MusicCreatorParser.TrackContext = TrackContext; 
MusicCreatorParser.Track_loopContext = Track_loopContext; 
MusicCreatorParser.Track_sequentialContext = Track_sequentialContext; 
MusicCreatorParser.TablatureContext = TablatureContext; 
MusicCreatorParser.Tablature_melodicContext = Tablature_melodicContext; 
MusicCreatorParser.NotesContext = NotesContext; 
MusicCreatorParser.Tablature_rhythmicContext = Tablature_rhythmicContext; 
MusicCreatorParser.StrokesContext = StrokesContext; 
MusicCreatorParser.EffectContext = EffectContext; 
MusicCreatorParser.Effect_paramsContext = Effect_paramsContext; 
MusicCreatorParser.ParamContext = ParamContext; 
MusicCreatorParser.Param_valueContext = Param_valueContext; 
MusicCreatorParser.SourceContext = SourceContext; 
MusicCreatorParser.Source_oscContext = Source_oscContext; 
MusicCreatorParser.Source_fileContext = Source_fileContext; 
MusicCreatorParser.Effect_chainContext = Effect_chainContext; 
MusicCreatorParser.PatternContext = PatternContext; 
