
import VueRouter from 'vue-router'


import HomeContainer from './components/Tabber/HomeContainer.vue'
import MemberContainer from './components/Tabber/MemberContainer.vue'
import ShopcarContainer from './components/Tabber/ShopcarContainer.vue'
import SearchContainer from './components/Tabber/SearchContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from'./components/news/NewsInfo.vue'

import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'

import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:PhotoList},
        {path: '/home/photoinfo/:id', component:PhotoInfo},
        {path:'/home/goodslist',component:GoodsList},
        {path: '/home/goodsinfo/:id', component:GoodsInfo,name:'goodsinfo'},
    ],
    linkActiveClass:'mui-active'
})


export default router