require(['jquery', 'easyui', 'easyuiPlus', 'easyuiCN'], function () {   
    $(function () {
        $("#LoginSys").click(function () {
            LoginSys();
        });
        $("#UserName").keydown(function (e) {
            var curkey = e.which;
            if (curkey == 13) {
                LoginSys();
                return false;
            }
        });
        $("#Password").keydown(function (e) {
            var curkey = e.which;
            if (curkey == 13) {
                LoginSys();
                return false;
            }
        });
        $("#ValidateCode").keydown(function (e) {
            var curkey = e.which;
            if (curkey == 13) {
                LoginSys();
                return false;
            }
        });
    });
    //登录
    function LoginSys() {
        $("#mes").html("");
        $("#UserName").removeClass("input-validation-error");
        $("#Password").removeClass("input-validation-error");
        $("#ValidateCode").removeClass("input-validation-error");
        if ($.trim($("#UserName").val()) == "") {
            $("#UserName").textbox('textbox').focus();
            $("#mes").html("用户名不能为空！");
            return;
        }
        if ($.trim($("#Password").val()) == "") {
            $("#Password").textbox('textbox').focus();
            $("#mes").html("密码不能为空！");
            return;
        }
        if ($.trim($("#ValidateCode").val()) == "") {
            $("#ValidateCode").textbox('textbox').focus();
            $("#mes").html("验证字符不能为空！");
            return;
        }
        $("#mes").html("正在努力登录系统...");
        $.post('http://jwzx.usc.edu.cn/Login/Login', { UserName: $("#UserName").val(), Password: $("#Password").val(), Code: $("#ValidateCode").val() },
               function (data) {
                   if (data.type == "1") {
                       window.location = "http://jwzx.usc.edu.cn/Home/Index"
                   }
                   else {
                       $("#mes").html(data.message);
                   }
               }, "json");
        return false;
    }
});
