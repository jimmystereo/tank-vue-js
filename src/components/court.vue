
<template>
  <div
    id="court_container"
    tabindex="-1"
    @keydown.right="controlPad('moveTank','right',1)"
    @keydown.left="controlPad('moveTank','left',1)"
    @keydown.up="controlPad('moveTank','up',1)"
    @keydown.down="controlPad('moveTank','down',1)"
    @keyup.right="controlPad('stopTank','right',1)"
    @keyup.left="controlPad('stopTank','left',1)"
    @keyup.up="controlPad('stopTank','up',1)"
    @keyup.down="controlPad('stopTank','down',1)"
    @keydown.68="controlPad('moveTank','right',2)"
    @keydown.65="controlPad('moveTank','left',2)"
    @keydown.87="controlPad('moveTank','up',2)"
    @keydown.83="controlPad('moveTank','down',2)"
    @keyup.68="controlPad('stopTank','right',2)"
    @keyup.65="controlPad('stopTank','left',2)"
    @keyup.87="controlPad('stopTank','up',2)"
    @keyup.83="controlPad('stopTank','down',2)"
    @keydown.102="controlPad('rotateCannon','clockWise',1)"
    @keyup.102="controlPad('stopCannon','clockWise',1)"
    @keydown.100="controlPad('rotateCannon','counterClockWise',1)"
    @keyup.100="controlPad('stopCannon','counterClockWise',1)"
    @keydown.74="controlPad('rotateCannon','clockWise',2)"
    @keyup.74="controlPad('stopCannon','clockWise',2)"
    @keydown.71="controlPad('rotateCannon','counterClockWise',2)"
    @keyup.71="controlPad('stopCannon','counterClockWise',2)"
    @keydown.enter="fire1()"
    @keydown.107="switchWeapon1()"
    @keydown.space="fire2()"
  >
    <button v-on:click="switchMap()"></button>
    <button class="startPageButton" v-on:click="resetState()">reset</button>
    <inform1></inform1>
    <startPage v-if="mapNumber == -1"></startPage>
        <chooseMapPage v-if="mapNumber == 0"></chooseMapPage>
    <map1 v-if="mapNumber >= 1">
      <bullet1></bullet1>
      <bullet2></bullet2>
      <tank1></tank1>
      <tank2></tank2>
    </map1>
  </div>
</template>

<script>
import { bus } from "../main";
import tank1 from "./tank1";
import tank2 from "./tank2";
import bullet1 from "./bullet1";
import bullet2 from "./bullet2";
import map1 from "./maps/map";
import inform1 from "./inform1";
import startPage from "./maps/startPage";
import chooseMapPage from "./maps/chooseMapPage";

export default {
  components: {
    tank1,
    tank2,
    bullet1,
    bullet2,
    inform1,
    map1,
    startPage,
    chooseMapPage
  },
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {
    resetState: function() {
      this.$store.commit("resetState");
    },
    controlPad: function(function_name, direction, tank_number) {
      if (this.$store.state.mapNumber >= 1) {
        this.$store.commit(function_name, [direction, tank_number]);
        this.text_direction = direction;
      }
    },
    switchWeapon1: function() {
      if (++this.$store.state.bullet1.tmpType > this.$store.state.maxType) {
        this.$store.state.bullet1.tmpType = 1;
      }
    },
    fire1: function() {
      bus.$emit("fire1", "nothing");
    },
    fire2: function() {
      bus.$emit("fire2", "nothing");
    },
    switchMap: function() {
      this.$store.state.mapNumber--;
      console.log(this.$store.state.mapNumber);
    }
  },
  computed: {
    currentMap: function() {
      return this.$store.state.map.map1;
    },
    bullet1: function() {
      return this.$store.state.bullet1;
    },
    bullet2: function() {
      return this.$store.state.bullet2;
    },
    tank1: function() {
      return this.$store.state.tank1;
    },
    tank2: function() {
      return this.$store.state.tank2;
    },
    mapNumber: function() {
      return this.$store.state.mapNumber;
    }
  },
  created: function() {}
};
</script>
<style >
#court_container {
  
  border-color: transparent;
  background-color: rgb(255, 248, 183);
  margin-top: 0%;
  width: 100%;
  height: 10000000px;
}
p {
  display: inline;
}
h2 {
  display: inline;
}
.tanks {
  z-index: 47;
  border-width: 5px;
  border-style: outset;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  margin: 0 0;
}
.walls {
  position: absolute;

  border-color: rgb(255, 152, 56);
  background-color: rgb(83, 40, 5);
  border-style: outset;
  border-width: 5px;
}
</style>