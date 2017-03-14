$(document).ready(function() {
	
});
/*
获取实时鼠标位置
mousePos.x和mousePos.y
以及窗口大小
windowSize.x和windowSize.y
窗口大小可能变化，所以实时获取。
然后计算中心位置
然后计算鼠标相对中心的位置
*/
var mousePos={};
var mouseRelPos={};
var windowCenter={};
var xDeg;
var yDeg;
$(document).mousemove(function(e) { 
	mousePos.x = e.originalEvent.x || e.originalEvent.layerX || 0; 
	mousePos.y = e.originalEvent.y || e.originalEvent.layerY || 0; 
	windowCenter.x = $(document).width()/2;
	windowCenter.y = $(document).height()/2;
	mouseRelPos.x = mousePos.x - windowCenter.x;
	mouseRelPos.y = windowCenter.y - mousePos.y;
	xDeg = -(Math.atan2(mouseRelPos.x,1000))*3*Math.PI;
	yDeg = -(Math.atan2(mouseRelPos.y,1000))*5*Math.PI;
	var resualtDeg={};
	resualtDeg='rotateY('+xDeg+'deg) rotateX('+yDeg+'deg)';
	$('#loginSheet').css("transform",resualtDeg);
});