# Music Programming Language 🎵

# To-do
- Config
- Melodic Tablature
- Rhythmic Tablature
- Creating Effects
- Bus: Oscillator
- Bus: File
- Pattern
- Scheduling
<br>

- Validar la compatibilidad entre patrones y sources
- Limpiar timeouts
- Desconectar nodos -> Validar con un visualizador de audioContext 

```
If you simply call audioNode.disconnect() with no parameters, it will disconnect all the inputs to the node as well as all the outputs from it.
https://stackoverflow.com/questions/47352775/what-is-the-best-way-to-destroy-an-audionode
```

# Documentation

## Contents
<ul>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#tablature">Tablature</a></li>
    <li><a href="#audio-effects">Audio Effects</a></li>
    <li><a href="#source">Audio Source</a></li>
</ul>

<br>

<h2 id="configuration">Configuration</h2>

```
Config {
    bpm := 120;
    detail := 4;
}
```

<h2 id="tablature">Tablature</h2>

### Melodic Tablature
```
Tablature <Name> : Melodic {A4.4, _.4, C#2.5, C#6.8}
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

### Pattern
```
Pattern <Name> {<TablatureName> -> <SourceName>}
```

### Scheduling
```
Scheduler{
    Loop <PatternName> ;
    Sequential <PatternName> -> <PatternName> -> <PatternName> ;
}
```

<style>
a{color: white;}
</style>