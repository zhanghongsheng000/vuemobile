import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import map from '@/components/map'
import zjyf from '@/components/zjyf'
import Building from '@/components/Building'
import about_us from '@/components/about_us'
import connect_us from '@/components/connect_us'
import download_app from '@/components/download_app'
import talent from '@/components/talent'
import search from '@/components/search'
import building_details from '@/components/building_details'
import housesources_details from '@/components/housesources_details'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/zjyf',
      name: 'zjyf',
      component: zjyf
    },
    {
      path: '/Building',
      name: 'Building',
      component: Building
    },
   {
      path: '/about_us',
      name: 'about_us',
      component: about_us
   },
   {
      path: '/connect_us',
      name: 'connect_us',
      component: connect_us
   },
   {
      path: '/download_app',
      name: 'download_app',
      component: download_app
   },
    {
      path: '/talent',
      name: 'talent',
      component: talent
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
   {
      path: '/building_details',
      name: 'building_details',
      component: building_details
   },
    {
      path: '/housesources_details',
      name: 'housesources_details',
      component: housesources_details
   }
  ]
})
