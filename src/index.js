import vueCron from './index.vue';

export let vueCron=vueCron;

export default {
    install(Vue){
        Vue.components(vueCron.name,vueCron)
    }
}

