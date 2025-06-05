<template>
    <nav class="navbar navbar-dark">
        <span class="navbar-brand mb-0" style="font-size: 1rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
            <span style="color: #007bff">TUNE</span>CODE
        </span>

        <div style="margin-left: auto; font-size: 0.8rem; color: white;">
            <router-link to="/" style="margin-right: 1rem;">Editor</router-link>
            <router-link to="documentation">Documentation</router-link>
        </div>
    </nav>
</template>

<script>
export default{

}
</script>

<style scoped>
    nav{
        height: 3rem;
        background-color: #1e1e1e;
        border-bottom: 1px #737373 solid;
    }
    a{
        text-decoration: none;
        color: white;
    }
</style>