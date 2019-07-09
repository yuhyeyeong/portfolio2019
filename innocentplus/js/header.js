$(function(){

//변형nav
var $window = $(window);
var $nav1 = $('.nav1');
var $nav2 = $('.nav2');
var $nav2Offset = $nav2.offset().top;
var $headerHeight = $nav1.outerHeight() + $nav2.outerHeight();
//nav1
$window.on('scroll',function(){
	var $scroll = $window.scrollTop();
	if(($nav2Offset ) >= $scroll){
		$nav1.removeClass('sticky');
	}else if($nav2Offset  <= $scroll){
		$nav1.addClass('sticky');
	};
});
//nav2
$window.on('scroll',function(){
	var $scroll2 = $window.scrollTop();
	if($nav2Offset >= $scroll2){
		$nav2.removeClass('sticky2');
	}else if($nav2Offset <= $scroll2){
		$nav2.addClass('sticky2');	
	};
});
//alert
var $reviewPage = $('.reviewpage');
$reviewPage.on('click',function(){
	alert('준비중입니다.');
});


});//end