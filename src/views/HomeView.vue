<template>
  <div id="home">
    <div id="monaco-editor">
      <MonacoEditor
        theme="vs-dark"
        :options="{layout: {}}"
        :diffEditor="false"
        height="500"
        v-model:value="code"
        ref="editor"
        language = 'go'
      ></MonacoEditor>
    </div>

    <div id="ui">
      <h3 class="text-center p-4 text-white">MPL 🎵</h3>
      <button @click="run" class="btn btn-light d-block mx-auto m-3 mt-5">Run</button>
      <button @click="testPlay" class="btn btn-secondary d-block mx-auto m-3">Play Sound</button>
      <button @click="testPause" class="btn btn-warning d-block mx-auto m-3">Pause Sound</button>

      <!-- <button @click="startAudioScheduler" class="btn btn-success d-block mx-auto m-3">Start audio</button> -->
      <!-- <button @click="bulidNodes" class="btn btn-primary d-block mx-auto m-3">Build Nodes</button> -->
      <!-- <button @click="clearNodes" class="btn btn-danger d-block mx-auto m-3">Clear nodes</button> -->

    </div>
  </div>
</template>

<script>
import Scheduler from '@/Classes/Scheduler/index.mjs';
import run from '@/grammar/visitor.js';
import MonacoEditor from 'monaco-editor-vue3'
import defaultCode from './defaultCode.js'

export default {
  name: 'HomeView',
  components: {
    MonacoEditor
  },
  data(){
    const width = window.innerWidth;

    const resizeHandler = (e)=>{
      console.log(e.target.innterWidth);
    };
    resizeHandler.bind(this);

    return{
      scheduler : null,
      code: defaultCode,
      width,
      resizeListener : addEventListener('resize', resizeHandler)
    }
  },
  unmounted(){
    if (this.scheduler){ this.scheduler.clearNodes();}
    // clear resize listener
  },
  methods:{
    startAudioScheduler(){
      this.scheduler = new Scheduler();
    },
    clearNodes(){
      if (this.scheduler){ this.scheduler.clearNodes();}
    },
    bulidNodes(){
      if (this.scheduler){ this.scheduler.buildNodes();}
    },
    testPlay(){
      if (this.scheduler){this.scheduler.testPlay();}
    },
    testPause(){
      if (this.scheduler){this.scheduler.testPause();}
    },

    // Monaco Editor Methods
    run(){
      this.startAudioScheduler();
      this.clearNodes();

      console.clear();
      run(this.code);
      console.log( new Scheduler() );

      this.testPlay();
    },
  }
}
</script>

<style>
#home{
  height: 100vh;
  padding: 2rem;
}
#editor{
  width: 100%;
  height: 100%;
}
#ui{
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
}
</style>