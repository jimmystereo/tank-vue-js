<template>
  <div id="informsBand" style="display= inline-block">
    <slot></slot>
    <button id="bandReset" v-on:click="reset()">EXIT</button>
  </div>
</template>

<script>
import $ from "jquery";
import resetState from "../mixins/reset";
export default {
  name: "informsBand",
  data() {
    return {};
  },
  methods: {
    reset: function() {
      $("#informsBand").fadeOut(800);

      $("#court").fadeOut(800, this.resetState);
    }
  },
  computed: {},
  created() {},
  mixins: [resetState]
};
</script>
<style scoped>
#bandReset {
  border-style: solid;
  border-radius: 12px;
  height: 16%;
  width: 8%;
  left: 47.8%;
  top: 93%;
  position: absolute;
  background-color: transparent;
  border-color: violet;
  color:white;
}
#informsBand {
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 150px;
  /* display: flex;
  flex-wrap: wrap; */
  background-color: transparent;
}
h2 {
  position: absolute;
  display: block;
}
</style>