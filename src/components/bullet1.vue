<template>
  <div
    id="bullet1"
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
var flying;
import { bus } from "../main";
import moveTank from "../mixins/moveTank";
import moveCannon from "../mixins/moveCannon";
import checkHit from "../mixins/checkHit";
import bulletCollision from "../mixins/bulletCollision";
import weaponHandler from "../mixins/weaponHandler";
import checkWinner from "../mixins/checkWinner"
export default {
  name: "bullet1",
  data() {
    return { explode: false };
  },
  methods: {
    fly: function(X, Y) {
      this.weaponFly(X, Y);
      if (this.checkHit()) {
        window.clearInterval(flying);
        this.opponent.tank.life-=this.bullet.damage[this.bullet.type-1];
        this.reviving();
        if(this.opponent.tank.life<=0){
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
      return this.$store.state.tank2;
    },
    bullet: function() {
      return this.$store.state.bullet1;
    },
    enemyCenter: function() {
      return this.$store.getters.centerCoordinate2;
    },
    tank: function() {
      return this.$store.state.tank1;
    },
     mine: function() {
      return this.$store.state.mine1;
    }
  },
  created() {
    bus.$on("fire1", data => {
      this.bullet.type = this.bullet.tmpType;
      if (!this.bullet.fired && this.bullet.load[this.bullet.type - 1] > 0) {
        this.$store.state.bullet1.load[this.$store.state.bullet1.type - 1]--;
        this.flyingVector();
        this.weaponPrepare(data);
        this.startFire();
      } else if (
        this.bullet.fired &&
        !this.bullet.exploded &&
        this.bullet.type == 3&&
         this.$store.state.mine1[1]
      ) {
        this.mine[1] = false;
        this.mineExplode();
      }
    });
    
  },
   beforeDestroy() {
    window.clearInterval(flying);

  },
  mixins: [moveTank, moveCannon, checkHit, bulletCollision, weaponHandler, checkWinner]
};
</script>
<style scoped>
#bullet1 {
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