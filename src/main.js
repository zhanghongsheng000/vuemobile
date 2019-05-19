// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
import $http from '@/assets/js/http'
//import BaiduMap from 'vue-baidu-map'
/*Vue.use(BaiduMap,{
  ak: 'pMudpSd5Q6aH24EGnSWoqNpcFdDRjqll'
})*/
Vue.prototype.$http = $http
Vue.use(ElementUI);
Vue.use(Mint);
Vue.config.productionTip = false
import Vconsole from 'vconsole'
import JJS from '@/plugins/pluginStarter'
Vue.use(JJS)
/*import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);*/
/* eslint-disable no-new */
new Vconsole()
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})

