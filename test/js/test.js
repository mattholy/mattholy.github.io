$(document).ready(function() {  
    $("html").niceScroll();
	$("#PhoneMain").hide();
	$("#face").hide();
});

function SloganDelay(){
	$("#LeftSlogan").css('color','#000000');
	$("#RightSlogan").css('color','#000000');
}

function SetupPhoneDelay(){
	$("#PhoneMain").show();
	$("#LeftSlogan").show();
	$("#RightSlogan").show();
	$("#PhoneMain").css('width','372px');
	$("#PhoneMain").css('height','636px');
	$('html,body').animate({scrollTop:100},'slow');
	setTimeout("SloganDelay()",1000);
}

function SetupPhone(){
	$("#SelectPhone").css('width','100%');
	$("#PhoneImg").css('width','450px');
	$("#PhoneImg").css('top','30px');
	//$("#PhoneImg").css('transform','translate(-100%,0px)');
	$("#SelectDesktop").hide();
	$("#PhoneButton").hide();
	setTimeout("SetupPhoneDelay()",1000);
}

function SetupDesktop(){
	$("#SelectDesktop").css('width','100%');
	$("#SelectPhone").hide();
}

function Login(){
	$("#LeftSlogan").hide();
	$("#RightSlogan").hide();
	$("#loginToast").show();
	$("#PhoneMain").css('transform','translateX(-450px)');
	$("#PhoneImg").css('transform','translateX(-450px)');
	setTimeout("Loged()",3000);
}

function Loged(){
	$("#loginToast").hide();
	$("#logedToast").show();
	setTimeout("GotoPersonal()",500);
}

function GotoPersonal(){
	$("#LoginSheet").css('transform','translateX(-372px)');
	$("#Personal").show();
	S("#LoginSheet").hide();
}
	