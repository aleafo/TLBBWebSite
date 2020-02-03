function a(_top) {
	var ele = $(".box"), 
		_height = document.documentElement.clientHeight || document.body.clientHeight;
	ele.each(function() {
		_height + _top >= $(this).offset().top && $(this).hasClass("unshowed") && $(this).removeClass("unshowed");
	});
}


$(window).scroll(function() {
	var _top = $(window).scrollTop();
	a(_top);
});

$(".box").each(function() {
	var counts = $(this).find(".modles");
	if (counts.length > 1 && $(this).hasClass("unshowed"))
		for (var e = 0, c = counts.length; c > e; e++) {
			counts[e].style.cssText = "transition: all .8s ease " + .3 * (e + 1) + "s;-webkit-transition: all .8s ease " + .3 * (e + 1) + "s;-moz-transition: all .8s ease " + .3 * (e + 1) + "s;-o-transition: all .8s ease " + .3 * (e + 1) + "s;";
		}
});

