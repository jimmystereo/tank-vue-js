<template>
  <div class="tank1" 
    ref="tank1"
  v-bind:style="{marginLeft: this.tank.x+'px',marginTop: this.tank.y+'px',height: this.tank.height+'px',width:this.tank.width+'px'}">
    <div
      ref="tank1_cannon"
      id="tank1_cannon"
      v-bind:style="{transform:'rotate('+this.cannon.deg+'deg)'}"
    >
      <div id="cannon_top"></div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import moveTank from "../mixins/moveTank";
import moveCannon from "../mixins/moveCannon";
import collision from "../mixins/collision";
export default {
  data() {
    return {};
  },
  methods: {
    flyingVector: function() {
      let deg = this.cannon.deg;
      let X = Math.cos((deg * Math.PI) / 180);
      let Y = Math.sin((deg * Math.PI) / 180);
      //   if(deg>=0&&deg<=180){
      //   Y = -1*Math.abs(Y);
      //   }
      //   if(deg>=270&&deg<=360){
      //       Y = Math.abs(Y);
      //   }
      this.tank.vector = [X, Y];
    }
  },
  computed: {
    tank: function() {
      return this.$store.state.tank1.tank;
    },
    cannon: function () {
        return this.$store.state.tank1.cannon;
    },
    opponent: function() {
      return this.$store.state.tank2;
    },
  },
  mixins: [moveTank, moveCannon, collision],
  created() {
    setInterval(() => this.moveCannon(), 10);
    setInterval(() => this.moveTank(), 10);
    bus.$on("fire1", data => {
      if (!this.cannon.fired) {
        data;
        this.flyingVector();
        bus.$emit("tank1Data", this);
      }
    });
  }
};
</script>
<style scoped>
.tank1 {
  text-align: center;
  border-radius: 50%;
  position: absolute;
  background-color: green;
  margin: 0 0;
}
#cannon_top {
  z-index: 1000;
  border-radius: 50%;
  position: relative;
  left: 50%;
  top: calc(-50% - 5px);
  height: 50px;
  width: 50px;
  background-color: rgb(26, 68, 26);
  margin: 0 auto;
}
#tank1_cannon {
  transform-origin: right center;
  position: relative;
  top: calc(50% - 10px);
  left: -50%;
  z-index: 50;
  height: 20px;
  width: 80px;
  background-color: black;
  margin: 0 auto;
}
p {
  display: inline;
}
</style>