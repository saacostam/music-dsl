<template>
    <div id="documentation" class="container">
        
        <h1 id="tunecode" style="font-size: 4rem;"><span style="color: #007bff">TUNE</span>CODE</h1>

        <p>TuneCode es un lenguaje de programación web para la creación de música, orientado a personas con experiencia en el uso de software dedicado a la producción musical (DAW: Digital Audio Workstations). </p>
        <p>Usando conceptos análogos a los DAW&#39;s, TuneCode permite la reproducción de melodías mediante osciladores básicos, el agendamiento de samples y la aplicación de efectos sobre dichas fuentes de sonido.</p>
        <p>A continuación se provee la documentación básica del lenguaje, en donde se explica en detalle cada una de las primitivas del lenguaje.</p>
        <p>Si ya conoces el lenguaje, puedes acceder al editor web <a href="https://saacostam.github.io/music-dsl/#/" target="_blank">aquí</a>.</p>
        
        <h1 id="documentation" class="mt-5 mb-5">Documentación</h1>
        <h2 id="program-structure">Estructura de un Programa</h2>

        <p>En todo código escrito en este lenguaje, se deben declarar obligatoriamente los bloques de Config y Scheduler, así: </p>
        <pre><code>Config : {
    bpm : &lt;tempo&gt;,
    detail : &lt;detailNum&gt;,
}

