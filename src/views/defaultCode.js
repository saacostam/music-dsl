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

const example1 = `
Config : {
    bpm : 128,
    detail : 4,
}

Tablature kickTab : Rhythmic {.---.---}
Tablature snareTab : Rhythmic {----.---}
Tablature hiHatTab : Rhythmic {--.- --.-}
Tablature shakerTab : Rhythmic {..-.. .-.}

Tablature melodicTab : Melodic {C5.1, D#5.1 }

Source myKick : File("std/Kick.wav") {}
Source mySnare : File("std/Snare.wav"){}
Source myHiHat : File("std/Hihat.wav"){}
Source myShaker : File("std/Shaker.wav"){}

Source mySrc : Osc( Square ){ reverb -> delay -> highpassfilter }

Pattern myKickPattern: {kickTab -> myKick}
Pattern mySnarePattern: {snareTab -> mySnare}
Pattern myHiHatPattern: {hiHatTab -> myHiHat}
Pattern myShakerPattern: {shakerTab -> myShaker}

Pattern myMelodicPattern {melodicTab -> mySrc}

Scheduler : {
    // Aqui puedes definir tus tracks, mediante patrones
    Loop myKickPattern,
    Loop mySnarePattern,
    Loop myHiHatPattern,
    Loop myShakerPattern,
    
    Loop myMelodicPattern,
}
`

const example2 = `
Config : {
    bpm : 128,
    detail : 4,
}

Tablature kickTab : Rhythmic {.---.---}
Tablature snareTab : Rhythmic {----.---}
Tablature hiHatTab : Rhythmic {--.- --.-}
Tablature shakerTab : Rhythmic {..-.. .-.}

Tablature topNotes : Melodic { C5.1, }
Tablature midNotes : Melodic { A4.1, }
Tablature lowNotes : Melodic { F4.1, }

Source myKick : File("std/Kick.wav") {}
Source mySnare : File("std/Snare.wav"){}
Source myHiHat : File("std/Hihat.wav"){}
Source myShaker : File("std/Shaker.wav"){}

Source topNotes : Osc( Square ){ reverb -> delay -> highpassfilter }
Source midNotes : Osc( Square ){ reverb -> delay -> highpassfilter }
Source lowNotes : Osc( Square ){ reverb -> delay -> highpassfilter }

Pattern myKickPattern: {kickTab -> myKick}
Pattern mySnarePattern: {snareTab -> mySnare}
Pattern myHiHatPattern: {hiHatTab -> myHiHat}
Pattern myShakerPattern: {shakerTab -> myShaker}

Pattern topMelodicPattern : {topNotes -> topNotes}
Pattern midMelodicPattern : {midNotes -> midNotes}
Pattern lowMelodicPattern : {lowNotes -> lowNotes}

Scheduler : {
    // Aqui puedes definir tus tracks, mediante patrones
    Loop myKickPattern,
    Loop mySnarePattern,
    Loop myHiHatPattern,
    // Loop myShakerPattern,
    
    Loop topMelodicPattern,
    Loop midMelodicPattern,
    Loop lowMelodicPattern,
}
`

export default defaultCode;