<template>
  <div
    id="bullet1"
    v-bind:style="{marginLeft: this.bullet.x+'px',marginTop: this.bullet.y+'px',transform:'rotate('+this.bullet.deg+'deg)',
    width:this.bullet.width+'px',height: this.bullet.height+'px',
    backgroundColor:this.bullet.color}"
    v-if="this.bullet.fired"
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
import weaponHandler from "../mixins/weaponHandler"
export default {
  data() {
    return { explode: false };
  },
  methods: {
    fly: function(X, Y) {
     this.weaponFly(X,Y);
      if (this.checkHit()) {
        this.$store.state.tank2.tank.life--;
        window.clearInterval(flying);
        this.explode = true;  
        this.bullet.fired = false;
        alert("hit");
      
      }
      else if (this.bulletCollision()) {
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
      return this.$store.state.tank2;
    },
    bullet: function() {
      return this.$store.state.bullet1;
    },
    enemyCenter: function() {
      return this.$store.getters.centerCoordinate2;
    }
  },
  created() {
    bus.$on("tank1Data", data => {
      if (!this.bullet.fired && this.bullet.load > 0) {
        this.weaponPrepare(data);
        this.startFire();
      }
    });
  },
  mixins: [moveTank, moveCannon, checkHit, bulletCollision, weaponHandler]
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