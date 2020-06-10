<template>
  <div
    id="court"
    v-bind:style="{height: this.currentMap.height+'px',width:this.currentMap.width+'px'}"
  >
    <slot></slot>
    <wall1></wall1>
    <wall2></wall2>
    <wall3></wall3>
  </div>
</template>

<script>
import wall1 from "../walls/wall1";
import wall2 from "../walls/wall2";
import wall3 from "../walls/wall3";

export default {
  name: "map1",
  components: { wall1, wall2, wall3 },
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {},
  computed: {
    currentMap: function() {
      return this.$store.state.map.map1;
    },
    bullet1: function() {
      return this.$store.state.bullet1;
    }
  },
  created: function() {}
};
</script>
<style scoped>
#court {
  border-style: dashed;
  margin: 0 auto;
  position: relative;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: rgb(255, 248, 183);
  border-color: rgb(119, 65, 14);
  border-width: 20px;
  left: 20px;
}
p {
  display: inline;
}
</style>