const defaultCode = `// Aqui puedes definir la configuración de la ejecución
Config : {
    bpm : 120,
    detail : 4,
}

// Aqui puedes definir tus tablaturas, fuentes de sonido, efectos y patrones

Scheduler : {
    // Aqui puedes definir tus tracks, mediante patrones
}
`

const syntaxError = `Config : {
    bpm : 120,
    detail : 4,
}

// ❌ Error Sintactico: melodic debe empezar con mayuscula
Tablature myTablature : melodic {}

Scheduler : {
    // Aqui puedes definir tus tracks, mediante patrones
}`

const semanticError = `Config : {
    bpm : 120,
    detail : 4,
}

Tablature kickTab : Rhythmic {.---.---}

// ❌ Error Semantico: Se define un patron con una fuente de sonido <myKickSource> no creada
Pattern myKickPattern: {kickTab -> myKickSource}

Scheduler : {
    // ❌ Error Semantico: Se define una track con un patrón que no se creo, debido a un error
    Loop myKickPattern,
}`

const samples = `Config : {
    bpm : 89,
    detail : 4,
}

Tablature kickTab : Rhythmic {.--- -.--}
Tablature snareTab : Rhythmic {--.- --.-}
Tablature hiHatTab : Rhythmic {.... ...}

Tablature bassTab : Rhythmic {.-.. .-.-}

Tablature drumLoopTab : Rhythmic {.--- ----}

Source myKick : File("std/Kick.wav") {}
Source mySnare : File("std/Snare.wav"){}
Source myHiHat : File("std/Hihat.wav"){}

Source myBass : File("std/BassOneShot.wav"){}

Source myDrumLoop : File("std/DrumLoop.wav"){}

Source myChord : File("std/Chord.wav"){gain0_5}

Pattern myKickPattern: {kickTab -> myKick}
Pattern mySnarePattern: {snareTab -> mySnare}
Pattern myHiHatPattern: {hiHatTab -> myHiHat}

Pattern myBassPattern: {bassTab -> myBass}

Pattern myDrumLoopPattern: {drumLoopTab -> myDrumLoop}

Pattern myChordPattern : {bassTab -> myChord}

Scheduler : {
    Loop myKickPattern,
    Loop mySnarePattern,
    Loop myHiHatPattern,
    Loop myBassPattern,
    Loop myDrumLoopPattern,
    Loop myChordPattern,
}`

const melody = `Config : {
    bpm : 105, 
    detail : 4,
}

Tablature mainMelodyTab : Melodic { 
    C6.1, -.2, G5.1, -.2, E5.1, -.2, 
    A5.1, -.1, B5.1, -.1, A#5.1, A5.1, -.1,
    G5.1, -.1, E6.1, G6.1, A6.1, -.1, F6.1, G6.1,
    -.1, E6.1, -.1, C6.1, D6.1, B5.1, -.2,
    -.2, G6.1, F#6.1, F6.1, D#6.1, -.1, E6.1,
    -.1, G#5.1, A5.1, C6.1, -.1, A5.1, C6.1, D6.1,
    -.2, G6.1, F#6.1, F6.1, D#6.1, -.1, E6.1,
    -.1, F6.1, -.1, F6.1, F6.1, -.3,
}

Tablature supportMelodyTab : Melodic {
    E6.1, -.2, C5.1, -.2, G4.1, -.2, 
    C5.1, -.1, D5.1, -.1, C#5.1, C5.1, -.1,
    C5.1, -.1, G5.1, B5.1, C6.1, -.1, A5.1, B5.1,
    -.1, A5.1, -.1, E5.1, F5.1, D5.1, -.2,
    -.2, E6.1, D#6.1, D6.1, B5.1, -.1, C6.1,
    -.1, E5.1, F5.1, G5.1, -.2, E5.1, F5.1,
    -.2, E6.1, D#6.1, D6.1, B5.1, -.1, C6.1,
    -.1, C#6.1, -.1, C#6.1, C#6.1, -.3,
}

Tablature bassTab : Melodic {
    -.32,
    C3.1, -.2, G3.1, -.2, C4.1, -.1,
    F3.1, -.2, C4.1, C4.1, C4.1, F3.1, -.1,
    C3.1, -.2, E3.1, -.2, G3.1, C4.1,
    -.1, G4.1, -.1, G4.1, G4.1, -.1, G3.1, -.1,
}

Source mainMelody : Osc(Square){gain0_3}
Source supportMelody : Osc(Triangle){gain1_2}
Source bass : Osc(Sawtooth){gain0_8}

Pattern mainMelody : { mainMelodyTab -> mainMelody }
Pattern supportMelody : { supportMelodyTab -> supportMelody }
Pattern bass : { bassTab -> bass }

Scheduler : {    
    Loop mainMelody,
    Loop bass,
    Loop supportMelody,
}
`

const effect = `Config : {
    bpm : 80,
    detail : 4,
}

// ✅ Aqui se crea un nuevo efecto de tipo delay
Effect myEcho : Delay{
    feedback: 0.6,
    time: 0.1,
    mix: 0.5,
}

// ✅ Aqui se crea un nuevo efecto de tipo reverb
Effect myReverb : Reverb{
    time: 0.5,
    decay: 0.5,
    reverse: false,
    mix: 0.9,
}

Tablature percTab : Rhythmic {.--- ---- ---- ----}

Source perc : File("std/Snare.wav"){
    // ✅ Aqui se encadena el efecto de delay creado
    myEcho 
    // y aqui el efecto de reverb
    -> myReverb
}

Pattern perc : { percTab -> perc }

Scheduler : {
    Loop perc,
}`

const examples = {
    'Error Sintáctico' : syntaxError,
    'Error Semántico' : semanticError,
    'Osciladores' : melody,
    'Archivos de Audio' : samples,
    'Efectos' : effect,
}

export {examples};
export default defaultCode;