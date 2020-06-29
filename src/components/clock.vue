<template>
  <div id="count_down" v-if="countDown&&this.map>=1" v-bind:style="{color: this.color}">{{this.time}}</div>
</template>

<script>
var count_down;

import checkWinner from "../mixins/checkWinner";

export default {
  name: "clock",
  data() {
    return { countDown: true };
  },
  methods: {
    startCountDown: function() {
      if (this.$store.state.count_down <= 0) {
        window.clearInterval(count_down);
        this.countDown = false;
        this.checkWinner();
      }
      this.$store.state.count_down--;
    }
  },
  computed: {
    map: function() {
      return this.$store.state.mapNumber;
    },
    time: function() {
      return this.$store.state.count_down;
    },
    color: function(){
      if(this.$store.state.count_down<=15){
        return "red";
      }
      return "white";
    }
  },
  created: function() {
    count_down = setInterval(() => this.startCountDown(), 1000);
  },
  beforeDestroy: function() {
    window.clearInterval(count_down);
  },
  mixins: [checkWinner]
};
</script>
<style scoped>
#count_down {
    top: 20%;
    left: 48.5%;
    text-align: center;
    position: absolute;
    margin: 0 auto;
    display: inline-block;
    font-size: 100px;
    
}
</style>