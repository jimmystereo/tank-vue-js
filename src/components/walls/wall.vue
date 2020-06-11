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
    'num'
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
      return this.$store.state.walls[this.num];
    }
  },
  created: function() {}
};
</script>
<style >

</style>