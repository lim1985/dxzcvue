<template>
  <div id="app">
   
    <my-header></my-header>
 
    <Center>
      <router-view></router-view>
    </Center>
  <my-footer></my-footer>
  </div>
</template>

<script>
  import './assets/js/jquery-1.8.3.min.js'
  import './assets/js/flexible.js'
  //import './assets/js/idangerous.swiper.min.js'
  //import './assets/js/amazeui.js'

  import './assets/js/iscroll.js'
  import './assets/css/layout.css'
  import './assets/css/iconfont.css'
  import './assets/css/amazeui.min.css'
  import {bus} from './bus.js'
  import myHeader from './components/header.vue'
  import myBanner from './components/banner.vue'

  import myFooter from './components/footer'
  import mynewsList from './components/newslist'
  import Vue from 'vue'

export default {
  name: 'app',
  data() {
    return {
      newsList:false
    }
  },
components: {
  myHeader,myBanner,myFooter,mynewsList
},
  created()
  {
  	bus.$on('top',(text)=>{
  		alert(text)
  })
  }
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
