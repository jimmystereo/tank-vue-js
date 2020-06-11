<template>
  <div
    id="chooseMapPage"
    v-bind:style="{height: this.chooseMapPage.height+'px',width:this.chooseMapPage.width+'px'}"
  >
    <div id="chooseMapPageImg">
      <button id = "button_map1" class="chooseMapPageButton" v-on:click="switchMap(1)">Map 1</button>
      <button class="chooseMapPageButton" v-on:click="switchMap(2)">Map 2</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "chooseMapPage",
  components: {},
  data() {
    return {
      text_direction: ""
    };
  },
  methods: {
    switchMap: function(mapNumber) {
      this.$store.state.mapNumber = mapNumber;
    }
  },
  computed: {
    chooseMapPage: function() {
      return this.$store.state.chooseMapPage;
    }
  },
  created: function() {}
};
</script>
<style scoped>
#chooseMapPage {
    border-radius: 30px;
  margin: 0 auto;
  width: 1500px;
  height: 1500px;
  position: relative;
  margin-bottom: 10px;
  background-color: rgb(96, 133, 37);
  border-color: black;
  left: 20px;
}
.chooseMapPageButton {
  border-radius: 20px;
  position: relative;
  margin: 10% 1%;
  height: 60%;
  width: 40%;
}

#chooseMapPageImg {
  background-color: black;
  border-radius: 20px;
  top: 5%;
  position: relative;
  margin: 0 auto;
  height: 90%;
  width: 90%;
}

p {
  display: inline;
}
</style>