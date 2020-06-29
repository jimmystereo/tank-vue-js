<template>
  <div id="inform1" class="informs" v-if="this.map>=1">
    <h1 id="health">{{tank.tank.name}} </h1>
    <div id="healthBlock" v-bind:style="{width: 2*this.tank.tank.life+'px', backgroundColor: this.healthColor}"></div>
    <h2>
      points: {{tank.tank.points}}
      <br />
    </h2>
    <div id="weapon1" v-bind:class="{weapon_block:true,chosed_weapon:this.tmpType==1}">{{load[0]}}</div>
    <div id="weapon2" v-bind:class="{weapon_block:true,chosed_weapon:this.tmpType==2}">{{load[1]}}</div>
    <div id="weapon3" v-bind:class="{weapon_block:true,chosed_weapon:this.tmpType==3}">{{load[2]}}</div>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "inform1",
  data() {
    return {};
  },
  methods: {},
  computed: {
    tmpType: function() {
      return this.$store.state.bullet1.tmpType;
    },
    tank: function() {
      return this.$store.state.tank1;
    },
    load: function() {
      return this.$store.state.bullet1.load;
    },
    map: function() {
      return this.$store.state.mapNumber;
    },
    healthColor: function(){
      if(this.tank.tank.life<=30){
        return "red"
      }
      return 'rgb(162, 255, 162)';
    }
  },
  created() {
    bus.$on("fire1", data => {
      data;
      this.$forceUpdate();
    });
  }
};
</script>
<style scoped>
.weapon_block {
  font-size: 30px;
  margin-top: 0;
  border-radius: 10%;
  display: inline-block;
  margin: 0 auto;
  z-index: 10000;
  position: relative;
  width: 60px;
  height: 60px;
}
.chosed_weapon {
  
  border-width: 5px  !important;
  border-color: rgb(255, 112, 243) !important;
}
#weapon1 {
  margin-left: 0%;
border-style: solid;
  border-width: 1px;
  border-color: black;
  background-image: url(../img/bullet1.png);
}
#weapon2 {
  margin-left: 20px;
border-style: solid;
  border-width: 1px;
  border-color: black;
  background-image: url(../img/bullet2.png);

}
#weapon3 {
  margin-left: 20px;
   border-style: solid;
  border-width: 1px;
  border-color: black;
    background-image: url(../img/bullet3.png);

}
.informs {
  border-style: solid;
  border-color: green;
  border-width: 5px;
  display: inline-block;
  position: absolute;
  background-color: white;
  width: 20%;
  height: 150px;
  margin: 0 auto;
}
#health {
  margin: 0 auto;
  
}
#healthBlock{
  height:15px;
  position: relative;
  margin: 0 auto;
  margin-top: 0%;
 }
#inform1 {
     margin: 0 auto;
    text-align: center;
    left: 38%;
    position: relative;
}
h2 {
  position: relative;
  display: inline;
}
</style>