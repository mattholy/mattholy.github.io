$(document).ready(function () {
	$("html").niceScroll();
	$("#PhoneMain").hide();
});

function SloganDelay() {
	$("#LeftSlogan").css('color', '#000000');
	$("#RightSlogan").css('color', '#000000');
}

function SetupDesktop() {
	$("#SelectDesktop").css('width', '100%');
	$("#SelectPhone").hide();
}



//下面是手机端的js
var ThisPage="1";

function SetupPhone() {
	$("#SelectPhone").css('width', '100%');
	$("#PhoneImg").css('width', '450px');
	$("#PhoneImg").css('top', '30px');
	//$("#PhoneImg").css('transform','translate(-100%,0px)');
	$("#SelectDesktop").hide();
	$("#PhoneButton").hide();
	setTimeout("SetupPhoneDelay()", 1000);
}

function SetupPhoneDelay() {
	$("#PhoneMain").show();
	$("#LeftSlogan").show();
	$("#RightSlogan").show();
	$("#PhoneMain").css('width', '372px');
	$("#PhoneMain").css('height', '636px');
	$('html,body').animate({
		scrollTop: 100
	}, 'slow');
	setTimeout("SloganDelay()", 1000);
}

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
		$("#LeftSlogan").hide();
		$("#RightSlogan").hide();
		$("#loginToast").show();
		$("#PhoneMain").css('transform', 'translateX(-450px)');
		$("#PhoneImg").css('transform', 'translateX(-450px)');
		setTimeout("Loged()", 3000);
		$("#NameTitle").html($("#UserName").val());
	}
}

function Loged() {
	$("#loginToast").hide();
	$("#logedToast").show();
	setTimeout("GotoPersonal()", 500);
}

function GotoPersonal() {
	$("#LoginSheet").addClass("SlideLeft");
	$("#Personal").show();
	$("#Personal").addClass("SlideLeft");
}

function GotoStudentInfo(){
	$("#StudentInfo").addClass("SlideLeft");
	ThisPage = "#GoStudentInfo";
}

function GoBack(){
	$("#StudentInfo").removeClass("SlideLeft");
}