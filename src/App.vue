/* eslint-disable vue/no-unused-components */
<template>
  <div id="app">
    <court></court>
  </div>
</template>

<script>
import court from "./components/court";
export default {
  name: "App",
  components: {
  
    court: court
  },
  data() {
    return {};
  }
};
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
