Link -> https://jimmystereo.github.io/final/
# final_project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# tank-vue.js
![](https://i.imgur.com/1EwPi5G.jpg)
## 簡介
使用vue.js框架製作的單機雙人小遊戲。

## 特點&亮點
- ### 參數調整
    市面上許多網頁遊戲的參數都是寫死的，覺得遊戲不平衡也無法自行調整，因此我開放使用者調整參數，開發出不同的玩法，像如果把地雷的移動速度提高可以變成飛彈等玩法。我想參數調整是未來遊戲的趨勢，因此做此遊戲來測試其效果。
- ### 畫面處理
    畫面操作極為流暢，畫面更新快速，有別於一般html開發出來的小遊戲，使用草地等素材，不僅選單畫面清晰，在爆炸、復活等細節也處理到味，儼然有3A級大作的水準。
- ### 音效
    使用逼真音效，聲音處理細膩，提升開炮打擊爽感。
- ### 演算法判斷
    演算法極為精準，擊中、碰撞判定不會有模糊的空間。
- ### 遊戲機制
    考量到許多遊玩上的感受，經過許多實際測試後加入寶物、類似PUBG的地圖縮小等機制。

## 怎麼使用?
進入地圖選單後會附有說明書，使用者只要照著說明操作。遊玩方式也會清楚的寫在裡面。另外介面設計非常清楚流暢，不會有任何問題!
    
## 技術

遊戲使用html, css, javascript搭配vue.js框架完成。
程式碼符合物件導向原則，每個階段有不同的function和原件來控制。像是fly()負責子彈飛行處理、checkHit會負責持續偵測是否擊中等，在開發上可以分階段開發，也減少處理bug時間。
- #### vue.js
    在vue框架中，可將data binding在元素上，舉例來說:

```
<template>
  <div
    id="tank1"
    class="tanks"
    ref="tank1"
    v-bind:style="{marginLeft: this.tank.x+'px',marginTop: this.tank.y+'px',height: this.tank.height+'px',width:this.tank.width+'px', backgroundColor: this.tank.color}"
  >
    <div id="tank1_cannon" v-bind:style="{transform:'rotate('+this.cannon.deg+'deg)'}">
      <div id="cannon_top"></div>
    </div>
    <h5 id="name">{{tank.name}}</h5>
  </div>
</template>
<script>
    var moveCannonTime;
    var moveTankTime;
    import moveTank from "../mixins/moveTank";
    import moveCannon from "../mixins/moveCannon";
    import collision from "../mixins/collision";
    export default {
      name: "tank1",
      data() {
        return {};
      },
      methods: {},
      computed: {
        bullet: function() {
          return this.$store.state.bullet1;
        },
        tank: function() {
          return this.$store.state.tank1.tank;
        },
        cannon: function() {
          return this.$store.state.tank1.cannon;
        },
        opponent: function() {
          return this.$store.state.tank2;
        }
      },
      mixins: [moveTank, moveCannon, collision],
      created() {
        moveCannonTime = setInterval(() => this.moveCannon(), 10);
        moveTankTime = setInterval(() => this.moveTank(), 10);
      },
      beforeDestroy() {
        window.clearInterval(moveCannonTime);
        window.clearInterval(moveTankTime);
      }
    };
    </script>
    <style scoped>
    #tank1 {
      border-color: rgb(0, 71, 0);
    }
    #cannon_top {
      z-index: 100;
      border-radius: 50%;
      position: relative;
      left: 50%;
      top: calc(-50% - 5px);
      height: 50px;
      width: 50px;
      background-color: rgb(26, 68, 26);
      margin: 0 auto;
    }
    #tank1_cannon {
      border-radius:15px;
      transform-origin: right center;
      position: relative;
      top: calc(50% - 10px);
      left: -50%;
      z-index: 50;
      height: 20px;
      width: 80px;
      background-color: black;
      margin: 0 auto;
    }
    #name {
      top: 110%;
      left: 16%;
      font-size: x-large;
      position: absolute;
      margin: 0 auto;
      text-align: center;
    }
      </style>`

```    
這段程式碼就是我寫來控制其中一台坦克的，在這個檔案內會有跟它相關的function,data和style，操作元素和取得資料非常方便。

- ### vuex
     vuex是一個vue的套件，能將其中使用的資料儲存在單一資料庫中，方便取用和修改。

- ### jquery
    利用jquery來實現fadeIn(), fadeOut()等功能，提升遊戲質感。
    
- ### css
    用在指定座標、顏色、尺寸等
- ### html
    多使用到div和button，當作物件來做移動、選取等操作
    
## 完成功能
- ### 坦克移動
     利用css的margin-left和margin-top來控制div的位置。配合key-event可達成控制方向。
- ### 碰撞機制
     利用座標和坦克半徑來判斷是否碰撞到牆或是敵方坦克。
- ### 砲管旋轉
     利用css的transform特性來實現div旋轉。
- ### 發射
     將上述旋轉的角度記下，透過三角函數轉換為飛行向量，使子彈朝指定方向飛行。
- ### 子彈碰撞
     利用子彈座標和敵方座標距離判定，若碰撞則判定為擊中。
     用同樣方法來判定是否碰撞到牆。
- ### 擊中
     被判定為擊中後，坦克會減少血量並進入一段無敵的復活時間，以維持遊戲平衡，這邊使用邏輯來使敵方無法擊中，並用setInterval來產生復活的閃爍動畫。
- ### 切換武器
     按下切換武器鍵時，利用css改變子彈外觀，同時改變其移動速度、尺寸、傷害等，提升遊玩性，目前總共有三種武器可以選。
- ### 地雷
     地雷為較特殊的武器，它利用與敵方距離來判斷是否觸發引爆，也可以手動引爆。在引爆前會利用setTimeout和setInterval來閃爍引爆警示，非常炫炮。
- ### 地圖
     地圖使用我寫好的模板，方便快速開發、新增牆壁等。其中特別的是地圖三的縮小機制，利用setInterval來慢慢縮小地圖，非常刺激有趣!
- ### 寶物
     寶物利用setInterval和random隨機在地圖上生成，撿到可以加分，提升遊玩性。
- ### 參數調整
    資料都動態操作，給玩家調整參數的空間，自己平衡遊戲!
- ### 音效
    使用網路上免費音效和audio play技術來產生開炮、爆炸等音效。
## 資訊呈現
- ### 特效
    轉場皆使用淡出淡入提升質感
- ### 使用圖片
    使用的圖片都是我自己畫ㄉ 
- ### 開始畫面
    坦克草圖搭上金屬色的enter按鈕給玩家充足的帶入感
- ### 選擇地圖頁
    地圖選擇按鈕富有設計感，也提供了充足的說明頁面，像操作說明和規則等。
- ### 遊玩畫面
    畫面顏色溫和不傷眼。另外上方資訊攔可以看到選擇的武器、子彈數、血量和分數等，非常的完整。
## 版本資訊 6/8 ~ 6/22
 ![](https://i.imgur.com/R1eGKnB.png)
 #### 下面影片為開發初期操作過程
{%youtube KojiVVfNS20%}
### 問題解決&功能完成順序
1. #### 製造出地圖範圍和可以移動的方塊
        這個時候對vue還不熟悉，花了很多時間研究怎麼傳遞資料，和將margin-left等轉換為座標，訂坐標系也是一個很麻煩的問題。
2. #### 可以旋轉的砲管
        學會了怎麼旋轉div。
3. #### 碰撞機制
        演算法做了超久，很多要判斷的條件，算是整個程式的核心。
4. #### 加入單一武器子彈發射和擊中判定
        因為子彈的角度也要旋轉，集中判定也會有誤差，花了很多時間想轉向微調的演算法。
5. #### 加入多武器和地圖障礙
        在處理地雷上花了超多時間，因為state超多個，所以是整個程式bug處理最久的地方。
6. #### 加入武器、玩家資訊欄
        排版很難。
7. #### 加入寶物機制
        因為可以套用前面的碰撞演算法，算很簡單的部分
8. #### 加入首頁、選擇地圖頁和結束頁和倒數計時器
        簡單! 排版很繁瑣。
        
9. #### 加入參數調整機制、說明書
        花了很多時間將寫死的參數改成變數存入資料庫。
10. #### 加入復活機制
        和地雷爆炸相同的動畫方式，較熟練了。
11. #### 美化畫面、加入圖片背景
        上網尋找適合的素材使用，和加入勝利等畫面。
12. #### 音效
        解決audio　tag失效問題，加入音效。
