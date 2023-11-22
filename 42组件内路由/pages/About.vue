<template>
    <div>
        我是about
    </div>
</template>
<script>


export default {
    name: 'About',
    beforeDestroy() {
        console.log('about 要被卸载了')
    },
    mounted() {
        console.log('123456', this)
        window.aboutRoute = this.$route
        window.aboutRouter = this.$router

    },
    //通过路由规则 进入该组件时被调用  和前置后置还不太一样  前后置只在全局首位
    beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem('school')==='atguigu') {
                console.log('有权限')
                next()
            } else {
                alert('wrong')

            }
        }
        else {
            console.log('没有权限！！！！')

            next()
        }
    },
    //通过路由规则 离开该组件时被调用

    beforeRouteLeave(to,from,next){
        console.log('窃走了')
        next()
    }
}
</script>