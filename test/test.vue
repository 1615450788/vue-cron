<style lang="less" scoped>

</style>

<template>
    <div>
        <el-popover v-model="cronPopover" placement="right">
            <Vue-Cron :data="cron" @change="changeCron" @close="cronPopover=false"></Vue-Cron>
            <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
        </el-popover>

    </div>
</template>

<script>
    import VueCron from '../src/index.vue';

    export default {
        data(){
            return {
                cronPopover:false,
                cron:''
            }
        },
        components: { VueCron },
        computed: {},
        methods: {
            changeCron(val){
                this.cron=val
            },
        },
        mounted(){

        }
    }
</script>