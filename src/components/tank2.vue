<template>
  <div
    id="tank2"
    class="tanks"
    ref="tank2"
    v-bind:style="{marginLeft: this.tank.x+'px',marginTop: this.tank.y+'px',height: this.tank.height+'px',width:this.tank.width+'px', backgroundColor: this.tank.color}"
  >
    <div
      ref="tank2_cannon"
      id="tank2_cannon"
      v-bind:style="{transform:'rotate('+this.cannon.deg+'deg)'}"
    >
      <div id="cannon_top"></div>
    </div>
    <h5 id="name">{{tank.name}}</h5>
  </div>
</template>

<script>
var moveCannonTime;
var moveTankTime;
import moveTank from "../mixins/moveTank";
import moveCannon from "../mixins/moveCannon";
import collision from "../mixins/collision";
export default {
  name: "tank2",
  data() {
    return {};
  },
  methods: {},
  computed: {
    bullet: function() {
      return this.$store.state.bullet1;
    },
    tank: function() {
      return this.$store.state.tank2.tank;
    },
    cannon: function() {
      return this.$store.state.tank2.cannon;
    },
    opponent: function() {
      return this.$store.state.tank2;
    }
  },
  mixins: [moveTank, moveCannon, collision],
  created() {
    moveCannonTime = setInterval(() => this.moveCannon(), 10);
    moveTankTime = setInterval(() => this.moveTank(), 10);
  },
  beforeDestroy() {
    window.clearInterval(moveCannonTime);
    window.clearInterval(moveTankTime);
  }
};
</script>
<style scoped>
#tank2 {
  border-color: rgb(245, 32, 85);
}
#cannon_top {
  z-index: 1000;
  border-radius: 50%;
  position: relative;
  left: 50%;
  top: calc(-50% - 5px);
  height: 50px;
  width: 50px;
  background-color: rgb(121, 11, 11);
  margin: 0 auto;
}
#tank2_cannon {
  border-radius: 15px;
  transform-origin: right center;
  position: relative;
  top: calc(50% - 10px);
  left: -53%;
  z-index: 50;
  height: 20px;
  width: 80px;
  background-color: black;
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  margin: 0 auto;
}
#name {
  color: white;

  top: 110%;
  left: 16%;
  font-size: x-large;
  position: absolute;
  margin: 0 auto;
  text-align: center;
}
</style>