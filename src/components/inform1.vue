<template>
  <div id="inform1" class="informs" style="display= inline-flex">
    <div id="health">
      GREEN: {{tank.tank.life}}
    </div>
    <div id="weapon1" v-bind:class="{weapon_block:true,chosed_weapon:this.type1}">{{bullet.load[0]}}</div>
    <div id="weapon2" v-bind:class="{weapon_block:true,chosed_weapon:this.type2}">{{bullet.load[1]}}</div>
    <div id="weapon3" v-bind:class="{weapon_block:true,chosed_weapon:this.type3}">{{bullet.load[2]}}</div>
  </div>
</template>

<script>
export default {
  name: "inform1",
  data() {
    return {};
  },
  methods: {
  },
  computed: {
    type1: function() {
      return this.$store.state.bullet1.tmpType == 1;
    },
    type2: function() {
      return this.$store.state.bullet1.tmpType == 2;
    },
    type3: function() {
      return this.$store.state.bullet1.tmpType == 3;
    },
    bullet: function() {
      return this.$store.state.bullet1;
    },
    tank: function() {
      return this.$store.state.tank1;
    }
  }
};
</script>
<style scoped>
.weapon_block {
  border-radius: 10%;
  display: inline-block;
  margin: 0 auto;
  z-index: 10000;
  position: relative;
  background-color: rgb(165, 112, 42);
  width: 40px;
  height: 40px;
}
.chosed_weapon {
  background-color: rgb(238, 9, 9);
  width: 40px;
  height: 40px;
}
#weapon1 {
  margin-left: 0%;
}
#weapon2 {
  margin-left: 10px;
}
#weapon3 {
  margin-left: 10px;
}
#health {
  border-radius: 10%;
  display: inline-block;
  margin: 0 auto;
  z-index: 10000;
  position: relative;
  background-color: rgb(97, 165, 42);
  width: 100%;
  height: 20%;
  margin-left: 0%;
}
.informs{
    position: relative;
    background-color : rgb(238, 121, 75);
    width: 20%;
    margin: 0 auto;
}
#inform1{
    left: 30%;
}
</style>