<template>
  <div
    id="court"
    v-bind:style="{height: this.currentMap.height+'px',width:this.currentMap.width+'px'}"
  >
<slot></slot>
<wall1></wall1>
<wall2></wall2>
  </div>
</template>

<script>
import wall1 from "./walls/wall1"
import wall2 from "./walls/wall2"
export default {
  components: { wall1,wall2},
  data() {
    return {
      text_direction: "",
    };
  },
  methods: {
 
  },
  computed: {
    currentMap: function () {
          return this.$store.state.map.map1
    },
    bullet1: function () {
      return this.$store.state.bullet1
  }
  },
  created: function (){
  }
};
</script>
<style scoped>

#court {
    margin: 0 auto;
  border-color: black;
  position:relative;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: pink;
  border-color: black;
  left: 20px;
}
p{
   display: inline;
}
</style>