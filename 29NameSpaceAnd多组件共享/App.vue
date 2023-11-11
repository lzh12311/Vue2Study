<template>
  <div id="app">
    <CountNumber/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import CountNumber from './components/CountNumber.vue'
import Person from './components/Person.vue';
export default {
  name: 'App',
  components: {
    CountNumber,
    Person
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
