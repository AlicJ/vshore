// JavaScript Document
function subnavTitle(num) {
	for (i=1;i<=5;i++){
		$("#subnav #text" + i + "-link").removeClass("current");
	}
	$("#subnav #text" + num + "-link").addClass("current");
}
function subnavScroll(num) {
	subnavTitle(num);
	$.smoothScroll({scrollTarget: "#text" + num});
}


$(document).ready(function() {
	$.stellar()
	$(".nav-menu .item1").click(function(){
		 $.smoothScroll({scrollTarget: "#intro"});
	})
	$(window).scroll(function () { 
		if ($('html').scrollTop() <= 500){
			$(".nav-menu .item1").removeClass("active");
		}else{
			$(".nav-menu .item1").addClass("active");
		}
	
		if ($('html').scrollTop() >= 2400){
			$("#sub-navigation").css("position", "fixed");
			$("#sub-navigation").css("top", "91px");
		}else{
			$("#sub-navigation").css("position", "static");
		}
		
		if ($('html').scrollTop() >= 2460 && $('html').scrollTop() <= 4010){
			subnavTitle(1);
		}else if ($('html').scrollTop() >= 4010 && $('html').scrollTop() <= 5650){
			subnavTitle(2);
		}else if ($('html').scrollTop() >= 5650 && $('html').scrollTop() <= 7290){8870
			subnavTitle(3);
		}else if ($('html').scrollTop() >= 7290 && $('html').scrollTop() <= 8870){
			subnavTitle(4);
		}else if ($('html').scrollTop() >= 8855){
			subnavTitle(5);
		}
	});
	
	

		
	
})