export  default {
    //让num累加
    //payload是一个形参,如果组件在commit时,有传这个参数过来,就存在,如果没有传过来,就是undefined
    increase(state,payload){
        state.num += payload ? payload : 1;
    },
    decrease(state){
        state.num --;
    },
    reset(state){
        if(state.num <= 0){
            state.num =0;
        }
    }
}