//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// 创造一个对象 router 
export default new VueRouter({
    routes: [
        //每一个对象都是key-valued
        {
            //给路由配置名字  跳转时简化代码
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            //开始书写子路由 不需要加斜杠  
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            //路由参数： 
                            name: 'xiangqing',

                            path: 'detail',
                            component: Detail
                        }
                    ]
                }
            ]
        },
        ///以上是一级路由


        //
    ]
})

