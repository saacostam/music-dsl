class Pattern{
    constructor(tablature, source){
        const errorMessage = "Incompatible <tablature> and <source> in pattern definition";
        
        if (tablature.constructor.name === "MelodicTablature"){
            // Melodic Pair
            if (source.constructor.name !== "SourceOsc"){
                console.error( errorMessage );
                return;
            }
        }else if (tablature.constructor.name === "RhythmicTablature"){
            // Rhythmic Pair
            if (source.constructor.name !== "SourceFile"){
                console.error( errorMessage );
                return;
            }
        }

        this.tablature = tablature;
        this.source = source;
    }    

    play(timeOuts){
        const tablature = [].concat( this.tablature.getNotes() );
        this.source.play(tablature, timeOuts);
    }
}

export default Pattern;