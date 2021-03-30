export const MUTATIONS_TYPE = {
    INCREASE: 'increase',
    DECREASE: 'decrease',
    RESET: 'reset'
}

export default {
    // 让num累加
    // payload是一个形参，如果组件在commit时，有传这个参数过来，就存在，如果没有传过来，就是undefined
    [MUTATIONS_TYPE.INCREASE](state, payload){
        state.num += payload ? payload : 1;
    },
    // 让num累减
    [MUTATIONS_TYPE.DECREASE](state){
        state.num--;
    },
    //让按钮复位
    [MUTATIONS_TYPE.RESET](state){
        if(state.num <= 0){
            state.num =0;
        }
    },


}