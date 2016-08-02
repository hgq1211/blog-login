/**
 * Created by Administrator on 2016/7/26.
 */
addEventListener("message",function(event){
    postMessage(event.data*event.data);
})