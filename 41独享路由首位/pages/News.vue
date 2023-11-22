<template>
    <div>
        <ul>
            <ul>
                <li :style="{ opacity }">你好</li>
                <li>news001 <input type="text"></li>
                <li>news002 <input type="text"></li>
                <li>news003 <input type="text"></li>
            </ul>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'News',
    data() {
        return {
            opacity: 1
        }
    },
    activated(){
        console.log('activated')
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16)
    },
    deactivated(){
        console.log('anti--activated')
        clearInterval(this.timer)
    },
    // beforeDestroy(){
    //     clearInterval(this.timer)
    // },

        //挂载
    // mounted() {
        // this.timer = setInterval(() => {
        //     this.opacity -= 0.01
        //     if (this.opacity <= 0) this.opacity = 1
        // }, 16)
    // }

}
</script>