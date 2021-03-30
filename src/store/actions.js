export  default {
    //点击了"减1"按钮后,放慢一秒再执行剑法
    decreaseAsync(context){
        context.commit('decrease');
    }
}