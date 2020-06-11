<template>
  <div
    id="startPage"
    v-bind:style="{height: this.startPage.height+'px',width:this.startPage.width+'px'}"
  >
    <div id="startPageImg">
      <button class="startPageButton" v-on:click="switchMap()">Start Game!</button>
    </div>
  </div>
</template>

<script>
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
      this.$store.state.mapNumber++;
      console.log(this.$store.state.mapNumber);
    }
  },
  computed: {
    
    startPage: function(){
      return this.$store.state.startPage;
    }
  },
  created: function() {}
};
</script>
<style scoped>
#startPage {
  border-radius: 30px;

  margin: 0 auto;
  width: 1500px;
  height: 1500px;
  position: relative;
  margin-bottom: 10px;
  background-color: rgb(37, 52, 133);
  border-color: black;
  left: 20px;
}
.startPageButton {
  border-radius: 20px;
  position: relative;
  margin: 35% auto;
  height: 20%;
  width: 20%;
}
#startPageImg {
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