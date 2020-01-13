import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

import moment from 'moment'

Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})


// import{ Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);


import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


 import VuePreview from 'vue-preview'
 Vue.use(VuePreview)
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })


import router from './router.js'

import app from './App.vue'



let vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router,
    
})

      