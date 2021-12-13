// 集团业绩
$(function() {
	$('.croup-down .tt li').mousemove(function() {
		$(this).addClass('act');
		$('.croup-down .tt li').not('.act').addClass("on")
	});
	$('.croup-down .tt li').mouseout(function() {
		$(this).removeClass('act on');
		$('.croup-down .tt li').not('.act .on').removeClass("act on")
	});

	$('.croup-down .tt1 li').mousemove(function() {
		$(this).addClass('act1');
	});
	$('.croup-down .tt1 li').mouseout(function() {
		$(this).removeClass('act1');
	});
})
