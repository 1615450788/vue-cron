# vue-cron
这是一个cron表达式生成插件,基于vue与element-ui实现
[demo](https://1615450788.github.io/vue-cron/dist/index)


## 依赖
- Vue 2.0.0+
- element-ui 2.0.0+

## 安装方式
```
npm install vue-cron
```

## 引入方式
```javascript
//全局引入
import Vue from 'vue'
import VueCron from 'vue-cron'

Vue.use(VueCron);

//局部引入
import {cron} from 'vue-cron'

export default {
    template: '<cron/>',
    components: { cron }
}
```

## 示例
```vue
<template>
    <div class="cron">
        <h1>vue-cron</h1>
        <el-popover v-model="cronPopover">
            <cron @change="changeCron" @close="cronPopover=false" i18n="en"></cron>
            <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
        </el-popover>
    </div>
</template>

<script>
    import {cron} from 'vue-cron';

    export default {
        components: { cron },
        data(){
            return {
                cronPopover:false,
                cron:''
            }
        },
        methods: {
            changeCron(val){
                this.cron=val
            },
        },
    }
</script>
```

在示例中我使用了es6(es2015)语法,你可能需要引入babel-polyfill才能正常运行,或者你也可以用es5的写法

## 参数

- i18n

    - 参数 `{String} language` 目前仅支持`en|cn`
    
    国际化支持

## 事件
- change(cronText)

    - 参数：`{String} cronText` cron表达式的值
    
    当corn表达式的值发生变化变化时触发
    
- close()

    - 参数：无
    
    当点击corn表达式选择框取消按钮时触发

## 大小
- 27k

## 联系方式

邮箱 : 1615450788@qq.com

有任何问题请发Issues或者邮箱联系我-.-  谢谢!
