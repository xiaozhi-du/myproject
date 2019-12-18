
import VueRouter from 'vue-router'


import HomeContainer from './components/Tabber/HomeContainer.vue'
import MemberContainer from './components/Tabber/MemberContainer.vue'
import ShopcarContainer from './components/Tabber/ShopcarContainer.vue'
import SearchContainer from './components/Tabber/SearchContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from'./components/news/NewsInfo.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo}
    ],
    linkActiveClass:'mui-active'
})


export default router