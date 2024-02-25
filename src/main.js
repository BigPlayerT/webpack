
import Vue from 'vue'
import { name } from './testa.js'
import MApp from './App.vue'

import './father.less'
let a = '这是入口文件1'
console.log(a)
console.log(name)

// var app = new window.Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!',
//         a: 123
//     },
//     template: '<div>{{message}}12{{a}}</div>',
//     })
console.log('-s-s-s-s-s-s-', MApp)
const Test = window.Vue.component('App', { 
    template: '<div>这是test组件{{a}}</div>',
    data () {
        return {
            a: '2'
        }
    },
    created () {
        console.log('创建')
    },
    mounted() {
        console.log('挂载')
    },
    unmounted () {
        console.log('消除')
    }
})
const App = window.Vue.component('App', { 
    template: '<div class="father">{{a}}<Test/><MApp/><aTest/></div>',
    data () {
        return {
            a: '2'
        }
    },
    components: {
        Test,
        MApp,
        aTest: {
            template: '<div>这是a测试组件</div>'
        }
    },
    created () {
        console.log('创建')
    },
    mounted() {
        console.log('挂载')
    },
    unmounted () {
        console.log('消除')
    }
})

const vm = new Vue({
    render: h => h(App),
  }).$mount('#app')
