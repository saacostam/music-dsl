<template>
  <div id="home">
    <div id="ui">
      <div id="audio-play" class="mb-2">
        <canvas height="200" id="visualizer"></canvas>
  
      </div>
      <button @click="toggleRun" class="btn btn-primary d-block mx-auto w-100 mb-2">
        <img v-if="this.playing" src="icons/pause-fill.svg">
        <img v-else src="icons/play-fill.svg" >
      </button>

      <div class="tab">
        <h6 class="m-1">Library</h6>
      </div>
      <div id="preview">
        <button class="play-file" v-for="audioFile in this.audioFiles" @click="previewAudio(audioFile)">{{audioFile}}</button>
      </div>
    </div>

    <div id="workspace">
      <div class="tab">
        <h6 class="m-1">Editor</h6>
        
        <div class="drop show" id="load-examples">
          <a class=" dropdown-toggle" href="#" role="button" id="load-examples-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Load Examples</a>

          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="load-examples-toggle">
            <span class="dropdown-item" v-for="value, key, index in this.examples" @click="loadCode(value)">{{key}}</span>
          </div>
        </div>
      </div>
      <MonacoEditor id="monaco-editor"
        theme="vs-dark"
        :options="{fontSize: 13}"
        :diffEditor="false"
        v-model:value="code"
        ref="editor"
        language = 'go'
        :key="key"
      ></MonacoEditor>

      <div id="console">
        <div class="tab">
          <h6>Console</h6>
          <button id="console-toggle" @click="this.toggleConsole">
            <img v-if="this.consoleVisible" src="icons/chevron-down.svg">
            <img v-else src="icons/chevron-up.svg" >
          </button>
        </div>
        <div id="console-error" :class="{'visible':this.consoleVisible}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Scheduler from '@/Classes/Scheduler/index.mjs';
import run from '@/grammar/visitor.js';
import MonacoEditor from 'monaco-editor-vue3';
import defaultCode from './defaultCode.js';
import audioFiles from '@/Classes/AudioContextDelivery/audioFiles';
import updateVisualizer from '@/utils/canvasDraw.js'
import {examples} from '@/views/defaultCode.js';

export default {
  name: 'HomeView',
  components: {
    MonacoEditor
  },
  data(){
    const width = window.innerWidth;

    const resizeHandler = (e)=>{
      this.key = !this.key;
    };
    resizeHandler.bind(this);
    addEventListener('resize', resizeHandler)

    return{
      scheduler : new Scheduler(),
      code: defaultCode,
      width,
      key : true,
      playing: false,
      consoleVisible: false,
      audioFiles,
      examples,
    }
  },
  mounted(){
    // Actualizar Visualizador
    window.requestAnimationFrame( updateVisualizer );
  },
  unmounted(){
    if (this.scheduler){ this.scheduler.clearNodes();}
    // clear resize listener
  },
  methods:{
    clearNodes(){
      if (this.scheduler){ this.scheduler.clearNodes();}
    },
    bulidNodes(){
      if (this.scheduler){ this.scheduler.buildNodes();}
    },
    play(){
      if (this.scheduler){this.scheduler.sync(); this.scheduler.play();}
    },
    pause(){
      if (this.scheduler){this.scheduler.pause();}
      this.playing = this.scheduler.playing;
      const console = document.getElementById('console-error');
      console.innerText += 'Paused!';
    },
    toggleConsole(){
      this.consoleVisible = !(this.consoleVisible);
      this.key = !(this.key);
    },
    toggleRun(){
      if (this.scheduler.playing){
        this.pause();
      }else{
        this.run();
      }
    }, 
    run(){
      if (!this.consoleVisible){ this.toggleConsole() }

      this.clearNodes();

      console.clear();
      run(this.code);
      console.log( new Scheduler() );

      this.play();

      this.playing = this.scheduler.playing;
    },
    previewAudio(audioFile){
      const audioSrc = new Audio(audioFile);
      audioSrc.play();
    },
    loadCode(newCode){
      this.code = newCode;
    }
  }
}
</script>

<style>
#home{
  height: calc(100vh - 3rem);
  padding: 1rem;
  display: flex;
  flex-direction: row;
}
#ui{
  width: 300px;
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
}
#audio-play{
  border: solid 1px #737373;
}
#preview{
  flex: 1;
  border: solid 1px #737373;
  overflow-y: auto;
  padding: 0.5rem;
}
#preview .play-file{
  font-size: 0.8rem;
  display: block;
  color: var(--primary);
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 100%;
  text-align: left;
}
#preview .play-file:hover{
  background-color: #333;
}
#preview .play-file:focus{
  outline: solid 1px var(--primary);
}

#workspace{
  flex-shrink: 1;
  flex: 1;

  display: flex;
  flex-direction: column;

  border: solid 1px #737373;
}
#console-error{
  font-size: 0.8rem;
  background-color: black;
  color: #adff2f;
  overflow-y: auto;
  height: 0;
  padding: 0;
}
#console-error.visible{
  height: 8rem;
  padding: 0.5rem;
}
.tab{
  background-color: #737373;
  border: solid 1px #737373;
  padding: 0.3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.tab h6{
  font-size: 0.8rem;
  margin: 0;
}
.tab #console-toggle{
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.tab #console-toggle:focus{
  outline: none;
}
#visualizer{
  background-color: black;
  width: 298px;
}
#load-examples{
  color: inherit;
  font-size: 0.8rem;
}
#load-examples-toggle{
  text-decoration: none;
  color: inherit;
}
#load-examples .dropdown-menu{
  background-color: #1e1e1e;
}
#load-examples .dropdown-menu .dropdown-item{
  background-color: #1e1e1e;
  color: white;
  font-weight: 300;
  font-size: 0.8rem;
  cursor: pointer;
}
#load-examples .dropdown-menu .dropdown-item:hover{
  background-color: #333;
  outline: solid 1px var(--primary);
}
</style>