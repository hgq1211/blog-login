/**
 * Created by Administrator on 2016/8/28.
 */
var html=$('<div class="col-md-8" >'+
            '<div class="svg_content well well-lg" style="position:relative" >'+
              '<svg id="svg" viewBox="0 0 800 600"></svg>'+
             '</div>'+
            '<input id="submit" value="" style="display: none">'+
        '</div>');
$('.svgAppend').append(html);
var current=0;
    //默认标记圆半径
    var cr = 5;
    //填充颜色
    var fillStyle = 'rgba(255,100,255,0.4)';
    //边框颜色
    var strokeStyle = 'rgb(0,51,51)';
    //边框宽度
    var strokeWidth = 1;
    var position = [];
    var sv = d3.select('#svg');
    var img;
    clone('1.jpg');

function clone(url) {
       showtextarea();
    img = d3.select('image');
    if (img) {
        img.remove();
        d3.selectAll('circle').remove();
        markclose();
    }
    sv.append('image').attr({
        //追加图像属性
        id: 'image',
        'xlink:href': url,
        height: '100%',
        width: '100%'
    }).on('click', function (e) { //当点击图像的某一点时出发的动作（绘制标记）
         position = d3.mouse(document.getElementById('image'));
        addcircle(current, position);
        showtextarea();
        $("#showmark").css({"left":position[0], "top":position[1]
        }).show();
    })
}
//单击画圆
function addcircle(current,position) {
    if(document.getElementById(current)){
        document.getElementById(current).remove();
    }
    sv.append('circle').attr({
        id: current,
        cx: position[0],
        cy: position[1],
        r: cr,
        fill: fillStyle,
        'stroke-width': strokeWidth,
        stroke: strokeStyle
    }).on('mouseover', function (e) {  //当鼠标移动到标记点上时触发的动作
        var point_id = this.getAttribute('id');
        position[0]=this.getAttribute('cx');
        position[1]=this.getAttribute('cy');
        $("#submit").val(point_id);
         // showcomment(position,point_id);

    }).on('mouseleave', function (e) {    //当鼠标离开标记点上时触发的动作

    });
}
//单击提交按钮之后将标注信息写入后台
function addmark(){
    var text=$("#marktext").val();
    var image_id= d3.select('image').attr('id');
    var point_id=$("#submit").val();

            if(!$("#marktext").val()) {
                $("#marktext").focus();
                return false;
            }
            showcomment(position,point_id,text);
            $("#marktext").val("");
 }
//隐藏标注编写框
function markclose(){
    $("#showmark").hide();
}
//按照point_id 显示同一个点下多个标注内容
function showcomment(position,point_id,text){
    $("#showmark").css({"left":position[0]+"px","top":position[1]+"px"})
        .show();
    var image_id= d3.select('image').attr('id');

            $(".heading").empty();

                var text=$("<h5></h5>").text(text);
                var name=$("<small class='pull_right'>"+123+"&nbsp;&nbsp;&nbsp;<time class='timeago' datetime='2323'></time></small>").timeago();
                $("blockquote").append(text).append('<hr>');
}
function showtextarea(){
    var writecomment=$('<div  class="panel panel-default col-md-4" id="showmark" style="position: absolute">'+'<button type="button" class="close" onclick="markclose()" >×</button>'+
                        '<blockquote class="heading pre-scrollable" style="padding: 0;margin:0;border:0"></blockquote>'+'<div class="panel-body" style="padding: 0;border:0">'+
                        '<textarea class="form-control" id="marktext" rows="3" placeholder="添加标注。。。"></textarea>'+
                        '<div class="span12">'+'<button class="btn btn-block btn-primary" type="button" id="comment" onclick="addmark()">提交</button>'+
                        '</div>'+'</div>'+'</div>');
    $("#showmark").remove();
    $(".svg_content").append(writecomment);

}