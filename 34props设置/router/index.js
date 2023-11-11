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
                            // 在这里声明 要传递参数 
                            //path :'detail/:id/：titile'
                            path: 'detail',
                            component: Detail,
                            //第一红写法: 值为一个对象, 该对象中的所有key -value 都会以props的形式传给 detail 组件 
                            //这种方法用的少 
                            // props:{
                            //     a:1, b:'hello'
                            // }


                            //第2种写法: 值为布尔值 若布尔值为真,就会把路由组件 收到的所有的params 参数, 以props的形式传给 Detail 组件

                            //但是query不行 这种方法
                            // props: true

                            //第三种  值为函数

                            props($route) {

                                return { id: $route.query.id, 
                                    title: $route.query.title }
                            }
                        }
                            //可以简化为
                            //语义化不明确
                        //     props({ query: { id, title } }) {
                        //         return { id, title }

                        //     }
                        // }
                    ]
                }
            ]
        },

    ]
})

