<template>
  <div id="app">
    <CountNumber/>
    
  </div>
</template>

<script>
import CountNumber from './components/CountNumber.vue'

export default {
  name: 'App',
  components: {
    CountNumber
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
