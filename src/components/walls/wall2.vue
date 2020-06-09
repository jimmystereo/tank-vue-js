<template>
  <div
    id="wall2"
    v-bind:style="{height: this.wall.height+'px',width:this.wall.width+'px',marginTop:this.wall.y+'px',marginLeft:this.wall.x+'px'}"
  ></div>
</template>

<script>
export default {
    name: 'wall1',
  components: {},
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {},
  computed: {
    wall: function () {
      return this.$store.state.walls.wall2;
    }
  },
  created: function() {}
};
</script>
<style scoped>
#wall2 {
  border-color: black;
  position: absolute;
  background-color: rgb(83, 40, 5);
  border-color: black;
}

</style>