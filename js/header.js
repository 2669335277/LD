// 头部导航
(function() {
	var time = null;
	var list = $("#max_nav");
	var box = $("#max_nav_min");
	var lista = list.find("a");
	for (var i = 0, j = lista.length; i < j; i++) {
		if (lista[i].className == "now") {
			var olda = i;
		}
	}
	var box_hide = function() {
		box.stop().animate({
			height: 0,
			opacity: 0
		}, 400);
	}
	var box_show = function(hei) {
		box.stop().animate({
			height: hei,
			opacity: 1
		}, 400);
	}
	lista.hover(function() {
		lista.removeClass("now");
		$(this).addClass("now");
		clearTimeout(time);
		var index = list.find("a").index($(this));
		box.find(".cont").hide().eq(index).show();
		var _height = box.find(".cont").eq(index).height();
		box_show(_height)
	}, function() {
		time = setTimeout(function() {
			box.find(".cont").hide();
			box_hide();
		}, 50);
		lista.removeClass("now");
		lista.eq(olda).addClass("now");
	});
	box.find(".cont").hover(function() {
		var _index = box.find(".cont").index($(this));
		lista.removeClass("now");
		lista.eq(_index).addClass("now");
		clearTimeout(time);
		$(this).show();
		var _height = $(this).height();
		box_show(_height);
	}, function() {
		time = setTimeout(function() {
			$(this).hide();
			box_hide();
		}, 50);
		lista.removeClass("now");
		lista.eq(olda).addClass("now");
	});
})();
// 1170px以下按钮
$(function() {
	$(".min-btn").click(function() {
		$(".min-nav").css({
			zIndex: 111,
		})
		$(".min-nav").animate({
			opacity: 1,
		})
		$(".min-nav>div>ul").animate({
			right: 0
		})
	})
	$(".min-nav p").click(function() {
		$(".min-nav").animate({
			opacity: 0,
			zIndex: -1000
		})
		$(".min-nav>div>ul").animate({
			right: "-100%"
		})
	})
})
// 子导航
$(function() {
	$(".min-nav>div>ul>li").click(function() {
		if ($(this).find("span").html() == "+") {
			$(this).find("span").html("-")
		} else {
			$(this).find("span").html("+")
		}
	})
	$(".min-nav>div>ul>li").click(function() {
		$(this).find("ul").slideToggle()
	})
})
