# <span style="color: #007bff">TUNE</span>CODE

TuneCode es un lenguaje de programación web para la creación de música, orientado a personas con experiencia en el uso de software dedicado a la producción musical (DAW: Digital Audio Workstations). 

Usando conceptos análogos a los DAW's, TuneCode permite la reproducción de melodías mediante osciladores básicos, el agendamiento de samples y la aplicación de efectos sobre dichas fuentes de sonido.

A continuación se provee la documentación básica del lenguaje, en donde se explica en detalle cada una de las primitivas del lenguaje.

Si ya conoces el lenguaje, puedes acceder al editor web <a href="https://saacostam.github.io/music-dsl/#/" target="_blank">aquí</a>.

# Documentación

<h2 id="program-structure">Estructura de un Programa</h2>

En todo código escrito en este lenguaje, se deben declarar obligatoriamente los bloques de Config y Scheduler, así: 

```
Config : {
	bpm : <tempo>,
	detail : <detailNum>,
}

Scheduler : {
	// Aqui van patrones en loop o secuenciales
}
```

En el bloque Config, se deben especificar 2 campos:
- bpm: Indica el tempo al que se reproducirá la pieza musical. Se debe reemplazar ```bpm``` por un entero mayor que 0.
- detail: Esto pertenece a una funcionalidad que no ha sido implementada, sin embargo, se debe igualmente declarar.  Se debe reemplazar ```detailNum``` por un entero mayor que 0.

En el bloque Scheduler, se deben especificar los patrones a reproducir. Su declaración y los patrones se explicarán más adelante.

<hr>

<h2 id="tablature">Tablatura</h2>

Las tablaturas se utilizan para definir lo que deben reproducir los instrumentos (o fuentes de sonido) en la composición. Pueden especificar segmentos melódicos o rítmicos, por lo cual se manejan dos tipos de tablaturas, descritos a continuación.

### Tablatura Melódica
Estas tablaturas se usan para declarar segmentos melódicos de la pieza musical que se reproducen al ejecutar el programa. Estos se declaran especificando las notas musicales junto con el duración de la reproducción de cada una, de esta manera:

```
Tablature <Name> : Melodic { <note>.<t>, <note>.<t>, <note>.<t>, <note>.<t>,}
```

- Se debe reemplazar ```Name``` por el nombre que recibirá la tablatura.
- Dentro de los corchetes “{}”, separadas por comas, se deben escribir las notas de la tablatura, las cuales se reproducirán posteriormente una tras otra. Estas notas tienen el siguiente formato: ```note```.```t```, reemplazando ```note``` por el nombre de la nota en inglés, las cuales van desde C0 hasta C8, especificando igualmente si son sostenidas o no, escribiendo “#” al lado de la nota, y reemplazando ```t``` por el tiempo que durará la nota reproduciendo, el cual debe ser un entero positivo mayor que 0.
- Los silencios se representan por medio de un guión “-”.

<h4>Ejemplo</h4>

```
Tablature myMelodicPattern : Melodic {A4.4, -.4, C#2.5, C#6.8}
```

### Tablatura Rítmica

Estas tablaturas se usan para declarar segmentos rítmicos de la pieza musical que se reproducen al ejecutar el programa. Estos se declaran especificando la serie de golpes y silencios a reproducir. Así:

```
Tablature <Name> : Rhythmic {<rhythm>}
```

- Se debe reemplazar ```Name``` por el nombre que recibirá la tablatura.
Se debe reemplazar ```rhythm``` por una serie de golpes y silencios. 
- Los golpes se representan por medio de un punto “.” y los silencios por medio de un guión “-”.

<h4>Ejemplo</h4>

```
Tablature myRhythmicTab : Rhythmic {--.- --.- --.- --.-}
```

Se pueden incluir espacios entre la serie de golpes y silencios para mayor organización. De esta manera, el ejemplo anterior es equivalente a este:

```
Tablature myRhythmicTab : Rhythmic {--.---.---.---.-}
```

<h2 id="audio-effects">Efectos</h2>

Es posible declarar efectos de sonido, los cuales modulan las fuentes de sonido, dando nuevas características sonoras a las mismas. Estos se declaran así:

```
Effect <Name> : <Type> {
    <Params>
}
```

- Se debe reemplazar ```Name``` por el nombre que recibirá el efecto
- Se debe reemplazar ```Type``` por alguno de los tipos de efectos que se pueden declarar dentro del lenguaje. Los distintos tipos de efectos se enlistan a continuación:
    - Delay
    - Distortion
    - LowpassFilter
    - BitCrusher
    - PingPongDelay
    - WahWah
    - Tremolo
    - Reverb
    - Flanger
    - Gain
- Dentro de los corchetes “{}”, se debe reemplazar ```Params```, por una serie de parejas ```clave:valor```, separadas por comas, en donde cada pareja describe un parámetro del efecto. Los nombres y valores de cada parámetro dependen del tipo de efecto que se esté declarando.

