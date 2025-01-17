/* 
对axio进行2次封装一个能发ajax请求的函数
*/
import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
  // baseURL:'http://localhost:4000',
  baseURL:'/api', //让代理服务器转发请求4000
  timeout:20000//配置超时时间
})

//请求拦截器
instance.interceptors.request.use((config)=>{
  console.log('req interceptor')
  //3.对请求体参数进行urlencode处理,而不使用默认的json方式(后台接口不支持)
  const data = config.data
  if(data instanceof Object){
    const data = qs.stringify(data)
  }

  return config
})

//响应拦截器
instance.interceptors.response.use(

  response=>{

    // return response
    //2.异步请求成功的数据不是response,而是response.data
    return response.data
  },
  error=>{

    // return Promise.reject(error)
    // 统一处理异常
    alert('请求出错:'+error.message)
    return new Promise(() => {})//返回一个Panding状态的promise => 中端promise链
  }
)

export default instance