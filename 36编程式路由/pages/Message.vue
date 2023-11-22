<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 这是跳转路由的基本写法，携带query参数 to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->


                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->



                <!-- 这是跳转路由的基本写法，携带query参数 to的对象写法 -->
                <!-- <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link> -->
                <!-- 这是跳转路由的基本写法，携带params参数 to的对象写法 -->

                <!-- 替换当前栈顶的元素， 栈顶以前的元素没有replace 还是没有replace -->
                <router-link replace :to="{
                    name:'xiangqing',
                    query:{
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>
                <!-- 编程式 路由 不再使用router link来跳转页面  而是使用push 或者replace -->
                <button @click="pushShow(m)">pushCheck</button>
                <button @click="replaceShow(m)">replaceCheck</button>

                <!-- params 情况下, 只能使用name -->
            </li>


        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
// import { query } from 'express';
// import { md } from 'node-forge';
// import path from 'path';

export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ]
        }
    },
    methods:{
        // 自己实现的 前进和后退
        pushShow(m){
            this.$router.push({
                name:'xiangqing',
                    query:{
                        id: m.id,
                        title: m.title
                    }
            })
        },
        replaceShow(m){
            this.$router.replace({
                name:'xiangqing',
                    query:{
                        id: m.id,
                        title: m.title
                    }
            })
        },
        goMethod(){
            this.$router.go(3)
        }
    }
}
</script>