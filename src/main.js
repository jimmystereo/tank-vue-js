import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store'
import $ from 'jquery'
Vue.config.productionTip = true

export const bus = new Vue();

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')

//關閉預設方向鍵滑動
window.addEventListener("keydown", function (e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

$('body')[0].style.zoom=0.75;
