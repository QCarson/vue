/* 
包含n个用于间接更新状态数据方法的对象
可以包含异步和逻辑代码
*/
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '@/api'

import {
  RECEIVE_ADDERSS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  /* 
  获取当前地址信息对象的异步action
  */
  async getAddress({commit,state}){
    const {longitude, latitude} = state
    //发异步ajax请求
    const result = await reqAddress(longitude, latitude)
    //请求成功后,提交mutation
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDERSS,address)
    }
  },
  /* 
  获取当前商品分类列表
  */
  async getCategorys({commit}){
    //发异步ajax请求
    const result = await reqCategorys()
    //请求成功后,提交mutation
    if(result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  /* 
  获取当前商家列表
  */
  async getShops ({commit, state}){
    const {longitude, latitude} = state
    //发异步ajax请求
    const result = await reqShops({longitude, latitude})
    //请求成功后,提交mutation
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,shops)
    }
  }
}