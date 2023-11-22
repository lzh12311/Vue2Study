<template>
    <!-- 路由组件 -->
    <!-- 切换走的路由组件 是被销毁了 -->
    <div>
        <h2>我是Home组建的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link  class="list-group-item " active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link  class="list-group-item " active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <hr>
          
           <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    beforeDestroy() {
        console.log('home 要被卸载了')
    },
    mounted() {
        console.log('123', this)
        window.homeRoute = this.$route
        window.homeRouter = this.$router
    }
}
</script>