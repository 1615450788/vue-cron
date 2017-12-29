<style lang="less" scoped>
    .cron{
        width: 400px;
        margin: 0 auto;
        margin-top: 100px;
        h1{
            font-size: 50px;
            text-align: center;
        }
    }
</style>

<template>
    <div class="cron">
        <h1>vue-cron</h1>
        <el-popover v-model="cronPopover">
            <cron :data="cron" @change="changeCron" @close="cronPopover=false"></cron>
            <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
        </el-popover>

    </div>
</template>

<script>
    import {cron} from '../src/index';

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