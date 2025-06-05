import keyToFreqMapping from "./keyToFreq.js";

class MelodicTablature {
  constructor() {
    // Arreglo de notas :: Corresponden con la frecuencia y a la longitud
    // {freq: 880, length: 4}
    this.notes = [];
  }

  setNotes(newNotes) {
    this.notes = newNotes;
  }

  parseNotes(notesString) {
    this.notes = [];

    const notesPairs = notesString.split(",");

    for (let i = 0; i < notesPairs.length - 1; i++) {
      const pair = notesPairs[i].split(".");

      const freq = keyToFreqMapping[pair[0]];
      const length = parseInt(pair[1], 10);

      this.notes.push({ freq, length });
    }
  }

  getNotes() {
    return this.notes;
  }
}

class RhythmicTablature {
  constructor() {
    // Arreglo de notas :: Corresponden con valores booleanos representando
    // si se reproduce el sonido o no (en dicha iteración)
    this.notes = [];
  }

  setNotes(newNotes) {
    if (typeof newNotes === "string") {
      let temp = [];

      for (let i = 0; i < newNotes.length; i++) {
        if (newNotes[i] === ".") {
          temp.push(true);
        } else if (newNotes[i] === "-") {
          temp.push(false);
        } else {
          console.error(
            "Invalid characters on Rhythmic Tablature definition: expected <.> or <->"
          );
          return;
        }
      }

      newNotes = temp;
    }

    this.notes = newNotes;
  }

  getNotes() {
    return this.notes;
  }
}

export { MelodicTablature, RhythmicTablature };
