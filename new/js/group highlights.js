$(function() {
	// main-top
	$.getJSON("json/index-right.json", function(a) {
		var $ul = $("<ul></ul>")
		$.each(a, function(i, v) {
			var $li = $("<li><p class='clearfix'>" + v.two + "<span>" + v.three +
				"</span></p><p>" + v.four + "</p></li>")
			$ul.append($li)
			$(".main-right").append($ul)
		})
	})
	//main-down
	$.getJSON("json/group-down.json", function(b) {
		$.each(b, function(i, v) {
			var $li = $("<li class='wow slideInUp clearfix'><div class='main-down-left'><p>" +
			 v.two + "</p><span>" + v.three +
			 "</span></div><div class='main-down-right'>" + v.four + "<p>" + v.five +
				"</p></div></li>")
			$(".main-down ul").append($li)
		})
	})
})