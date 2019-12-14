import Profile from '@/pages/Profile/profile.vue'
import Msite from '@/pages/Msite/Msite.vue'
import Search from '@/pages/Search/Search.vue'
import Order from '@/pages/Order/Order.vue'
import Login from '@/pages/Login/Login.vue'


export default [
    // 路由
    {
        path:'/profile',
        component: Profile,
        meta:{
          isShowFooter:true
        }        
    },
    {
      path:'/msite',
      component: Msite,
      meta:{
        isShowFooter:true
      } 
             
    },
    {
      path:'/order',
      component: Order,
      meta:{
        isShowFooter:true
      }       
    },
    {
      path:'/search',
      component: Search,
      meta:{
        isShowFooter:true
      }        
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/',
      redirect: '/msite'
    }
   
    ] 


 