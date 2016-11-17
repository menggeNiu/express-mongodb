(function() {
	// 课程选择
	$('.innerli').mouseover(function() {
		$('.innerli').removeClass('on');
		$(this).addClass('on');
		$(this).stop().animate({
			top: -10
		});
		$('.innerli').mouseleave(function() {
			$('.innerli').removeClass('on');
			$('.innerli').stop().animate({
				top: 0
			});
		})
	});
	// 合作模块
	$('.next').click(function() {
		oUlLeft = -156;
		$(this).parent().find('ul').animate({
			left: oUlLeft
		}, 200, function() {
			$(this).parent().find('ul li').first().appendTo($(this).parent().find('ul'));
			$(this).parent().find('ul').css({
				left: 0
			});
		});
	});
})()