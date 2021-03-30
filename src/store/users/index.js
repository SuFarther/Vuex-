import state   from '@/store/users/state'
import mutations  from "@/store/users/mutations";
import actions  from "@/store/users/actions";
import getters  from "@/store/users/getters";



export default {
    namespaced:true, //命名空间
    state,
    mutations,
    actions,
    getters
}