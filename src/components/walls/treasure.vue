<template>
  <div
    id="treasure"
    class="treasures"
    v-if = "this.treasure.droped"
    v-bind:style="{height: this.treasure.height+'px',width:this.treasure.width+'px',marginTop:this.treasure.y+'px',marginLeft:this.treasure.x+'px'}"
  ></div>
</template>

<script>
export default {
  name: "treasure",
  components: {},
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {},
  computed: {
    treasure: function() {
      return this.$store.state.treasures;
    }
  },
  created: function() {}
};
</script>
<style scoped>
#treasure{
  border-color: blueviolet;
  border-style: outset;
  border-width: 2px;
    background-color: violet;
    border-radius : 50%; 
  }
</style>