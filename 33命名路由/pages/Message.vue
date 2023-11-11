<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 这是跳转路由的基本写法，携带query参数 to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->


                <!-- 这是跳转路由的基本写法，携带query参数 to的字符串写法 -->
                <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>
            <!--   -->
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
    }
}
</script>