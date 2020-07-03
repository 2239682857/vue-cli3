import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import api from './interface'
import global from '@/utils/global.js'
import {baseUrl} from '@/utils/global.js'
import './icons'
import uploader from 'vue-simple-uploader'

Vue.use(uploader)
Vue.config.productionTip = false;
Vue.use(ElementUI);

axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = true;
Vue.prototype.$ajax = axios;
Vue.use(api)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
