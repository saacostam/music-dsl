<template>
  <NavBarVue/>
  <router-view/>
</template>

<script>
import NavBarVue from './components/NavBar.vue';
export default{
  components: {
    NavBarVue,
  }
}
</script>

<style>
*{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
