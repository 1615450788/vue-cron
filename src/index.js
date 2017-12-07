import Vue from 'vue';
import ElementUI from 'element-ui';
import vueCron from './index.vue';

Vue.use(ElementUI);

Vue.config.devtools = false;

const app = new Vue({
    el: '#app',
    template: '<vue-cron/>',
    components: { vueCron }
});
