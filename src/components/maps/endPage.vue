<template>
  <div
    id="endPage"
    v-show="this.showAll"
    v-bind:style="{height: this.endPage.height+'px',width:this.endPage.width+'px',}"
  >
    <div id="endPageImg" v-bind:class="{haveWinner:champ}">
      <h1 id="winner" v-if="this.champ">&nbsp; winner: {{winner[0].tank.name}} &nbsp;</h1>
      <h1 id="noWinner" v-if="!this.champ">No winner!</h1>
      <button id="restart" class="endPageButton" v-on:click="reset()">EXIT</button>
    </div>
    <audio id="winner_audio" muted="muted">
      <source src="../../audio/winner_audio.wav" type="audio/wav" />
    </audio>
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
      getWinner: false
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
      if (this.champ) {
        return this.$store.state.winner;
      }
      return this.$store.state.tank1;
    },
    endPage: function() {
      return this.$store.state.endPage;
    },
    champ: function() {
      return this.$store.state.champ;
    }
  },
  mixins: [resetState],
  beforeCreate: function() {},
  created: function() {},
  mounted: function() {
    this.show();

    $("#endPage").fadeIn(1000);
    if (this.champ) {
      let a = $("#winner_audio")[0];
      a.load();
      a.play();
    }
  }
};
</script>
<style scoped>
#endPage {
  border-radius: 30px;
  top: 13%;
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
  left: 39%;
  height: 5%;
  width: 16%;
  border-width: 3px;
  border-color: black;
  background-color: white;
}

.haveWinner {
  background: url(../../img/winner2.png) !important;
}
#endPageImg {
  background: url(../../img/noWinner.png);
  background-color: rgb(255, 255, 255);
  border-color: white;
  border-style: solid;
  border-width: 5px;
  border-radius: 20px;
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}

#winner {
  text-align: center;
  font-size: 149px;
  font-style: italic;
  position: absolute;
  left: 15%;
  width: 70%;
  background-color: wheat;
  top: 29%;
}
#noWinner {
  text-align: center;
  font-size: 149px;
  font-style: italic;
  position: absolute;
  left: 15%;
  width: 70%;
  background-color: wheat;
  top: 29%;
}
</style>