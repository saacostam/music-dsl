# Music Programming Language 🎵

# To-do
- Add Gain Effect
<br>

# Documentation

<br>

<h2 id="configuration">Configuration</h2>

```
Config : {
    bpm : 120,
    detail : 4,
}
```

<h2 id="tablature">Tablature</h2>

### Melodic Tablature
```
Tablature <Name> : Melodic {A4.4, -.4, C#2.5, C#6.8}
```

### Rhythmic Tablature
```
Tablature <Name> : Rhythmic {--.- --.- --.- --.-}
```

<h2 id="audio-effects">Audio Effects</h2>

```
Effect <Name> : <Type> {
    <Params>
}
```

<h2 id="source">Audio Source</h2>

### Oscillator
```
Source <Name> : Osc( <OscType> ) {
    delay -> reverb -> bitcrush
}
```

### File
```
Source <Name> : File("std/kick 1.mp3") {
    delay -> reverb -> bitcrush
}
```

<h2 id="pattern">Pattern</h2>


```
Pattern <Name> : {<TablatureName> -> <SourceName>}
```

<h2 id="scheduler">Scheduler</h2>


```
Scheduler : {
    Loop <PatternName> ,
    Loop <PatternName> ,
    Sequential <PatternName> -> <PatternName> -> <PatternName>,
}
```