//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// 创造一个对象 router 
const router = new VueRouter({
    routes: [
        //每一个对象都是key-valued
        {
            //给路由配置名字  跳转时简化代码
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于', isAuth: true }

        },
        {
            name: 'zhuyu',
            path: '/home',
            component: Home,
            meta: { title: '主页' },

            //开始书写子路由 不需要加斜杠  
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // beforeEnter: (to, from, next) => {
                    //     console.log('前置路由+++')
                    //     console.log(to)

                    //     // if (to.path === '/home/news' || to.path === '/home/message') {
                    //     if (to.meta.isAuth) {//判断是否需要权限
                    //         if (localStorage.getItem('school') === 'atguigu1') {
                    //             next()
                    //         } else {
                    //             alert('无权限')
                    //         }
                    //     } else {

                    //         next()
                    //     }
                    // }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            //路由参数： 
                            name: 'xiangqing',
                            // 在这里声明 要传递参数 
                            //path :'detail/:id/：titile'
                            path: 'detail',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },


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

                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
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
// 全局前置路由守卫--初始化的每次路由切换之前得调用
// router.beforeEach((to, from, next) => {
//     console.log('前置路由')

//     // if (to.path === '/home/news' || to.path === '/home/message') {
//     if (to.meta.isAuth) {//判断是否需要权限
//         if (localStorage.getItem('school') === 'atguigu1') {

//             next()
//         } else {
//             alert('无权限')
//         }
//     } else {

//         next()
//     }
// })
// 全局后置路由守卫--初始化的时候被调用，每次路由切换之后被调用
//
router.afterEach((to,from) => {
    console.log('后置路由')
    document.title = to.meta.title ||'尚硅谷'
})

export default router

