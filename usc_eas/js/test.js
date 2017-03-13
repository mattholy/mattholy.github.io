$(document).ready(function () {
	$("html").niceScroll();
	wx.hideOptionMenu();
});

var Journey=$(window).width();

function ShowAgreement() {
	$("#Dialog1Title").html("用户协议");
	$("#Dialog1Content").html("1.本UI旨在帮助同学们更好的使用教务在线。<br>2.我并不会储存大家的帐号和密码。<br>3.本站数据抓取自教务系统，但不保证其准确，本站数据也不作为最终结果。");
	$("#Dialog1Content").css("text-align","left")
	$("#FirstChoice").html("我同意");
	$("#SecondChoice").html("不同意");
	$("#Dialog1").show();
	$("#SecondChoice").click(function close() {
		$("#ty").prop("checked",false)
		$("#Dialog1").hide();
	});
	$("#FirstChoice").click(function close() {
		$("#ty").prop("checked",true)
		$("#Dialog1").hide();
	});
}

function AlertDown() {
	$("#tyxy").css("background", "rgba(0,0,0,0)");
}
/*点击登录按钮发生的事(仅特效)*/
function Login() {
	if (!$("#ty").prop("checked")) {
		$("#Dialog2Title").html("注意");
		$("#Dialog2Content").html("你还没有同意用户协议");
		$("#Goahead").html("好的");
		$("#Dialog2").show();
		$("#Goahead").click(function close() {
			$("#Dialog2").hide();
			$("#tyxy").addClass("Warn");
			$("#tyxy").css("background", "red");
		});
	} else {
		$("#loginToast").show();
		setTimeout("Loged()", 3000);
		$("#NameTitle").html($("#UserName").val());
	}
}

function Loged() {
	$("#loginToast").hide();
	$("#logedToast").show();
	setTimeout("Loged2()",500);
}

function Loged2(){
	$("#logedToast").hide();
	$("#Personal").show();
	PageSlide($("#LoginSheet"),$("#Personal"),1);
}

/*页面滚动效果*/
var LeftWay={};
var RightWay={};
LeftWay.left='-='+Journey+'px';
RightWay.left='+='+Journey+'px';

function PageSlide(PageA,PageB,Direction) {//1=left;2=right
	if (Direction==1){
		PageA.animate(LeftWay,100);
		PageB.animate(LeftWay,100);
	}
	else {
		PageA.animate(RightWay,100);
		PageB.animate(RightWay,100);
	}
}

/*页面切换*/