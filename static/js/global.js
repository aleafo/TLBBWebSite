$(document).ready(function() {
	//导航下拉
	(function() {
		var enter_action, leave_action;
		$(".nav").hover(function() {
			clearTimeout(leave_action);
			enter_action = setTimeout(function() {
				$(".nav").addClass("nav_hover");
				$(".nav>dd").slideDown(400);
			}, 401);
		}, function() {
			clearTimeout(enter_action);
			leave_action = setTimeout(function() {
				$(".nav>dd").slideUp(200, function() {
					$(".nav").removeClass("nav_hover");
				});
			}, 201);
		});
	})();

	//微信二维码
	(function() {
		var enter_action = [];
		var leave_action = [];
		$(".links li").each(function(num) {
			$(this).hover(function() {
				var self = $(this);
				clearTimeout(leave_action[num]);
				enter_action[num] = setTimeout(function() {
					$(self).addClass("highzindex");
					$(self).children("img").animate({
						"left": "100%",
						"opacity": "show"
					}, 200);
				}, 201);
			}, function() {
				var self = $(this);
				clearTimeout(enter_action[num]);
				leave_action[num] = setTimeout(function() {
					$(self).children("img").animate({
						"left": "50%",
						"opacity": "hide"
					}, 200);
					$(self).removeClass("highzindex");
				}, 201);
			});
		});
	})();

});