<template>
  <div
    id="court"
    v-bind:style="{height: this.currentMap.height+'px',width:this.currentMap.width+'px'}"
  >
    <slot></slot>

    <wall v-for="walls in wall_numbers" :wall_num="walls" v-bind:key="walls+1"></wall>
    <treasure></treasure>
  </div>
</template>

<script>
var treasure_interval;
var shrinking;
import wall from "../walls/wall";
import treasure from "../walls/treasure";
export default {
  name: "map1",
  components: { wall, treasure },
  data() {
    return {
      currentTreasure: {
        droped: false
      }
    };
  },
  methods: {
    createTreasure: function() {
      let x = this.currentMap.width - 20;
      let y = this.currentMap.height - 20;
      this.$store.state.treasures.x = Math.random() * x;
      this.$store.state.treasures.y = Math.random() * y;
      this.$store.state.treasures.droped = true;
    },
    shrink: function() {
      let speed = this.$store.state.shrinkingSpeed;
      this.currentMap.width -= speed;
      this.currentMap.height -= speed;
      if (this.tank1.x + this.tank1.width >= this.currentMap.width) {
        this.tank1.x -= speed;
      }
      if (this.tank2.x + this.tank2.width >= this.currentMap.width) {
        this.tank2.x -= speed;
      }
      if (this.tank1.y + this.tank1.height >= this.currentMap.height) {
        this.tank1.y -= speed;
      }
      if (this.tank2.y + this.tank2.height >= this.currentMap.height) {
        this.tank2.y -= speed;
      }
    }
  },
  computed: {
    tank1: function() {
      return this.$store.state.tank1.tank;
    },
    tank2: function() {
      return this.$store.state.tank2.tank;
    },
    currentMap: function() {
      return this.$store.state.maps[this.$store.state.mapNumber - 1];
    },
    bullet1: function() {
      return this.$store.state.bullet1;
    },
    bullet2: function() {
      return this.$store.state.bullet2;
    },
    wall_numbers: function() {
      return this.$store.state.maps[this.$store.state.mapNumber - 1]
        .wall_numbers;
    },
    treasures: function() {
      return this.$store.state.treasures;
    }
  },
  created: function() {
    if (this.$store.state.mapNumber == 3) {
      shrinking = setInterval(() => this.shrink(), 120);
    }
    this.createTreasure();
    treasure_interval = setInterval(
      () => this.createTreasure(),
      this.treasures.speed * 1000
    );
  },
  beforeDestroy: function() {
    window.clearInterval(shrinking);
    window.clearInterval(treasure_interval);
  }
};
</script>
<style scoped>
#court {
  border-style: inset;
  margin: 0 auto;
  position: relative;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: rgb(255, 248, 183);
  border-color: rgb(119, 65, 14);
  border-width: 20px;
  left: 20px;
  margin-top: 15px;
}
#count_down {
  text-align: center;
  font-size: 500%;
  height: 300px;
  width: 900px;
  margin: 0 auto;
  position: absolute;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: rgb(255, 248, 183);
  border-width: 3px;
}
p {
  display: inline;
}
</style>