/*
This is a js file written by Mattholy
2016/09/20, PM 10:25:00
*/

//检查并加载iframe
function jwzx()
{
	//document.getElementById('setMsg').html(document.getElementById('uscjwzx').contentWindow.document.getElementsByTagName('title').innerHTML;
	
}

//检测输入数据正确无误，然后输入至iframe相关对象里
function logindatasend()
{
	var username=document.getElementById("UserName").value;
	var password=document.getElementById("Password").value;
	var code=document.getElementById("Code").value;
	var username_length=username.length;
	
	//判断学号
	if (username==="")
	{
		$("#mess").html("你好像忘了输入学号");
		UserName.focus();
		return;
	}
	else if (isNaN(username)||username_length!==11)
	{
		$("#mess").html("学号格式不对噢");
		UserName.focus();
		return;
	}
	else
	{
		$("#mess").html("");
	}
	
	//判断密码
	if (password==="")
	{
		$("#mess").html("你还没有输入密码");
		Password.focus();
		return
	}
	else
	{
		$("#mess").html("");
	}
	
	//判断验证码
	if (code==="")
	{
		$("#mess").html("你还没有输入验证码");
		Code.focus();
		return
	}
	else
	{
		$("#mess").html("");
	}
	alert(iscomplat);//这是测试
}