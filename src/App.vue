<template>
  <div id="app">
    <Board/>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>

<style>
#app {
  font-family: "Gloria Hallelujah", cursive;
  margin: 0;
}
</style>
