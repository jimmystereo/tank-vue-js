<template>
  <div
    id="startPage"
    v-bind:style="{height: this.startPage.height+'px',width:this.startPage.width+'px'}"
  >
    <h1 id="hhh">TANK</h1>
    <div id="nameHolder1">
      <h1>
        Player 1
        <br />
      </h1>
      <input v-model="$store.state.tank1.tank.name" placeholder="enter your name" />
    </div>
    <div id="nameHolder2">
      <h1>
        Player 2
        <br />
      </h1>
      <input v-model="$store.state.tank2.tank.name" placeholder="enter your name" />
    </div>

    <button class="startPageButton" v-on:click="switchMap()">Enter</button>
    <button
      id="sound"
      v-bind:class="{haveSound: this.$store.state.sound}"
      v-on:click="soundUp()"
    ></button>

    <h1 id="f11">press f11 to play in full screen</h1>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "startPage",
  components: {},
  data() {
    return {
      clicked: false,
      text_direction: ""
    };
  },
  methods: {
    soundUp: function() {
      this.$store.state.sound = !this.$store.state.sound;
    },
    switchMap: function() {
      if (!this.clicked) {
        this.clicked = true;
        $("#startPage").fadeOut(800, this.enter);
      }
    },
    enter: function() {
      this.$store.state.mapNumber++;
    }
  },
  computed: {
    startPage: function() {
      return this.$store.state.startPage;
    }
  },
  created: function() {},
  mounted: function() {
    $("#startPage").hide();
    $("#startPage").fadeIn(1000);
  },
  beforeDestroy() {}
};
</script>
<style scoped>
#nameHolder1 {
  position: absolute;
  margin-left: 59%;
  margin-top: 21%;
  z-index: 20;
}
#nameHolder2 {
  position: absolute;
  margin-left: 14%;
  margin-top: 21%;
  z-index: 20;
}
input {
  font-size: xx-large;
}
#startPage {
  top: 13%;

  border-radius: 60px;
  background: url(../../img/startPage.png);
  margin: 0 auto;
  width: 1500px;
  height: 1500px;
  position: relative;
  margin-bottom: 10px;
  border-style: solid;
  border-color: black;
  left: 20px;
}
.startPageButton {
  font-size: xx-large;
  background: url(../../img/Enter.png);
  border-radius: 20px;
  position: relative;
  margin: 35% auto;
  height: 20%;
  width: 20%;
}
.haveSound {
  background-image: url(../../img/soundOn.png) !important;
}
#sound {
  background-color: rgb(101, 151, 72);
  background-image: url(../../img/soundOff.png);
  border-radius: 20px;
  position: absolute;
  height: 100px;
  width: 100px;
  left: 92%;
  top: 71%;
}

#hhh {
  position: absolute;
  font-size: 174px;
  left: 34%;
  top: -7%;
  font-family: initial;
  font-style: oblique;
}
h1 {
  color: white;
}
p {
  display: inline;
}
#f11 {
  font-size: 50px;
  position: absolute;
  left: 31%;
  top: 86%;
  font-family: initial;
  font-style: oblique;
}
</style>