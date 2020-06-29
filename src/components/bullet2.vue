<template>
  <div
    id="bullet2"
    v-bind:style="{marginLeft: this.bullet.x+'px',marginTop: this.bullet.y+'px',transform:'rotate('+this.bullet.deg+'deg)',
    width:this.bullet.width+'px',height: this.bullet.height+'px',
    backgroundColor:this.bullet.color,  zIndex: this.bullet.zIndex
}"
    v-show="this.bullet.fired"
  >
    <!-- <div id="explode" v-if="this.explode"></div> -->
  </div>
</template>

<script>
import $ from "jquery";

var flying;
import { bus } from "../main";
import moveTank from "../mixins/moveTank";
import moveCannon from "../mixins/moveCannon";
import checkHit from "../mixins/checkHit";
import checkWinner from "../mixins/checkWinner";
import bulletCollision from "../mixins/bulletCollision";
import weaponHandler from "../mixins/weaponHandler";
export default {
  name: "bullet2",
  data() {
    return { explode: false };
  },
  methods: {
    fly: function(X, Y) {
      this.weaponFly(X, Y);
      if (this.checkHit()) {
        if (this.$store.state.sound) {
          this.hit_effect.load();
          this.hit_effect.play();
        }
        window.clearInterval(flying);
        this.opponent.tank.life -= this.bullet.damage[this.bullet.type - 1];
        this.reviving();
        if (this.opponent.tank.life <= 0) {
          this.checkWinner();
        }
      } else if (this.bulletCollision() || this.bullet.exploded) {
        window.clearInterval(flying);
        this.bullet.fired = false;
        this.tank.cannon.fired = false;
      }
    },
    startFire: function() {
      let X = this.bullet.vectorX;
      let Y = this.bullet.vectorY;
      window.clearInterval(flying);
      this.bullet.fired = true;

      flying = setInterval(() => this.fly(X, Y), 10);
    },
    getPosition: function() {
      let left = this.$refs["bullet_position"].getBoundingClientRect().left;
      let top = this.$refs["bullet_position"].getBoundingClientRect().top;
      return [left, top];
    },
    flyingVector: function() {
      let deg = this.tank.cannon.deg;
      let X = Math.cos((deg * Math.PI) / 180);
      let Y = Math.sin((deg * Math.PI) / 180);
      this.tank.tank.vector = [X, Y];
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
    },
    tank: function() {
      return this.$store.state.tank2;
    },
    mine: function() {
      return this.$store.state.mine2;
    },
    hit_effect: function() {
      return $("#hit_audio")[0];
    },
    fire_effect: function() {
      return $("#missle")[0];
    },
    explode_effect: function() {
      return $("#explode_audio")[0];
    }
  },
  created() {
    bus.$on("fire2", data => {
      this.bullet.type = this.bullet.tmpType;
      if (!this.bullet.fired && this.bullet.load[this.bullet.type - 1] > 0) {
        this.$store.state.bullet2.load[this.$store.state.bullet2.type - 1]--;
        this.flyingVector();
        this.weaponPrepare(data);
        this.startFire();
      } else if (
        this.bullet.fired &&
        !this.bullet.exploded &&
        this.bullet.type == 3 &&
        this.$store.state.mine2[1]
      ) {
        this.mine[1] = false;
        this.mineExplode();
      }
    });
  },
  mounted() {
    this.hit_effect.load();
    this.explode_effect.load();

    this.fire_effect.load();
  },
  beforeDestroy() {
    window.clearInterval(flying);
  },
  mixins: [
    moveTank,
    moveCannon,
    checkHit,
    bulletCollision,
    weaponHandler,
    checkWinner
  ]
};
</script>
<style scoped>
#bullet2 {
  transform-origin: center center;
  user-select: none;
  border-radius: 50%;
  position: absolute;
  background-color: rgb(224, 140, 12);
  margin: 0 0;
}
#explode {
  transform-origin: center center;
  z-index: 11;
  user-select: none;
  border-radius: 50%;
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgb(224, 54, 12);
  margin: 0 0;
}
p {
  margin: 0 auto;
  left: 0%;
  background-color: red;
}
</style>