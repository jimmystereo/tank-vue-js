<template>
  <div
    id="wall1"
    class="walls"
    v-bind:style="{height: this.wall.height+'px',width:this.wall.width+'px',marginTop:this.wall.y+'px',marginLeft:this.wall.x+'px'}"
  ></div>
</template>

<script>
export default {
  name: "wall",
  props: [
    'wall_num'
  ],
  components: {},
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {},
  computed: {
    wall: function() {
      return this.$store.state.walls[this.wall_num];
    }
  },
  created: function() {}
};
</script>
<style >
  .walls {
  position: absolute;
  border-radius: 5px;
  background: url(../../img/brick.jpg);
  border-color: rgb(128, 46, 26);
  border-style: outset;
  border-width: 5px;
}
</style>