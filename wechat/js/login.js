function LoginSys() {
        $.post('http://jwzx.usc.edu.cn/Login', { UserName: $("#UserName").val(), Password: $("#Password").val(), Code: $("#ValidateCode").val() },
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