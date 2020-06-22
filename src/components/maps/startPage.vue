<template>
  <div
    id="startPage"
    v-bind:style="{height: this.startPage.height+'px',width:this.startPage.width+'px'}"
  ><div id="nameHolder1">
    <h1> Player 1 <br></h1>
  <input v-model = "$store.state.tank1.tank.name" placeholder="enter your name"></div>
  <div id="nameHolder2">
    <h1> Player 2 <br></h1>
  <input v-model = "$store.state.tank2.tank.name" placeholder="enter your name"></div>
   
      <button class="startPageButton" v-on:click="switchMap()">Enter</button>   
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "startPage",
  components: {},
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {
    switchMap: function() {
      $("#startPage").fadeOut(800,this.enter);
    },
    enter: function(){
this.$store.state.mapNumber++
    }
  },
  computed: {
    
    startPage: function(){
      return this.$store.state.startPage;
    }
  },
  created: function() {},
  beforeDestroy(){
    
  }
};
</script>
<style scoped>
#nameHolder1{
    position: absolute;
    margin-left: 59%;
    margin-top: 21%;
    z-index: 20;
}
#nameHolder2{
    position: absolute;
    margin-left: 14%;
    margin-top: 21%;
    z-index: 20;
}
input{
  font-size:xx-large;
}
#startPage {
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


p {
  display: inline;
}
</style>