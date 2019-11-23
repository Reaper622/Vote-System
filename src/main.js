import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入reset.css
import '@common/reset.css'
// 引入全局样式
import '@common/common.css'
// 引用Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// Swiper styles
import 'swiper/dist/css/swiper.css'

// 引入 Axios
import Axios from 'axios'
// 将axios绑定为原型方法 使用时为 this.$axios
Vue.prototype.$axios = Axios

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
