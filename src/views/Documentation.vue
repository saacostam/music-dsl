<template>
  <div id="documentation" class="container">
    <h1 id="tunecode" style="font-size: 4rem; text-align: center; margin: 2rem">
      <span style="color: #007bff">TUNE</span>CODE
    </h1>

    <p>
      TuneCode is a web programming language for music creation, aimed at people
      with experience in using music production software (DAW: Digital Audio
      Workstations).
    </p>
    <p>
      Using concepts analogous to DAWs, TuneCode allows the reproduction of
      melodies using basic oscillators, the scheduling of samples, and the
      application of effects on these sound sources.
    </p>
    <p>
      Below is the basic documentation of the language, which explains in detail
      each of the language's primitives.
    </p>
    <p>
      If you are already familiar with the language, you can access the web
      editor
      <a href="https://saacostam.github.io/music-dsl/#/" target="_blank">here</a
      >.
    </p>

    <h1 id="documentation" class="mt-5 mb-5">Documentation</h1>
    <h2 id="program-structure">Program Structure</h2>

    <p>
      In all code written in this language, the Config and Scheduler blocks must
      be declared, as follows:
    </p>
    <pre><code>Config : {
    bpm : &lt;tempo&gt;,
    detail : &lt;detailNum&gt;,
}

Scheduler : {
    // Loop or sequential patterns go here
}
        </code></pre>
    <p>In the Config block, 2 fields must be specified:</p>
    <ul>
      <li>
        bpm: Indicates the tempo at which the musical piece will be played.
        <code>bpm</code> must be replaced by an integer greater than 0.
      </li>
      <li>
        detail: This belongs to a functionality that has not been implemented,
        however, it must still be declared. <code>detailNum</code> must be
        replaced by an integer greater than 0.
      </li>
    </ul>
    <p>
      In the Scheduler block, the patterns to be played must be specified. Their
      declaration and the patterns themselves will be explained later.
    </p>

    <h2 id="tablature">Tablature</h2>

    <p>
      Tablatures are used to define what instruments (or sound sources) should
      play in the composition. They can specify melodic or rhythmic segments,
      which is why two types of tablatures are handled, described below.
    </p>
    <h3 id="melodic-tablature">Melodic Tablature</h3>
    <p>
      These tablatures are used to declare melodic segments of the musical piece
      that are played when the program is executed. These are declared by
      specifying the musical notes along with the duration of each, in this way:
    </p>
    <pre><code>Tablature &lt;Name&gt; : Melodic { &lt;note&gt;.&lt;t&gt;, &lt;note&gt;.&lt;t&gt;, &lt;note&gt;.&lt;t&gt;, &lt;note&gt;.&lt;t&gt;,}
        </code></pre>
    <ul>
      <li>
        <code>Name</code> must be replaced by the name the tablature will
        receive.
      </li>
      <li>
        Inside the brackets "{}", separated by commas, the notes of the
        tablature must be written, which will then be played one after another.
        These notes have the following format: <code>note</code>.<code>t</code>,
        replacing <code>note</code> with the name of the note in English, which
        range from C0 to C8, also specifying whether they are sharp or not, by
        writing "#" next to the note, and replacing <code>t</code> with the
        duration of the note playing, which must be a positive integer greater
        than 0.
      </li>
      <li>Silences are represented by a hyphen "-".</li>
    </ul>
    <h4>Example</h4>

    <pre><code>Tablature myMelodicPattern : Melodic {A4.4, -.4, C#2.5, C#6.8}
        </code></pre>
    <h3 id="rhythmic-tablature">Rhythmic Tablature</h3>
    <p>
      These tablatures are used to declare rhythmic segments of the musical
      piece that are played when the program is executed. These are declared by
      specifying the series of beats and silences to be played. As follows:
    </p>
    <pre><code>Tablature &lt;Name&gt; : Rhythmic {&lt;rhythm&gt;}
</code></pre>
    <ul>
      <li>
        <code>Name</code> must be replaced by the name the tablature will
        receive.
      </li>
      <li>
        <code>rhythm</code> must be replaced by a series of beats and silences.
      </li>
      <li>Beats are represented by a dot "." and silences by a hyphen "-".</li>
    </ul>
    <h4>Example</h4>

    <pre><code>Tablature myRhythmicTab : Rhythmic {--.- --.- --.- --.-}
        </code></pre>
    <p>
      Spaces can be included between the series of beats and silences for better
      organization. In this way, the previous example is equivalent to this:
    </p>
    <pre><code>Tablature myRhythmicTab : Rhythmic {--.---.---.---.-}
        </code></pre>
    <h2 id="audio-effects">Effects</h2>

    <p>
      It is possible to declare sound effects, which modulate the sound sources,
      giving them new sonic characteristics. These are declared as follows:
    </p>
    <pre><code>Effect &lt;Name&gt; : &lt;Type&gt; {
    &lt;Params&gt;
}
        </code></pre>
    <ul>
      <li>
        <code>Name</code> must be replaced by the name the effect will receive.
      </li>
      <li>
        <code>Type</code> must be replaced by one of the types of effects that
        can be declared within the language. The different types of effects are
        listed below:
        <ul>
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
      <li>
        Inside the brackets "{}", <code>Params</code> must be replaced by a
        series of <code>key:value</code> pairs, separated by commas, where each
        pair describes a parameter of the effect. The names and values of each
        parameter depend on the type of effect being declared.
      </li>
    </ul>
    <p>
      When a program starts executing, some effects with default parameters are
      defined, which can be used for quick tests. These effects are identified
      by the lowercase name of the effect type.
    </p>
    <h2 id="source">Sources</h2>

    <p>
      Sound sources are what generate sounds to interpret tablatures. There are
      2 types: oscillator sources, which are used with melodic tablatures, and
      file sources, which are used with rhythmic tablatures. These are defined
      as follows:
    </p>
    <h3 id="oscillator-source">Oscillator Source</h3>
    <pre><code>Source &lt;Name&gt; : Osc( &lt;OscType&gt; ) {
    &lt;effectName&gt; -&gt; &lt;effectName&gt; -&gt; &lt;effectName&gt;
}
        </code></pre>
    <ul>
      <li>
        <code>Name</code> must be replaced by the name the source will receive.
      </li>
      <li>
        <code>OscType</code> must be replaced by the name of the oscillator type
        to be used. This can be:
        <ul>
          <li>Sine</li>
          <li>Square</li>
          <li>Triangle</li>
          <li>Sawtooth.</li>
        </ul>
      </li>
      <li>
        Inside the brackets "{}", the chain of previously created effects must
        be placed. Each effect must be separated by an arrow <code>-></code>.
      </li>
    </ul>
    <h4>Example</h4>

    <pre><code>Source source1 : Osc( Square ) {
    delay -&gt; reverb -&gt; bitcrush
}
        </code></pre>
    <h3 id="file-source">File Source</h3>
    <pre><code>Source &lt;Name&gt; : File( &lt;FilePath&gt; ) {
    &lt;effectName&gt; -&gt;  &lt;effectName&gt; -&gt;  &lt;effectName&gt;
}
        </code></pre>
    <ul>
      <li>
        <code>Name</code> must be replaced by the name the source will receive.
      </li>
      <li>
        <code>FilePath</code> must be replaced by the path to the file to be
        used. A standard library with samples of percussive elements (kick,
        snare, hi hat, etc.) is included, which can be consulted on the left
        side of the web editor.
      </li>
      <li>
        Inside the brackets "{}", the chain of previously created effects must
        be placed. Each effect must be separated by an arrow <code>-></code>.
      </li>
    </ul>
    <h4>Example</h4>

    <pre><code>Source myKick : File (“std/Kick.wav”){
    delay -&gt; reverb -&gt; lowpassfilter
}
        </code></pre>
    <h2 id="pattern">Patterns</h2>

    <p>
      A pattern is a pair of a tablature and a source. The created patterns will
      be those that can be played in the Scheduler. These are declared as
      follows:
    </p>
    <pre><code>Pattern &lt;Name&gt; : {&lt;TablatureName&gt; -&gt; &lt;SourceName&gt;}
        </code></pre>
    <ul>
      <li>
        <code>Name</code> must be replaced by the name the pattern will receive.
      </li>
      <li>
        <code>TablatureName</code> must be replaced by the name of a previously
        created tablature.
      </li>
      <li>
        <code>SourceName</code> must be replaced by the name of a previously
        created source.
      </li>
      <li>
        It is important to note that when declaring a pattern, if the tablature
        used is melodic, the associated source must be an oscillator source, and
        if the tablature is rhythmic, the associated source must be a file
        source. Any other combination will result in an error when executing the
        code.
      </li>
    </ul>
    <h4>Example</h4>

    <pre><code>Pattern pattern1 : {myMelodicTab -&gt; oscSource}
Pattern pattern2 : {myRhythmicTab -&gt; fileSource}
        </code></pre>
    <h2 id="scheduler">Scheduler</h2>

    <p>
      The scheduler is responsible for pattern scheduling. In this sense, it is
      where the structure and order of the song are defined. Pattern
      reproduction can be performed in two modes:
    </p>
    <ul>
      <li>
        <strong>Loop:</strong> In this mode, a single pattern is played in a
        loop indefinitely. It is useful for scheduling patterns that are
        constant throughout the composition and do not present variations over
        time, such as percussive elements.
      </li>
      <li>
        <strong>Sequential:</strong> This mode allows defining a sequence of
        patterns and the order in which they are played. They are especially
        useful for detailing variant parts of the song, such as the transition
        between a verse and a chorus.
      </li>
    </ul>
    <p>The Scheduler is declared as follows:</p>
    <pre><code>Scheduler : {
    Loop &lt;PatternName&gt;,
    Sequential &lt;PatternName&gt; -&gt; &lt;PatternName&gt; -&gt; &lt;PatternName&gt;,
}
        </code></pre>
    <ul>
      <li>
        To declare the reproduction of a pattern in Loop mode, it must be
        declared as "Loop <code>PatternName</code>", replacing
        <code>PatternName</code> with the name of the previously created pattern
        to be played.
      </li>
      <li>
        To declare the reproduction of a sequence of patterns, the reserved word
        "Sequential" must be included, followed by the pattern identifiers,
        separated by an arrow <code>-></code>, as follows:
        <ul>
          <li>
            It is important to note that the order matters, since the elements
            defined further to the left are played first.

            <pre
              class="m-2"
            ><code>Sequential &lt;PatternName&gt; -&gt; &lt;PatternName&gt; -&gt; &lt;PatternName&gt;</code></pre>
          </li>
        </ul>
      </li>
      <li>
        Inside the brackets "{}", several reproductions can be declared, either
        of type Loop or Sequential, taking into account separating each one with
        a comma.
      </li>
    </ul>
    <h4>Example</h4>

    <pre><code>Scheduler : {
    Loop rhythm1 ,
    Loop rhythm2 ,
    Sequential intro -&gt; verse -&gt; chorus,
}
        </code></pre>
  </div>
</template>

<script>
export default {
  name: "documentation",
};
</script>

<style scoped>
#documentation {
  color: white;
}
h2 {
  margin: 2rem 0;
}

pre {
  color: white;
  background-color: #141414;
  padding: 1rem;
  border: 1px solid #007bff;
}

code {
  color: #a3cfff;
}
</style>
