// new
$(function() {
	$.getJSON("json/index-right.json", function(a) {
		var $ul=$("<ul></ul>")
		$.each(a,function(i,v){
			var $li=$("<li><p class='clearfix'>"+v.two+"<span>"+v.three+"</span></p><p>"+v.four+"</p></li>")
			$ul.append($li)
			$(".new-right").append($ul)
		})
	})
})