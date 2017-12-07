import vueCron from './index.vue';

export default {
    install(Vue){
        Vue.components(vueCron.name,vueCron)
    }
}

