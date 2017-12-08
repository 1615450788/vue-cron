import vueCron from './index.vue';

export let cron=vueCron;

export default {
    install(Vue){
        Vue.components(vueCron.name,vueCron)
    }
}

