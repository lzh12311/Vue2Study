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

    }
}
</script>