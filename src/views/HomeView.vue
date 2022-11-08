<template>
  <div class="home">
    <h3 class="text-center p-4">🎵</h3>
    <button @click="startAudioScheduler" class="btn btn-danger d-block mx-auto">Start audio</button>
  </div>
</template>

<script>
import Scheduler from '@/Classes/Scheduler/index.mjs';

export default {
  name: 'HomeView',
  data(){
    return{
      scheduler : null,
      reload : 0, 
    }
  },
  methods:{
    startAudioScheduler(){
      this.scheduler = new Scheduler();
    }
  }
}
</script>
