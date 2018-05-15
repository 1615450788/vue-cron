import Vue from 'vue';
import ElementUI from 'element-ui';
import cron from '../src';
import 'element-ui/lib/theme-chalk/index.css'
import Test from '../test/test.vue';

Vue.use(cron);
Vue.use(ElementUI);
const isProd = process.env.NODE_ENV === 'production';
Vue.config.devtools = !isProd;
Vue.config.silent = isProd;
Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    template: '<test/>',
    components: { Test }
});
