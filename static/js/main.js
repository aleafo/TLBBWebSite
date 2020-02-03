//延时加载页面图片。
$('img[data-src]').live('inview', function(event, isVisible) {
  if (!isVisible) { return; }
  
  var img = $(this);
  
  // Show a smooth animation
  img.css('opacity', 0);
  img.load(function() { img.animate({ opacity: 1 }, 500); });
  // Change src
  img.attr('src', img.attr('data-src'));
  
  // Remove it from live event selector
  img.removeAttr('data-src');
});

$(window).scroll(function(){
	if ($(document).scrollTop() >= 0) {
	}
});
$('#backToTop a').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
});

$(document).ready(function(){

//广告图片轮播
$(".banner01 dd a").each(function() {
    var title=$(this).attr("title");
    var href=$(this).attr("href");
	$(".banner01 dt").append('<a target="_blank" href="'+href+'" title="'+title+'">'+title+'</a>');
});
var ba_num = $(".banner01 dd a").length;
$(".banner01 dt a").css("width",100/ba_num+"%");

$('.banner01 dd a').soChange({
	clickFalse:false,
	thumbObj : '.banner01 dt a'
});

$(".banner02 dd a").each(function() {
    var title=$(this).attr("title");
    var href=$(this).attr("href");
	$(".banner02 dt").append('<a target="_blank" href="'+href+'" title="'+title+'">'+title+'</a>');
});
var ba_num = $(".banner02 dd a").length;
$(".banner02 dt a").css("width",100/ba_num+"%");

$('.banner02 dd a').soChange({
	clickFalse:false,
	thumbObj : '.banner02 dt a'
});

$('.banner dl').soChange({
	clickFalse:false,
	thumbObj : '.banner p a',
	autoChange : false
});

//论坛推荐切换
$(".bbs dd h5 a").each(function() {
	var href = $(this).attr("href");
	$(".bbs dt span").append('<a target="_blank" title="更多" href="'+href+'">更多</a>');
});


$('.bbs dd ul li').soChange({
	thumbObj : '.bbs dd h5 a',
	slideTime : 0,
	autoChange : false
});

$('.bbs dt span a').soChange({
	thumbObj : '.bbs dd h5 a',
	slideTime : 0,
	autoChange : false
});

//官方新闻切换
$(".official dd h5 a").each(function() {
	var href = $(this).attr("href");
	$(".official dt span").append('<a target="_blank" title="更多" href="'+href+'">更多</a>');
});
$(".official dt span a").eq(0).addClass("hidden");//隐藏综合新闻的更多按钮
$(".official dd ul h4:last-child").addClass("noborder");//隐藏最后一条新闻的下边框


$('.official dd ul li').soChange({
	thumbObj : '.official dd h5 a',
	slideTime : 0,
	autoChange : false
});

$('.official dt span a').soChange({
	thumbObj : '.official dd h5 a',
	slideTime : 0,
	autoChange : false
});

//资料站切换
$('.datas dd ul li').soChange({
	thumbObj : '.datas dd h5 a',
	slideTime : 0,
	autoChange : false
});

//角色切换
$('.players dd ul li').soChange({
	thumbObj : '.players dd h5 a'
});

//视听盛宴切换
$(".visual dd h5 a").each(function() {
	var href = $(this).attr("href");
	$(".visual dt span").append('<a target="_blank" title="更多" href="'+href+'">更多</a>');
});


$('.visual dd ul li').soChange({
	thumbObj : '.visual dd h5 a',
	slideTime : 0,
	autoChange : false
});

$('.visual dt span a').soChange({
	thumbObj : '.visual dd h5 a',
	slideTime : 0,
	autoChange : false
});

//玩家风采轮播
$(".people01 .pics a").each(function() {
    var title=$(this).attr("title");
	$(this).append('<span>'+title+'</span>');
	$(".people01 .dot").append('<a></a>');
});

$('.people01 .pics a').soChange({
	thumbObj : '.people01 .dot a'
});

//广告的轮播
$(".adv_box .pics a").each(function() {
	var title=$(this).attr("title");
	$(this).append('<span>'+title+'</span>');
	$(".adv_box .dot").append('<a></a>');
});

$('.adv_box .pics a').soChange({
	thumbObj : '.adv_box .dot a',
	changeTime:5000,
});


//上下滚动新闻
$(".import").jCarouselLite({
	btnPrev: ".import .prev",
	btnNext: ".import .next",
	auto: 4000,//图片停留时间
	scroll: 1,//每次滚动覆盖的图片个数
	speed: 1000, //设置速度，0是不动。其次就是数字越大 ，移动越慢。
	vertical: true,//竖向（true），横向（false）
	visible: 1, //显示的数量
	circular: true //是否循环
});

//版本回顾
$(".version dd div").jCarouselLite({
	btnPrev: ".version .prev",
	btnNext: ".version .next",
	//auto: '',//图片停留时间
	scroll: 1,//每次滚动覆盖的图片个数
	speed: 1000, //设置速度，0是不动。其次就是数字越大 ，移动越慢。
	vertical: false,//竖向（true），横向（false）
	visible: 6, //显示的数量
	circular: false //是否循环
});

//媒体模块
$('.med dd ul li').soChange({
	thumbObj : '.med dd h5 a',
	slideTime : 0,
	autoChange : false
});

////媒体
//$(".media div").jCarouselLite({
//	btnPrev: ".media .prev",
//	btnNext: ".media .next",
//	auto: 4000,//图片停留时间
//	scroll: 1,//每次滚动覆盖的图片个数
//	speed: 1000, //设置速度，0是不动。其次就是数字越大 ，移动越慢。
//	vertical: false,//竖向（true），横向（false）
//	visible: 8, //显示的数量
//	circular: true //是否循环
//});
/*	$(".media-new div").jCarouselLite({
		btnPrev: "",
		btnNext: "",
		auto: 4000,//图片停留时间
		scroll:1,//每次滚个动覆盖的图片数
		speed: 1000, //设置速度，0是不动。其次就是数字越大 ，移动越慢。
		vertical: true,//竖向（true），横向（false）
		visible: 2, //显示的数量
		circular: true //是否循环
	});*/

//默认提示
function defaults(){
	var lefts=[];	
	var tops=[];
	var copys=[];
	var dot='';
	var step_num=0;
	
	var steps=[".service",".event",".datas",".house",".visual",".people"];
	var steps_length=steps.length;
	for(i=0; i<steps_length; i++){
		lefts[i]=$(steps[i]).offset().left;
		tops[i]=$(steps[i]).offset().top;
		copys[i]=$(steps[i]).clone();	
		dot+='<span></span>';	
	}
	$(".step_tip dd div .fl").append(dot);
	
	$(".btn_cont").click(function(){
		if(step_num==steps_length){
			$(".opacity,.steps").fadeOut();
			$(".step_copy").html("");
		}else{
			$(".opacity").show();
			$(".steps").eq(step_num).show().css({"left":lefts[step_num],"top":tops[step_num]}).siblings(".steps").hide();
			$(".steps").eq(step_num).find(".step_copy").html(copys[step_num]).end().siblings(".steps").find(".step_copy").html("");
			$(".steps").eq(step_num).find(".fl span").eq(step_num).addClass("current");
			if(step_num==steps_length-1){
				$("html,body").animate({"scrollTop":tops[step_num]-240});
			}else{
				$("html,body").animate({"scrollTop":tops[step_num]-100});
			}
			step_num++;
		}
	}).eq(0).click();
	
	$(".btn_quit").click(function(){
		$(".opacity,.steps").fadeOut();
	});
	
}

var ck=new Cookie("xtl");
if(ck.Read()==null){//未加载过，Cookie内容为空
	//defaults();
	
	//设置保存时间
	var dd = new Date();
	dd = new Date(dd.getYear() + 1900, dd.getMonth(), dd.getDate());
	dd.setDate(dd.getDate() + 365);
	ck.setExpiresTime(dd);
	ck.Write("true"); 
}

});

//右飘
$(".fixed dd ins").click(function(){
	$(".fixed dd").animate({"right":"-238px"},function(){
		$(".fixed dt").animate({"right":"0px"});
	});
});

$(".fixed dt").click(function(){
	$(".fixed dt").animate({"right":"-98px"},function(){
		$(".fixed dd").animate({"right":"0px"});
	});
});

