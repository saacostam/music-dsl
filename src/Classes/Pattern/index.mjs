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

        // Calculo de la longitud :: utilizado para el agendamiento de los patrones
        if (this.tablature.constructor.name === "MelodicTablature"){
            let sm = 1;

            for (const i in this.tablature.notes){
                sm += this.tablature.notes[i].length;
            }

            this.length = sm;
        }else{
            // RhythmicTablature
            this.length = this.tablature.notes.length;
        }
    }    

    play(timeOuts){
        const tablature = [].concat( this.tablature.getNotes() );
        this.source.play(tablature, timeOuts);
    }
}

export default Pattern;