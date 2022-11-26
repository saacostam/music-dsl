const defaultCode = `Config : {
    bpm : 120,
    detail : 4,
}

Scheduler : {
    // Aqui puedes definir tus tracks, mediante patrones
    Loop myPattern,
}
`

const example2 = `
Config : {
    bpm : 90,
    detail : 4,
}

Tablature kickTab : Rhythmic {.---.---}
Tablature snareTab : Rhythmic {----.---}
Tablature hiHatTab : Rhythmic {--.- --.-}
Tablature shakerTab : Rhythmic {..-.. .-.}

Source myKick : File("std/Kick.wav") {}
Source mySnare : File("std/Snare.wav"){}
Source myHiHat : File("std/Hihat.wav"){}
Source myShaker : File("std/Shaker.wav"){}

Pattern myKickPattern: {kickTab -> myKick}
Pattern mySnarePattern: {snareTab -> mySnare}
Pattern myHiHatPattern: {hiHatTab -> myHiHat}
Pattern myShakerPattern: {shakerTab -> myShaker}

Scheduler : {
    // Aqui puedes definir tus tracks, mediante patrones
    Loop myKickPattern,
    Loop mySnarePattern,
    Loop myHiHatPattern,
    Loop myShakerPattern,
}
`

const example3 = `
Config : {bpm : 100, detail : 4,}

Tablature topNotes : Melodic { G3.8, D3.8, E3.8, D3.8, }
Tablature midNotes : Melodic { B4.8, F#4.8, G4.8, F#4.8, }
Tablature lowNotes : Melodic { D3.8, A3.8, B3.8, A3.8, }

Tablature counterMelody : Melodic { 
    E6.2, E6.2, F6.2, G6.2,
    G6.2, F6.2, E6.2, D6.2,
    C6.2, C6.2, D6.2, E6.2,
    E6.2, D6.2, D6.2, -.2,
}

Source topNotes : Osc( Sawtooth ){ reverb -> pingPongDelay -> lowpassfilter }
Source midNotes : Osc( Sawtooth ){ reverb -> pingPongDelay -> lowpassfilter }
Source lowNotes : Osc( Sawtooth ){ reverb -> pingPongDelay -> lowpassfilter }

Source counterMelody : Osc( Sine ){  distortion -> reverb -> pingPongDelay }

Pattern topMelodicPattern : {topNotes -> topNotes}
Pattern midMelodicPattern : {midNotes -> midNotes}
Pattern lowMelodicPattern : {lowNotes -> lowNotes}

Pattern counterMelody : { counterMelody -> counterMelody }

Scheduler : {    
    Loop topMelodicPattern,
    Loop midMelodicPattern,
    Loop lowMelodicPattern,
    Loop counterMelody,
}
`

const example4 = `
Config : {bpm : 135, detail : 4,}

Tablature topNotes : Melodic { B3.16, G3.16, D3.16, C#3.16, B3.16, G3.16, D3.16, C#3.16, }
Tablature midNotes : Melodic { D4.16, C4.16, F4.16, F4.16, D4.16, C4.16, F4.16, F4.16, }
Tablature lowNotes : Melodic { F#3.16, E3.16, A3.16, A3.16, F#3.16, E3.16, A3.16, A3.16, }

Tablature counterMelody : Melodic { 
    D5.2, E5.4, F#5.4, D5.4,
    D5.2, G5.4, G5.4, F#5.8,

    D5.2, E5.4, F#5.4, D5.4,
    D5.2, C#5.4, C#5.4, D5.8,

    D5.2, E5.4, F#5.4, D5.4,
    F#5.2, G5.2, A5.2, F#5.4, F#5.8,

    D5.2, E5.4, F#5.4, D5.4,
    D5.2, C#5.4, C#5.4, D5.8,
}

Source topNotes : Osc( Sawtooth ){ reverb -> pingPongDelay -> lowpassfilter }
Source midNotes : Osc( Sawtooth ){ reverb -> pingPongDelay -> lowpassfilter }
Source lowNotes : Osc( Sawtooth ){ reverb -> pingPongDelay -> lowpassfilter }

Source counterMelody : Osc( Square ){ distortion -> pingPongDelay }

Pattern topMelodicPattern : {topNotes -> topNotes}
Pattern midMelodicPattern : {midNotes -> midNotes}
Pattern lowMelodicPattern : {lowNotes -> lowNotes}

Pattern counterMelody : { counterMelody -> counterMelody }

Scheduler : {    
    Loop topMelodicPattern,
    // Loop midMelodicPattern,
    // Loop lowMelodicPattern,
    Loop counterMelody,
}

`

export default example2;