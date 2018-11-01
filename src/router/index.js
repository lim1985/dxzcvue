import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPages from '../pages/index'
import BsfwPages from '../pages/bsfw'
import newslistload from '@/components/newslistload'
import dxgkPages from '../pages/dxgk.vue'
 import zwgkPages from '../pages/zwgk2.vue'
 import depmorepage from '@/components/DepmorePage'
 import r_categorylist from '@/components/r_Category'
 import r_Depmentslist from '@/components/r_Depments'
 import r_banshilist from '@/components/r_banshilist'
  import get_mgtv from '@/components/getMGTV'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newslistload',
      component: newslistload
    },
    {
      path: '/depmorepage',
      name: 'depmorepage',
      component: depmorepage
    },
    {
      path: '/dxgk',
      name: 'dxgk',
      component: dxgkPages
    },
    {
      path: '/zwgk',
      name: 'zwgk',
      component: zwgkPages
    },
    {
      path: '/myscrolltop',
      name: 'indexPages',
      component: indexPages
    },
    {
      path: '/bs' ,
      name: 'BsfwPages',
      component: BsfwPages
    },
    {
      name:'r_categorylist',
      path:'/category/:id/:ModelID',
      component:r_categorylist
    },
    {
      name:'r_Depmentslist',
      path:'/Depments/:id/:ModelID',
      component:r_Depmentslist
    },
    {
      name:'r_banshilist',
      path:'/banshilist/:id/:ModelID',
      component:r_banshilist
    }    ,
    {
      name:'get_mgtv',
      path:'/get_mgtv',
      component:get_mgtv
    }

    
  ]
})
