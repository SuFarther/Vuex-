import { createStore } from 'vuex'

import state   from '@/store/state'
// import mutations  from "@/store/mutations"
import mutations  from "@/store/mutations_type";
import actions  from "@/store/actions";
import getters  from "@/store/getters";

import users from '@/store/users/index';


export default createStore({
  // state相当于组件的data，专门用来存放全局的数据
  state,
  //mutations相当于组件中的methods,但是它不能使用异步方法(定时器、axios)
  mutations,
  //actions是store中专门用来处理异步的,实际修改状态值的,还是mutations
  actions,
  //主模块
  modules : {
    users
  },
  //getters相当于组件中的computed,getters是全局的,computed是组件内部使用的
  getters
})
