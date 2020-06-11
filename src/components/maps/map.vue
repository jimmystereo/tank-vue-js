<template>
  <div
    id="court"
    v-bind:style="{height: this.currentMap.height+'px',width:this.currentMap.width+'px'}"
  >
    <slot></slot>
 
    <wall v-for ="walls in wall_numbers" :num = 'walls'  v-bind:key='walls'></wall>
  </div>
</template>

<script>
import wall from "../walls/wall";


export default {
  name: "map1",
  components: { wall},
  data() {
    return {
  
      text_direction: []
    };
  },
  methods: {},
  computed: {
    currentMap: function() {
      return this.$store.state.maps[this.$store.state.mapNumber-1];
    },
    bullet1: function() {
      return this.$store.state.bullet1;
    },
    wall_numbers: function(){
            return this.$store.state.maps[this.$store.state.mapNumber-1].wall_numbers;

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