Al iniciar la ejecución de un programa,  se definen algunos efectos con parámetros por defecto, que se pueden utilizar para realizar pruebas rápidas. Dichos efectos se identifican con el nombre del tipo de efecto en minúscula.

<h2 id="source">Fuentes</h2>

Las fuentes de sonido son las que generan los sonidos para interpretar las tablaturas. Existen 2 tipos, las fuentes de osciladores, que se usan con tablaturas melódicas, y las fuentes de archivo, que se usan con las tablaturas rítmicas. Estas se definen así:

### Fuente de Oscilador

```
Source <Name> : Osc( <OscType> ) {
    <effectName> -> <effectName> -> <effectName>
}
```

- Se debe reemplazar ```Name``` por el nombre que recibirá la fuente.
- Se debe reemplazar ```OscType``` por el nombre del tipo de oscilador a usar. Este puede ser:
    - Sine
    - Square
    - Triangle
    - Sawtooth.
- Dentro de los corchetes “{}”, se debe poner la cadena de efectos previamente creados. Cada efecto debe estar separado por una flecha ```->```.

<h4>Ejemplo</h4>

```
Source source1 : Osc( Square ) {
    delay -> reverb -> bitcrush
}
```

### Fuente de Archivo
```
Source <Name> : File( <FilePath> ) {
     <effectName> ->  <effectName> ->  <effectName>
}
```

- Se debe reemplazar ```Name``` por el nombre que recibirá la fuente.
- Se debe reemplazar ```FilePath``` por la dirección del archivo a usar. Se incluye una librería estándar con samples de elementos percusivos (kick, snare, hi hat, etc.), que se puede consultar en la parte izquierda del editor web.
- Dentro de los corchetes “{}”, se debe poner la cadena de efectos, previamente creados. Cada efecto debe estar separado por una flecha ```->```.

<h4>Ejemplo</h4>

```
Source myKick : File (“std/Kick.wav”){
    delay -> reverb -> lowpassfilter
}
```

<h2 id="pattern">Patrones</h2>

Un patrón es una pareja de una tablatura y una fuente. Los patrones creados serán los que se podrán reproducir en el Scheduler. Estos se declaran así:

```
Pattern <Name> : {<TablatureName> -> <SourceName>}
```
- Se debe reemplazar ```Name``` por el nombre que recibirá el patrón
Se debe reemplazar ```TablatureName``` por el nombre de una tablatura previamente creada.
- Se debe reemplazar ```SourceName``` por el nombre de una fuente previamente creada.
- Es importante tener en cuenta que a la hora de declarar un patrón, si la tablatura usada es melódica, la fuente asociada debe ser una con oscilador, y si la tablatura es rítmica, la fuente asociada debe ser una de archivo. Cualquier otra combinación resultará en un error a la hora de ejecutar el código

<h4>Ejemplo</h4>

```
Pattern patron1 : {myMelodicTab -> oscSource}
Pattern patron2 : {myRhythmicTab -> fileSource}
```

<h2 id="scheduler">Scheduler</h2>

El scheduler se encarga del agendamiento de patrones. En este sentido, es donde se define la estructura y orden de la canción. La reproducción de patrones se puede realizar en dos modos: 

- **Loop:** En este modo, un único patrón se reproduce en bucle de forma indefinida. Es útil para agendar patrones que sean constantes durante toda la composición  y no presenten variaciones en el tiempo como, por ejemplo, elementos percusivos. 
- **Sequential:** Este modo permite definir una secuencia de patrones y el orden en que estos se reproducen. Son especialmente útiles para detallar partes variantes de la canción como, por ejemplo, la transición entre un verso y un coro.

El Scheduler se declara así:

```
Scheduler : {
	Loop <PatternName>,
	Sequential <PatternName> -> <PatternName> -> <PatternName>,
}
```

- Para declarar la reproducción de un patrón en forma de Loop, se debe declarar así “Loop ```PatternName```”, reemplazando ```PatternName``` por el nombre del patrón, previamente creado, a reproducir.
- Para declarar la reproducción de una secuencia de patrones, se debe incluir la palabra reservada “Sequential” seguida de los identificadores de los patrones, separados por una flecha ```->```, de la siguiente manera: 
    - Es importante notar que el orden importa, puesto que los elementos que se definan más a la izquierda, se reproducen primero.
```
Sequential <PatternName> -> <PatternName> -> <PatternName>
```
- Dentro de los corchetes “{}”, se pueden declarar varias reproducciones, ya sean de tipo Loop o Sequential, teniendo en cuenta de separar cada una con una coma.

<h4>Ejemplo</h4>

```
Scheduler : {
    Loop ritmo1 ,
    Loop ritmo2 ,
    Sequential intro -> verso -> coro,
}
```