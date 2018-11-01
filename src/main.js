// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueScroller from 'vue-scroller'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import { Tabs } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
// import { Tabs } from 'element-ui'
Vue.use(VueScroller)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)
// Vue.use(Tabs)
Vue.prototype.axios=axios
Vue.config.productionTip = false
import Myunilt from './assets/js/myunilt.js'
Vue.prototype.Myunilt=Myunilt
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
