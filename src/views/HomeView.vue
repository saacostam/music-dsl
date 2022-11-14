<template>
  <div id="home">
    <div id="monaco-editor">
      <MonacoEditor
        theme="vs-dark"
        :options="{}"
        :width="400"
        :height="600"
        :diffEditor="false"
        v-model:value="code"
      ></MonacoEditor>
    </div>

    <div id="ui">
      <h3 class="text-center p-4 text-white">MPL 🎵</h3>
      <button @click="startAudioScheduler" class="btn btn-success d-block mx-auto m-3">Start audio</button>
      <button @click="bulidNodes" class="btn btn-primary d-block mx-auto m-3">Build Nodes</button>
      <button @click="testPlay" class="btn btn-secondary d-block mx-auto m-3">Play Sound</button>
      <button @click="testPause" class="btn btn-warning d-block mx-auto m-3">Pause Sound</button>
      <button @click="clearNodes" class="btn btn-danger d-block mx-auto m-3">Clear nodes</button>

      <button @click="getText" class="btn btn-light d-block mx-auto m-3 mt-5">Log Text</button>
    </div>
  </div>
</template>

<script>
import Scheduler from '@/Classes/Scheduler/index.mjs';
import MonacoEditor from 'monaco-editor-vue3'

export default {
  name: 'HomeView',
  components: {
    MonacoEditor
  },
  data(){
    return{
      scheduler : null,
      code: "// Your code goes here! 🐱‍🚀",
    }
  },
  unmounted(){
    if (this.scheduler){ this.scheduler.clearNodes();}
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
    getText(){
      console.log(this.code);
    }
  }
}
</script>

<style>
#home{
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 2rem;
}
#monaco-editor{
  flex: 1;
}
#editor{
  width: 100%;
  height: 100%;
}
#ui{
  flex: 1;
}
</style>