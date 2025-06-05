<template>
  <nav class="navbar navbar-dark">
    <router-link
      class="navbar-brand mb-0"
      style="
        font-size: 1rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
      "
      to="/"
    >
      <span style="color: #007bff">TUNE</span>CODE
    </router-link>

    <div style="margin-left: auto; font-size: 0.8rem; color: white">
      <router-link to="/" style="margin-right: 1rem">Editor</router-link>
      <router-link to="documentation" style="margin-right: 1rem">Documentation</router-link>
      <a href="https://saacostam.github.io" target="_blank">More Projects</a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  height: 3rem;
  background-color: #1e1e1e;
  border-bottom: 1px #737373 solid;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  opacity: 80%;
}
</style>
