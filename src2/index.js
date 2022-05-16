import vueCron from './index.vue';

export let cron=vueCron;

export default {
    install(Vue){
        Vue.component(vueCron.name,vueCron)
    }
}

