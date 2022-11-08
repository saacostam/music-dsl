class Pattern{
    constructor(tablature, source){
        this.tablature = tablature;
        this.source = source;
    }    

    play(timeOuts){
        const tablature = [].concat( this.tablature.getNotes() );
        this.source.play(tablature, timeOuts);
    }
}

export default Pattern;