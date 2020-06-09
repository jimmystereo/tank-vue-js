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
    <h2>
      GREEN:
      bullet :{{bullet1.load}} life: {{tank1.tank.life}}   
    </h2>
    <h2>
    
      RED:
      bullet :{{bullet2.load}} life: {{tank2.tank.life}}
    </h2>
      <inform1></inform1>
    <mapOne>
      <bulletOne></bulletOne>
      <bulletTwo></bulletTwo>
      <tankOne></tankOne>
      <tankTwo></tankTwo>
    </mapOne>
    <h2>
      GREEN:
      bullet :{{bullet1.load}} life: {{tank1.tank.life}}
    </h2>
   
  </div>
</template>

<script>
import { bus } from "../main";
import tank1 from "./tank1";
import tank2 from "./tank2";
import bullet1 from "./bullet1";
import bullet2 from "./bullet2";
import map1 from "./map1";
import inform1 from "./inform1"
export default {
  components: {
    tankOne: tank1,
    tankTwo: tank2,
    bulletOne: bullet1,
    mapOne: map1,
    bulletTwo: bullet2,
    inform1: inform1
  },
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {
    controlPad: function(function_name, direction, tank_number) {
      this.$store.commit(function_name, [direction, tank_number]);
      this.text_direction = direction;
    },
    switchWeapon1:function () {
      if(++this.$store.state.bullet1.type>this.$store.state.maxType){
        this.$store.state.bullet1.type=1;
      }
      
    },
    fire1: function() {
      bus.$emit("fire1", "nothing");
    },
    fire2: function() {
      bus.$emit("fire2", "nothing");
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
    }
  },
  created: function() {}
};
</script>
<style scoped>
#court_container {
  border-color: transparent;
  background-color: white;
  margin-top: 0%;
  width: 100%;
  height: calc(100%);
}
p {
  display: inline;
}
h2 {
  display: inline;
}
</style>