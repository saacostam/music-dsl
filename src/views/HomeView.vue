<template>
  <div class="home">
    <h3 class="text-center p-4 text-white">MPL 🎵</h3>
    <button @click="startAudioScheduler" class="btn btn-success d-block mx-auto m-3">Start audio</button>
    <button @click="bulidNodes" class="btn btn-primary d-block mx-auto m-3">Build Nodes</button>
    <button @click="testPlay" class="btn btn-secondary d-block mx-auto m-3">Play Sound</button>
    <button @click="clearNodes" class="btn btn-danger d-block mx-auto m-3">Clear nodes</button>
  </div>
</template>

<script>
import Scheduler from '@/Classes/Scheduler/index.mjs';

export default {
  name: 'HomeView',
  data(){
    return{
      scheduler : null,
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
    }
  }
}
</script>
