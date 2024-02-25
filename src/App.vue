<template>
  <div id="app">
    这是主文件{{a}}
    <test><test/>
    <test><test/>
  </div>
</template>

<script>
import test from './test.vue'

export default {
  name: 'App',
  components: {
    test
  },
  data () {
    return {
      a: 123
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
