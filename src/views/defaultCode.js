const defaultCode = `Config : {
    bpm : 120,
    detail : 4,
}

Tablature tab1 : Melodic {E4.4, F4.4, G4.4, F4.4, E4.4, D4.4, C4.4, D4.4,}

Tablature tab2 : Rhythmic {--.- --.- --.- --.-}

Effect myReverb : Reverb {
    time: 0.1,
}

Source myOsc: Osc( Square ) {
    // delay -> myReverb
}

Source myKick : File("std/Shaker.wav") {
    delay -> reverb -> bitcrusher
}

Pattern myPattern: {tab1 -> myOsc}

Scheduler : {
    // Aqui puedes definir tus tracks, mediante patrones
    Loop myPattern,
    // Sequential myPattern, 
}
`

export default defaultCode;