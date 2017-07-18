/**
 * Created by pc on 2017/7/18.
 */
function drag(id){
    var obj=document.getElementById(id);
    var disX=0;
    var disY=0;

    obj.onmousedown=function(ev){
        disX=ev.pageX-obj.offsetLeft;
        disY=ev.pageY-obj.offsetTop;
        document.onmousemove=function(ev){
            obj.style.left=ev.clientX-disX+"px";
            obj.style.top=ev.clientY-disY+"px";
        }
        document.onmouseup=function(ev){
            document.onmousemove=null;
            document.onmouseup=null;
        }
    }
    return false;
}