<style lang="less" scoped>

</style>

<template>
    <div>
        <el-popover v-model="cronPopover" placement="right">
            <cron :data="cron" @change="changeCron" @close="cronPopover=false"></cron>
            <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
        </el-popover>

    </div>
</template>

<script>
    import {cron} from '../build/cron.min';

    export default {
        data(){
            return {
                cronPopover:false,
                cron:''
            }
        },
        components: { cron },
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