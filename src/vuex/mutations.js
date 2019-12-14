/* 
包含n个用于直接更新状态数据方法的对象
不可以包含异步和逻辑代码
*/
import {
  RECEIVE_ADDERSS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'



export default {
  [RECEIVE_ADDERSS] (state,address){
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state,categorys){
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state,shops){
    state.shops = shops
  },
}