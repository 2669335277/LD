$(function() {
	$.getJSON("json/technology platform.json", function(a) {
		var $ul = $("<ul></ul>")
		$.each(a, function(i, v) {
			var $li = $("<li><p class='clearfix'>" + v.two + "<span>" + v.three +
				"</span></p><p>" + v.four + "</p></li>")
			$ul.append($li)
			$(".main-right").append($ul)
		})
	})
})


	function form() {
		if (UserName() && Phone() && Email() && Tex())
			return true;
		else
			return false;
	}
	// 验证文本框
	function Tex(){
		if(document.for.tex.value==""){
			alert("文本框不能为空")
			document.for.tex.focus();
			return false;
		}else{
			return true;
		}
	}
	//验证姓名
	function UserName(){
		if(document.for.username.value==""){
			alert("姓名不能为空")
			document.for.username.focus();
			return false;
		}else if(!document.for.username.value.match(/^[A-Za-z0-9]/g)){
			alert("只能输入0~9、z~z、A~a之内的字符，其他字符无效")
			document.for.username.focus();
			return false;
		}else if(document.for.username.value.length<3){
			alert("姓名不能小于三位")
			document.for.username.focus();
			return false;
		}else if(document.for.username.value=="username"){
			alert("姓名不能用username命名")
			document.for.username.focus();
			return false;
		}else{
			return true;
		}
	}
		// 验证email
		function Email(){
			 if(document.for.email.value==""){
				alert("请输入邮箱地址")
				document.for.email.focus();
				return false;
			 }else if(document.for.email.value.indexOf("@")==-1 || document.for.email.value.indexOf(".")<0 || document.for.email.value.indexOf("@")>document.for.email.value.indexOf(".")){
				alert("邮箱地址格式不正确")
				document.for.email.focus();
				 return false;
			 }else{
				 return true;
			 }
		}
		// 电话
		function Phone(){
			if(document.for.phone.value==""){
				alert("电话不能为空")
				document.for.phone.focus();
				return false;
			}else if(!document.for.phone.value.match(/^[0-9]/g)){
				alert("只能输入0~9之内的字符，其他字符无效")
				document.for.phone.focus();
				return false;
			}else if(document.for.phone.value.length>=12){
				alert("电话不能超过11位")
				document.for.phone.focus();
				return false;
			}else if(document.for.phone.value.substr(0,1)=="0"){
				alert("电话不能用0开头")
				document.for.phone.focus();
				return false;
			}else if(document.for.phone.value.length<11){
				alert("电话不能少于11位")
				document.for.phone.focus();
				return false;
			}else{
				return true;
			}
		}
