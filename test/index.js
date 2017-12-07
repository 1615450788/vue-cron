import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import Test from '../test/test.vue';

Vue.use(ElementUI);

Vue.config.devtools = false;

const app = new Vue({
    el: '#app',
    template: '<test/>',
    components: { Test }
});
