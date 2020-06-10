<template>
  <div
    id="bullet1"
    v-bind:style="{marginLeft: this.bullet.x+'px',marginTop: this.bullet.y+'px',transform:'rotate('+this.bullet.deg+'deg)',
    width:this.bullet.width+'px',height: this.bullet.height+'px'}"
    v-if="this.bullet.fired"
  ></div>
</template>

<script>
var flying;
import { bus } from "../main";
import moveTank from "../mixins/moveTank";
import moveCannon from "../mixins/moveCannon";
import checkHit from "../mixins/checkHit";
import bulletCollision from "../mixins/bulletCollision";
export default {
  name:'bullet2',
  data() {
    return {};
  },
  methods: {
    fly: function(X, Y) {
      this.bullet.x += this.bullet.speed * X;
      this.bullet.y += this.bullet.speed * Y;
      if (this.checkHit()) {
        this.$store.state.tank1.tank.life--;

        window.clearInterval(flying);
        this.bullet.fired = false;
      }
      if (this.bulletCollision()) {
        // console.log(this.bullet.getPosition());
        window.clearInterval(flying);
        this.bullet.fired = false;
      }
    },
    startFire: function() {
      let X = this.bullet.vectorX;
      let Y = this.bullet.vectorY;
      this.bullet.fired = true;
      window.clearInterval(flying);
      flying = setInterval(() => this.fly(X, Y), 5);
    },
    getPosition: function() {
      let left = this.$refs["bullet_position"].getBoundingClientRect().left;
      let top = this.$refs["bullet_position"].getBoundingClientRect().top;
      return [left, top];
    }
  },
  computed: {
    opponent: function() {
      return this.$store.state.tank1;
    },
    bullet: function() {
      return this.$store.state.bullet2;
    },
    enemyCenter: function() {
      return this.$store.getters.centerCoordinate1;
    }
  },
  created() {
    bus.$on("tank2Data", data => {
      if (!this.bullet.fired && this.bullet.load > 0) {
        this.bullet.load--;
        this.bullet.vectorX = -1 * data.tank.vector[0];
        this.bullet.vectorY = -1 * data.tank.vector[1];
        this.bullet.x =
          data.tank.x + data.tank.width / 2 - this.bullet.width / 2;
        this.bullet.y =
          data.tank.y + data.tank.height / 2 - this.bullet.height / 2;
        this.bullet.deg = data.cannon.deg;
        if (this.bullet.deg >= 180) {
          this.bullet.deg -= 180;
        }
        this.startFire();
      }
    });
  },
  mixins: [moveTank, moveCannon, checkHit, bulletCollision]
};
</script>
<style scoped>
#bullet1 {
  transform-origin: center center;
  z-index: 10;
  user-select: none;
  border-radius: 50%;
  position: absolute;

  background-color: rgb(224, 140, 12);
  margin: 0 0;
}
p {
  margin: 0 auto;
  left: 0%;
  background-color: red;
}
</style>