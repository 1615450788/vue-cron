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

Vue.use(VueCron)

//局部引入
import {cron} from 'vue-cron'

export default {
    template: '<cron/>',
    components: { cron }
}
```


## 事件
- change(cronText)
- close

## 大小
- 27k