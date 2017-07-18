/**
 * Created by pc on 2017/7/18.
 */
function drag(id){
    var obj=document.getElementById(id);
    var disX=0;
    var disY=0;
    obj.onmousedown=function(e){
        disX=e.pageX-obj.offsetLeft;
        disY=e.pageY-obj.offsetTop;
    }

}