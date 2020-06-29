<template>
  <div
    v-show="this.showAll"
    id="chooseMapPage"
    v-bind:style="{height: this.chooseMapPage.height+'px',width:this.chooseMapPage.width+'px'}"
  >
    <div id="chooseYourMap"></div>
    <div id="keyMap" v-if="this.guide">
      <h1 class="names" id="name1">{{$store.state.tank2.tank.name}}</h1>
      <h1 class="names" id="name2">{{$store.state.tank1.tank.name}}</h1>
    </div>
    <div id="rule" v-if="this.rule">
      <h1>規則</h1>
      <h2>勝利條件</h2>
      <h3>
        1. 擊中敵方會減少敵方血量，若生命歸零則為輸家。
        <br />2. 若時間到時無人死亡，則分數高者獲勝
        <br />3. 若分數相同，則血量高者獲勝
        <br />4. 若血量也相同，則平手
      </h3>
      <h2>其他</h2>
      <h3>
        1. 若控制無反應，請點擊畫面中間
        <br />2. 若有調整參數，則不保證遊戲正常運作:))
        <br />3. 強烈建議按f11進入全螢幕遊玩
      </h3>
    </div>
    <button
      id="openRule"
      v-if="!this.guide&&!this.modify"
      v-on:click="openRule()"
    >{{openRuleButton}}</button>

    <button
      id="openModify"
      v-if="!this.guide&&!this.rule"
      v-on:click="openModify()"
    >{{openModifyButton}}</button>

    <div id="modify" v-if="this.modify">
      <button id="saveModify" v-on:click="saveModify()">{{saveModifyButton}}</button>
      <button id="recallModify" v-on:click="recallModify()">{{recallModifyButton}}</button>
      <div id="itemHolder1" class="itemHolder">
        <h1>
          Player 1
          <br />
        </h1>
        <h2>
          血量
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.tank1.tank.life"
          placeholder="(預設為100)"
          required="true"
        />
        <h2>
          <br />復活時間
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.tank1.tank.revivingTime"
          placeholder="(預設為1.5)"
          required="true"
        />
        <h2>
          <br />坦克移動速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.tank1.tank.step"
          placeholder="(預設為1.2)"
          required="true"
        />
        <h2>
          <br />砲管旋轉速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.tank1.cannon.degStep"
          placeholder="(預設為0.5)"
          required="true"
        />
        <h2>
          <br />武器1飛行速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet1.special_speed[0]"
          placeholder="(預設為15)"
          required="true"
        />

        <h2>
          <br />武器2飛行速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet1.special_speed[1]"
          placeholder="(預設為20)"
          required="true"
        />

        <h2>
          <br />武器3飛行速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet1.special_speed[2]"
          placeholder="(預設為0)"
          required="true"
        />
        <h2>
          <br />武器1傷害
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet1.damage[0]"
          placeholder="(預設為20)"
          required="true"
        />
        <h2>
          <br />武器2傷害
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet1.damage[1]"
          placeholder="(預設為30)"
          required="true"
        />
        <h2>
          <br />武器3傷害
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet1.damage[2]"
          placeholder="(預設為40)"
          required="true"
        />
        <h2>
          <br />武器3引爆時間(秒)
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet1.mineExplodeTime"
          placeholder="(預設為1)"
          required="true"
        />
      </div>
      <div id="itemHolder3" class="itemHolder">
        <h1>
          Game
          <br />
        </h1>
        <h2>
          遊戲時間
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.count_down"
          placeholder="(預設為90)"
          required="true"
        />
        <h2>
          <br />寶物生成速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.treasures.speed"
          placeholder="(預設為10)"
          required="true"
        />
        <h2>
          <br />地圖3縮小速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.shrinkingSpeed"
          placeholder="(預設為1)"
          required="true"
        />
      </div>
      <div id="itemHolder2" class="itemHolder">
        <h1>
          Player 2
          <br />
        </h1>
        <h2>
          血量
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.tank2.tank.life"
          placeholder="(預設為100)"
          required="true"
        />
        <h2>
          <br />復活時間
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.tank2.tank.revivingTime"
          placeholder="(預設為1.5)"
          required="true"
        />
        <h2>
          <br />坦克移動速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.tank2.tank.step"
          placeholder="(預設為1.2)"
          required="true"
        />
        <h2>
          <br />砲管旋轉速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.tank2.cannon.degStep"
          placeholder="(預設為0.5)"
          required="true"
        />
        <h2>
          <br />武器1飛行速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet2.special_speed[0]"
          placeholder="(預設為15)"
          required="true"
        />

        <h2>
          <br />武器2飛行速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet2.special_speed[1]"
          placeholder="(預設為20)"
          required="true"
        />

        <h2>
          <br />武器3飛行速度
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet2.special_speed[2]"
          placeholder="(預設為0)"
          required="true"
        />
        <h2>
          <br />武器1傷害
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet2.damage[0]"
          placeholder="(預設為20)"
          required="true"
        />
        <h2>
          <br />武器2傷害
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet2.damage[1]"
          placeholder="(預設為30)"
          required="true"
        />
        <h2>
          <br />武器3傷害
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet2.damage[2]"
          placeholder="(預設為40)"
          required="true"
        />
        <h2>
          <br />武器3引爆時間(秒)
          <br />
        </h2>
        <input
          type="number"
          v-model="$store.state.bullet2.mineExplodeTime"
          placeholder="(預設為1)"
          required="true"
        />
      </div>
    </div>
    <button id="button_map1" class="chooseMapPageButton" v-on:click="switchMap(1)"></button>
    <button id="button_map2" class="chooseMapPageButton" v-on:click="switchMap(2)"></button>
    <button id="button_map3" class="chooseMapPageButton" v-on:click="switchMap(3)"></button>
    <button id="button_map4" class="chooseMapPageButton" v-on:click="switchMap(4)"></button>
    <button v-show="!this.modify&&!this.rule" id="showMap" v-on:click="showMap()">{{guideButton}}</button>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "chooseMapPage",
  components: {},
  data() {
    return {
      showAll: false,
      text_direction: "",
      guideButton: "How to control?",
      openModifyButton: "調整參數",
      openRuleButton: "How to win?",
      mapNumber: null,
      saveModifyButton: "儲存為偏好參數",
      recallModifyButton: "使用偏好參數",
      rule: false,
      guide: false,
      modify: false
    };
  },
  methods: {
    switchMap: function(mapNumber) {
      this.mapNumber= mapNumber;
      $("#chooseMapPage").fadeOut(800,this.enter);
    },
    enter: function(){
      this.$store.state.mapNumber = this.mapNumber;

    },
    showMap: function() {
      if (!this.guide) {
        this.guideButton = "Close";
      } else {
        this.guideButton = "How to control?";
      }
      this.guide = !this.guide;
    },
    openRule: function() {
      if (!this.rule) {
        this.openRuleButton = "Close";
      } else {
        this.openRuleButton = "How to win?";
      }
      this.rule = !this.rule;
    },
    openModify: function() {
      if (!this.modify) {
        this.openModifyButton = "Save & Close";
      } else {
        this.openModifyButton = "調整參數";
      }
      this.modify = !this.modify;
      this.typeConvert();
    },
    saveModify: function() {
      this.$store.commit("saveModify");
      this.typeConvert();
    },
    recallModify: function() {
      this.$store.commit("recallModify");
      this.typeConvert();
    },
    typeConvert: function() {
      this.$store.state.count_down = Number(this.$store.state.count_down);
      this.$store.state.treasures.speed = Number(
        this.$store.state.treasures.speed
      );
      this.$store.state.shrinkingSpeed = Number(
        this.$store.state.shrinkingSpeed
      );
      this.$store.state.tank1.tank.life = Number(
        this.$store.state.tank1.tank.life
      );
      this.$store.state.tank1.tank.revivingTime = Number(
        this.$store.state.tank1.tank.revivingTime
      );
      this.$store.state.tank1.tank.step = Number(
        this.$store.state.tank1.tank.step
      );
      this.$store.state.tank1.cannon.degStep = Number(
        this.$store.state.tank1.cannon.degStep
      );
      this.$store.state.bullet1.special_speed[0] = Number(
        this.$store.state.bullet1.special_speed[0]
      );
      this.$store.state.bullet1.special_speed[1] = Number(
        this.$store.state.bullet1.special_speed[1]
      );
      this.$store.state.bullet1.special_speed[2] = Number(
        this.$store.state.bullet1.special_speed[2]
      );
      this.$store.state.bullet1.damage[0] = Number(
        this.$store.state.bullet1.damage[0]
      );
      this.$store.state.bullet1.damage[1] = Number(
        this.$store.state.bullet1.damage[1]
      );
      this.$store.state.bullet1.damage[2] = Number(
        this.$store.state.bullet1.damage[2]
      );
      this.$store.state.bullet1.mineExplodeTime = Number(
        this.$store.state.bullet1.mineExplodeTime
      );
      this.$store.state.tank2.tank.revivingTime = Number(
        this.$store.state.tank2.tank.revivingTime
      );
      this.$store.state.tank2.tank.life = Number(
        this.$store.state.tank2.tank.life
      );
      this.$store.state.tank2.tank.step = Number(
        this.$store.state.tank2.tank.step
      );
      this.$store.state.tank2.cannon.degStep = Number(
        this.$store.state.tank2.cannon.degStep
      );
      this.$store.state.bullet2.special_speed[0] = Number(
        this.$store.state.bullet2.special_speed[0]
      );
      this.$store.state.bullet2.special_speed[1] = Number(
        this.$store.state.bullet2.special_speed[1]
      );
      this.$store.state.bullet2.special_speed[2] = Number(
        this.$store.state.bullet2.special_speed[2]
      );
      this.$store.state.bullet2.damage[0] = Number(
        this.$store.state.bullet2.damage[0]
      );
      this.$store.state.bullet2.damage[1] = Number(
        this.$store.state.bullet2.damage[1]
      );
      this.$store.state.bullet2.damage[2] = Number(
        this.$store.state.bullet2.damage[2]
      );
      this.$store.state.bullet2.mineExplodeTime = Number(
        this.$store.state.bullet2.mineExplodeTime
      );
    },
    show: function() {
      this.showAll = true;
    }
  },
  computed: {
    chooseMapPage: function() {
      return this.$store.state.chooseMapPage;
    }
  },
  beforeCreate() {},
  created: function() {
  
  },
  mounted: function (){
      this.show();
    $("#chooseMapPage").fadeIn(800);
  },
  beforeDestroy() {
    this.$store.state.tank1.tank.x =
      this.$store.getters.currentMap.width - this.$store.state.tank1.tank.width;
    this.$store.state.tank1.tank.y =
      this.$store.getters.currentMap.height -
      this.$store.state.tank1.tank.height;
  }
};
</script>
<style scoped>
#button_map1 {
  background-image: url(../../img/map1.png);
}
#button_map2 {
  background-image: url(../../img/map2.png);
}
#button_map3 {
  background-image: url(../../img/map3.png);
}
#button_map4 {
  background-image: url(../../img/map4.png);
}
.itemHolder {
  display: inline-block;
  position: absolute;
}
#itemHolder1 {
  left: 70%;
}
#itemHolder3 {
  left: 42%;
}
#itemHolder2 {
  left: 10%;
}
#chooseMapPage {
  
    top: 13%;

  border-radius: 30px;
  margin: 0 auto;
  width: 1500px;
  height: 1500px;
  position: relative;
  margin-bottom: 10px;
  background-color: black;
  border-color: black;
  left: 20px;
}
.chooseMapPageButton {
  border-width: 5px;
  border-color: rgb(151, 151, 151);
  border-style: solid;
  border-radius: 20px;
  position: relative;
  margin: 10% 1%;
  height: 30%;
  width: 20%;
}
#keyMap {
  top: 0%;
  border-radius: 30px;
  border-style: solid;
  z-index: 500;
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(../../img/keyMap.png);
}
#rule {
  text-align: left;
  top: 0%;
  border-radius: 30px;
  border-style: solid;
  z-index: 500;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  font-size: x-large;
  padding: 20px;
}
#showMap {
  border-radius: 20px;
    border-width: 2px;
    border-color: rgb(255, 238, 89);
    border-style: solid;
    color: white;
    background: transparent;
    position: absolute;
    height: 15%;
    width: 26%;
    z-index: 501;
    margin-left: -86%;
    margin-top: 44%;
    font-size: 50px;
}
.names {
  display: block;
  position: relative;

  font-size: xxx-large;
}
#name1 {
  left: -25%;
  top: 26%;
}
#name2 {
  left: 26%;
  top: 16%;
}
#chooseYourMap {
  background: url(../../img/chooseYourMap.png);
  position: relative;
  margin: 0 auto;
  top: 6%;
  height: 146px;
  width: 1000px;
}
#openRule {
 border-radius: 20px;
    border-width: 2px;
    border-color: rgb(136, 211, 255);
    border-style: solid;
    color: white;
    background: transparent;
    position: absolute;
    height: 15%;
    width: 26%;
    z-index: 501;
    margin-left: 33%;
    margin-top: 44%;
    font-size: 50px;
}
#openModify {
    border-radius: 20px;
    border-width: 2px;
    border-color: rgb(255, 144, 222);
    border-style: solid;
    color: white;
    background: transparent;
    position: absolute;
    height: 15%;
    width: 26%;
    z-index: 501;
    margin-left: 64%;
    margin-top: 44%;
    font-size: 50px;
}
#saveModify {
 border-radius: 20px;
    border-width: 2px;
    border-color: rgb(136, 211, 255);
    border-style: solid;
    color: white;
    background: transparent;
    position: absolute;
    height: 15%;
    width: 26%;
    z-index: 501;
       margin-left: -48%;
    margin-top: 53.5%;
    font-size: 50px;
}
#recallModify {
  border-radius: 20px;
    border-width: 2px;
    border-color: rgb(255, 238, 89);
    border-style: solid;
    color: white;
    background: transparent;
    position: absolute;
    height: 15%;
    width: 26%;
    z-index: 501;
          margin-left: -14%;
    margin-top: 53.5%;
    font-size: 50px;
}
#modify {
  background-color: white;
  top: 0%;
  border-radius: 30px;
  border-style: solid;
  z-index: 400;
  position: absolute;
  height: 100%;
  width: 100%;
}
h2 {
  margin: 10px auto;
}
p {
  display: inline;
}
</style>