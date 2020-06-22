<template>
  <div
    id="endPage"
    v-show="this.showAll"
    v-bind:style="{height: this.endPage.height+'px',width:this.endPage.width+'px',}"
  >
    <div id="endPageImg" v-bind:class="{haveWinner:getWinner}">
      <h1 id="winner" v-if="this.getWinner">winner: {{winner[0].tank.name}}</h1>
      <h1 id="noWinner" v-if="!this.getWinner">No winner!</h1>
      <button id="restart" class="endPageButton" v-on:click="reset()">Restart Game!</button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import resetState from "../../mixins/reset";
export default {
  name: "endPage",
  components: {},
  data() {
    return {
      showAll: false,
      getWinner: true
    };
  },
  methods: {
    reset: function() {
      $("#endPage").fadeOut(800, this.resetState);
    },
    show: function() {
      this.showAll = true;
    }
  },
  computed: {
    winner: function() {
      return this.$store.state.winner;
    },
    endPage: function() {
      return this.$store.state.endPage;
    },
    load: function() {
      if (this.winner[0].tank.id == 1) {
        return this.$store.state.bullet1.load;
      } else {
        return this.$store.state.bullet2.load;
      }
    }
  },
  mixins: [resetState],
  beforeCreate: function() {
    if (this.$store.state.winner[0] == null) {
      this.getWinner = false;
    }
  },
  created: function() {},
  mounted: function() {
    this.show();

    $("#endPage").fadeIn(1000);
  }
};
</script>
<style scoped>
#endPage {
  border-radius: 30px;

  margin: 0 auto;
  width: 1500px;
  height: 1500px;
  position: relative;
  margin-bottom: 10px;
  background-color: rgb(255, 224, 122);
  border-color: black;
  left: 20px;
}
.endPageButton {
  border-radius: 20px;
  position: relative;
  margin: 50% auto;
  height: 5%;
  width: 16%;
  border-width: 3px;
  border-color: yellow;
  background-color: transparent;
}

.haveWinner {
  background-image: url(../../img/winner.png) !important;
}
#endPageImg {
  background-image: url(../../img/noWinner.png);
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  top: 5%;
  position: relative;
  margin: 0 auto;
  height: 90%;
  width: 90%;
}

#winner {
  text-align: left;
  left: -0.5%;
  font-size: 81px;
  font-style: italic;
  position: absolute;
  left: 33%;
  top: -4%;
}
#noWinner {
  text-align: center;
  font-size: 115px;
  font-style: italic;
  position: absolute;
  left: 28%;
}
</style>