<template>
  <div
    id="wall3"
        class="walls"

    v-bind:style="{height: this.wall.height+'px',width:this.wall.width+'px',marginTop:this.wall.y+'px',marginLeft:this.wall.x+'px'}"
  ></div>
</template>

<script>
export default {
    name: 'wall3',
  components: {},
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {},
  computed: {
    wall: function () {
      return this.$store.state.walls.wall3;
    }
  },
  created: function() {}
};
</script>
<style scoped>


</style>