/*
This is a js file written by Mattholy
2016/09/20, PM 10:25:00
*/

//检查并加载iframe
function jwzx()
{
	alert(doc);
}

//检测输入数据正确无误，然后输入至iframe相关对象里
function logindatasend()
{
	var y=document.getElementById("mess");
	var username=document.getElementById("UserName").value;
	var password=document.getElementById("Password").value;
	var code=document.getElementById("Code").value;
	var username_length=username.length;
	
	//判断学号
	if (username==="")
	{
		y.innerHTML="你好像忘了输入学号";
		UserName.focus();
		return;
	}
	else if (isNaN(username)||username_length!==11)
	{
		y.innerHTML="学号格式不对噢";
		UserName.focus();
		return;
	}
	else
	{
		y.innerHTML="";
	}
	
	//判断密码
	if (password==="")
	{
		y.innerHTML="你还没有输入密码";
		Password.focus();
		return
	}
	else
	{
		y.innerHTML="";
	}
	
	//判断验证码
	if (code==="")
	{
		y.innerHTML="你还没有输入验证码";
		Code.focus();
		return
	}
	else
	{
		y.innerHTML="";
	}
	alert(iscomplat);//这是测试
}