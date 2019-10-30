var score=0;
$(document).ready(function(){
play(5,5);
});
function play(column,row){
    
var result;
for(var i=0;i<row;i++){
    result+="<tr id='"+i+"'>";
    for(var j=0;j<column;j++){
        result+="<td class='c"+j+"'></td>";
    }
    result+="</tr>";
}
//hej

$("#mulls").html(result);
var time=2000;
setInterval(function(){showImg(3,3,time)}, time);
}

function showImg(column,row,time){
    var x= Math.floor(Math.random()*column);
    var y= "c"+Math.floor(Math.random()*row);
    var img = Math.floor(Math.random()*3);
    time =Math.floor(Math.random()*time);
       $("#"+x+">."+y).html("<img src='img/"+img+".jpg' onclick= hide('"+x+"','"+y+"')>");
       setTimeout(function(){$("#"+x+">."+y).html("");},time);   
}
function hide(x,y){
    $("#"+x+">."+y).html("");
    score++;
    $("#score").text(score);
}