Scheduler : {
    // Aqui van patrones en loop o secuenciales
}
        </code></pre>
        <p>En el bloque Config, se deben especificar 2 campos:</p>
        <ul>
        <li>bpm: Indica el tempo al que se reproducirá la pieza musical. Se debe reemplazar <code>bpm</code> por un entero mayor que 0.</li>
        <li>detail: Esto pertenece a una funcionalidad que no ha sido implementada, sin embargo, se debe igualmente declarar.  Se debe reemplazar <code>detailNum</code> por un entero mayor que 0.</li>
        </ul>
        <p>En el bloque Scheduler, se deben especificar los patrones a reproducir. Su declaración y los patrones se explicarán más adelante.</p>

        <h2 id="tablature">Tablatura</h2>

        <p>Las tablaturas se utilizan para definir lo que deben reproducir los instrumentos (o fuentes de sonido) en la composición. Pueden especificar segmentos melódicos o rítmicos, por lo cual se manejan dos tipos de tablaturas, descritos a continuación.</p>
        <h3 id="tablatura-melódica">Tablatura Melódica</h3>
        <p>Estas tablaturas se usan para declarar segmentos melódicos de la pieza musical que se reproducen al ejecutar el programa. Estos se declaran especificando las notas musicales junto con el duración de la reproducción de cada una, de esta manera:</p>
        <pre><code>Tablature &lt;Name&gt; : Melodic { &lt;note&gt;.&lt;t&gt;, &lt;note&gt;.&lt;t&gt;, &lt;note&gt;.&lt;t&gt;, &lt;note&gt;.&lt;t&gt;,}
        </code></pre>
        <ul>
        <li>Se debe reemplazar <code>Name</code> por el nombre que recibirá la tablatura.</li>
        <li>Dentro de los corchetes “{}”, separadas por comas, se deben escribir las notas de la tablatura, las cuales se reproducirán posteriormente una tras otra. Estas notas tienen el siguiente formato: <code>note</code>.<code>t</code>, reemplazando <code>note</code> por el nombre de la nota en inglés, las cuales van desde C0 hasta C8, especificando igualmente si son sostenidas o no, escribiendo “#” al lado de la nota, y reemplazando <code>t</code> por el tiempo que durará la nota reproduciendo, el cual debe ser un entero positivo mayor que 0.</li>
        <li>Los silencios se representan por medio de un guión “-”.</li>
        </ul>
        <h4>Ejemplo</h4>

        <pre><code>Tablature myMelodicPattern : Melodic {A4.4, -.4, C#2.5, C#6.8}
        </code></pre>
        <h3 id="tablatura-rítmica">Tablatura Rítmica</h3>
        <p>Estas tablaturas se usan para declarar segmentos rítmicos de la pieza musical que se reproducen al ejecutar el programa. Estos se declaran especificando la serie de golpes y silencios a reproducir. Así:</p>
        <pre><code>Tablature &lt;Name&gt; : Rhythmic {&lt;rhythm&gt;}
</code></pre>
        <ul>
        <li>Se debe reemplazar <code>Name</code> por el nombre que recibirá la tablatura.
        Se debe reemplazar <code>rhythm</code> por una serie de golpes y silencios. </li>
        <li>Los golpes se representan por medio de un punto “.” y los silencios por medio de un guión “-”.</li>
        </ul>
        <h4>Ejemplo</h4>

        <pre><code>Tablature myRhythmicTab : Rhythmic {--.- --.- --.- --.-}
        </code></pre>
        <p>Se pueden incluir espacios entre la serie de golpes y silencios para mayor organización. De esta manera, el ejemplo anterior es equivalente a este:</p>
        <pre><code>Tablature myRhythmicTab : Rhythmic {--.---.---.---.-}
        </code></pre>
        <h2 id="audio-effects">Efectos</h2>

        <p>Es posible declarar efectos de sonido, los cuales modulan las fuentes de sonido, dando nuevas características sonoras a las mismas. Estos se declaran así:</p>
        <pre><code>Effect &lt;Name&gt; : &lt;Type&gt; {
    &lt;Params&gt;
}
        </code></pre>
        <ul>
        <li>Se debe reemplazar <code>Name</code> por el nombre que recibirá el efecto</li>
        <li>Se debe reemplazar <code>Type</code> por alguno de los tipos de efectos que se pueden declarar dentro del lenguaje. Los distintos tipos de efectos se enlistan a continuación:<ul>
        <li>Delay</li>
        <li>Distortion</li>
        <li>LowpassFilter</li>
        <li>BitCrusher</li>
        <li>PingPongDelay</li>
        <li>WahWah</li>
        <li>Tremolo</li>
        <li>Reverb</li>
        <li>Flanger</li>
        <li>Gain</li>
        </ul>
        </li>
        <li>Dentro de los corchetes “{}”, se debe reemplazar <code>Params</code>, por una serie de parejas <code>clave:valor</code>, separadas por comas, en donde cada pareja describe un parámetro del efecto. Los nombres y valores de cada parámetro dependen del tipo de efecto que se esté declarando.</li>
        </ul>
        <p>Al iniciar la ejecución de un programa,  se definen algunos efectos con parámetros por defecto, que se pueden utilizar para realizar pruebas rápidas. Dichos efectos se identifican con el nombre del tipo de efecto en minúscula.</p>
        <h2 id="source">Fuentes</h2>

        <p>Las fuentes de sonido son las que generan los sonidos para interpretar las tablaturas. Existen 2 tipos, las fuentes de osciladores, que se usan con tablaturas melódicas, y las fuentes de archivo, que se usan con las tablaturas rítmicas. Estas se definen así:</p>
        <h3 id="fuente-de-oscilador">Fuente de Oscilador</h3>
        <pre><code>Source &lt;Name&gt; : Osc( &lt;OscType&gt; ) {
    &lt;effectName&gt; -&gt; &lt;effectName&gt; -&gt; &lt;effectName&gt;
}
        </code></pre>
        <ul>
        <li>Se debe reemplazar <code>Name</code> por el nombre que recibirá la fuente.</li>
        <li>Se debe reemplazar <code>OscType</code> por el nombre del tipo de oscilador a usar. Este puede ser:<ul>
        <li>Sine</li>
        <li>Square</li>
        <li>Triangle</li>
        <li>Sawtooth.</li>
        </ul>
        </li>
        <li>Dentro de los corchetes “{}”, se debe poner la cadena de efectos previamente creados. Cada efecto debe estar separado por una flecha <code>-&gt;</code>.</li>
        </ul>
        <h4>Ejemplo</h4>

        <pre><code>Source source1 : Osc( Square ) {
    delay -&gt; reverb -&gt; bitcrush
}
        </code></pre>
        <h3 id="fuente-de-archivo">Fuente de Archivo</h3>
        <pre><code>Source &lt;Name&gt; : File( &lt;FilePath&gt; ) {
    &lt;effectName&gt; -&gt;  &lt;effectName&gt; -&gt;  &lt;effectName&gt;
}
        </code></pre>
        <ul>
        <li>Se debe reemplazar <code>Name</code> por el nombre que recibirá la fuente.</li>
        <li>Se debe reemplazar <code>FilePath</code> por la dirección del archivo a usar. Se incluye una librería estándar con samples de elementos percusivos (kick, snare, hi hat, etc.), que se puede consultar en la parte izquierda del editor web.</li>
        <li>Dentro de los corchetes “{}”, se debe poner la cadena de efectos, previamente creados. Cada efecto debe estar separado por una flecha <code>-&gt;</code>.</li>
        </ul>
        <h4>Ejemplo</h4>

        <pre><code>Source myKick : File (“std/Kick.wav”){
    delay -&gt; reverb -&gt; lowpassfilter
}
        </code></pre>
        <h2 id="pattern">Patrones</h2>

        <p>Un patrón es una pareja de una tablatura y una fuente. Los patrones creados serán los que se podrán reproducir en el Scheduler. Estos se declaran así:</p>
        <pre><code>Pattern &lt;Name&gt; : {&lt;TablatureName&gt; -&gt; &lt;SourceName&gt;}
        </code></pre>
        <ul>
        <li>Se debe reemplazar <code>Name</code> por el nombre que recibirá el patrón
        Se debe reemplazar <code>TablatureName</code> por el nombre de una tablatura previamente creada.</li>
        <li>Se debe reemplazar <code>SourceName</code> por el nombre de una fuente previamente creada.</li>
        <li>Es importante tener en cuenta que a la hora de declarar un patrón, si la tablatura usada es melódica, la fuente asociada debe ser una con oscilador, y si la tablatura es rítmica, la fuente asociada debe ser una de archivo. Cualquier otra combinación resultará en un error a la hora de ejecutar el código</li>
        </ul>
        <h4>Ejemplo</h4>

        <pre><code>Pattern patron1 : {myMelodicTab -&gt; oscSource}
Pattern patron2 : {myRhythmicTab -&gt; fileSource}
        </code></pre>
        <h2 id="scheduler">Scheduler</h2>

        <p>El scheduler se encarga del agendamiento de patrones. En este sentido, es donde se define la estructura y orden de la canción. La reproducción de patrones se puede realizar en dos modos: </p>
        <ul>
        <li><strong>Loop:</strong> En este modo, un único patrón se reproduce en bucle de forma indefinida. Es útil para agendar patrones que sean constantes durante toda la composición  y no presenten variaciones en el tiempo como, por ejemplo, elementos percusivos. </li>
        <li><strong>Sequential:</strong> Este modo permite definir una secuencia de patrones y el orden en que estos se reproducen. Son especialmente útiles para detallar partes variantes de la canción como, por ejemplo, la transición entre un verso y un coro.</li>
        </ul>
        <p>El Scheduler se declara así:</p>
        <pre><code>Scheduler : {
    Loop &lt;PatternName&gt;,
    Sequential &lt;PatternName&gt; -&gt; &lt;PatternName&gt; -&gt; &lt;PatternName&gt;,
}
        </code></pre>
        <ul>
        <li>Para declarar la reproducción de un patrón en forma de Loop, se debe declarar así “Loop <code>PatternName</code>”, reemplazando <code>PatternName</code> por el nombre del patrón, previamente creado, a reproducir.</li>
        <li>Para declarar la reproducción de una secuencia de patrones, se debe incluir la palabra reservada “Sequential” seguida de los identificadores de los patrones, separados por una flecha <code>-&gt;</code>, de la siguiente manera: <ul>
        <li>Es importante notar que el orden importa, puesto que los elementos que se definan más a la izquierda, se reproducen primero.

            <pre class="m-2"><code>Sequential &lt;PatternName&gt; -&gt; &lt;PatternName&gt; -&gt; &lt;PatternName&gt;</code></pre>
        </li>
        </ul>
        </li>
        <li>Dentro de los corchetes “{}”, se pueden declarar varias reproducciones, ya sean de tipo Loop o Sequential, teniendo en cuenta de separar cada una con una coma.</li>
        </ul>
        <h4>Ejemplo</h4>

        <pre><code>Scheduler : {
    Loop ritmo1 ,
    Loop ritmo2 ,
    Sequential intro -&gt; verso -&gt; coro,
}
        </code></pre>


    </div>
</template>

<script>
export default{
    name: 'documentation',
}
</script>

<style scoped>
#documentation{
    color: white;
}
h2{
    margin: 2rem 0;
}

pre{
    color: white;
    background-color: #141414;
    padding: 1rem;
    border: 1px solid #007bff;
}

code{
    color: #46a0ff;
}
</style>