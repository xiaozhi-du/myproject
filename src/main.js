import Vue from 'vue'
import{ Header } from 'mint-ui'
//import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)

import './lib/mui/css/mui.min.css'

import app from './App.vue'



let vm = new Vue({
    el:'#app',
    render:c=>c(app)
})