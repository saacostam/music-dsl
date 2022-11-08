class MelodicTablature{
    constructor(){
        // Arreglo de notas :: Corresponden con la frecuencia y a la longitud
        // {freq: 880, length: 4}
        this.notes = [];
    }

    setNotes(newNotes){
        this.notes = newNotes;
    }

    getNotes(){
        return this.notes;
    }
}

class RhythmicTablature{
    constructor(){
        // Arreglo de notas :: Corresponden con valores booleanos representando
        // si se reproduce el sonido o no (en dicha iteración)
        this.notes = [];
    }

    setNotes(newNotes){
        if (typeof newNotes === "string"){
            newNotes = newNotes.replaceAll(" ", "");
            let temp = [];

            for (const i in newNotes){
                if (newNotes[i] === "."){
                    temp.push( true );
                }else if (newNotes[i] === "_"){
                    temp.push( false );
                }else{
                    console.error("Invalid characters on Rhythmic Tablature definition: expected <.> or <_>");
                    return;
                }
            }

            newNotes = temp;
        }

        this.notes = newNotes
    }

    getNotes(){
        return this.notes;
    }
}

export {MelodicTablature, RhythmicTablature};