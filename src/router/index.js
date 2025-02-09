import Vue from 'vue'
import Router from 'vue-router'
//引入路由要加载的page组件
//如果引入组件过多，请使用路由懒加载
import messageIndex from '../pages/message/index.vue'
import topics from '../pages/topics/topics.vue'
import plates from '../pages/plate/plates.vue'
import userIndex from '../pages/user/index.vue'

Vue.use(Router)

// 定义路由映射
const routes = [
  {
    name: 'topics',
    path: '/topics/:title',
    component: topics
  },
  {
    name: 'message',
    path: '/message/:title',
    component: messageIndex
  },
  {
    name: 'plates',
    path: '/plates/:title',
    component: plates
  },
  {
    name: 'user',
    path: '/user/:title',
    component: userIndex
  }
]


const router = new Router({ routes })

// 第一次打开时的页面
router.push({name: 'topics', params: {title: '话题'}})

export default router