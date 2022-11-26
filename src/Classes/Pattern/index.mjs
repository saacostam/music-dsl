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
        }else{
            console.error( "Tablature was not provided!" );
            return;
        }
        
        this.tablature = tablature;
        this.source = source;

        this.currentTab = 0;
    }    

    playNext(playTime){
        const tab = this.tablature.notes[ this.currentTab ];

        this.currentTab = ( this.currentTab + 1 )%this.tablature.notes.length;
        return this.source.play( tab, playTime );
    }
}

export default Pattern;