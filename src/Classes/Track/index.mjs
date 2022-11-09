class TrackLoop{
    constructor(pattern, config){
        this.pattern = pattern;
        this.config = config;

        this.gridDetail = 4;
    }

    play(timeOuts){
        const length = this.pattern.length;
        this.pattern.play(timeOuts);

        const delta = (60 / this.config.bpm)/this.gridDetail;
        const nextCall = delta*length*1000;

        const newTimeout = window.setTimeout( this.play.bind(this, timeOuts), nextCall);
        timeOuts.push(newTimeout);
    }
}

class TrackSequential{
    constructor(patterns, config){
        this.patterns = patterns;
        this.currentPattern = 0;
        this.config = config;

        this.gridDetail = 4;
    }

    play(timeOuts){
        const pattern = this.patterns[this.currentPattern];
        this.currentPattern = (this.currentPattern + 1) % this.patterns.length;

        const length = pattern.length;
        pattern.play(timeOuts);

        const delta = (60 / this.config.bpm)/this.gridDetail;
        const nextCall = delta*length*1000;

        const newTimeout = window.setTimeout( this.play.bind(this, timeOuts), nextCall);
        timeOuts.push(newTimeout);
    }
}

export {TrackLoop, TrackSequential}