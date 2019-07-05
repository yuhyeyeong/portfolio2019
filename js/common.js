$(function(){

	//header
	$('#gnb .gnb-btn').on('mouseover touchstart',function(){
		if(!$('#gnb .gnb-btn').hasClass('on')){
			$(this).find('span').eq(0).stop().animate({'left':'50%'},400,'linear');
			$(this).find('span').eq(2).stop().animate({'left':'50%'},400,'linear');
		}
	}).on('mouseout touchend',function(){
		$(this).find('span').eq(0).stop().animate({'left':'0'},300,'linear');
		$(this).find('span').eq(2).stop().animate({'left':'0'},300,'linear');
	});

	$('#gnb .gnb-btn').on('click touchstart',function(event){
		var winWid = $(window).width();
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('on');
		$(this).find('span').eq(0).css({'left':'0'});
		$(this).find('span').eq(2).css({'left':'0'});
		$(this).siblings('.gnb-nav').stop().fadeToggle(500);
	});


	//top_btn
	function top_btn(){
		var scrollT = $(window).scrollTop();
		if(scrollT >= 500){
			$('.btn_top').stop().fadeIn(300);
		}else{
			$('.btn_top').stop().fadeOut(200);
		}
	}
	//logo
	function logoColor(){
		if($('#header').hasClass('black')){
			$('header h1').find('img').attr('src','./img/logo_b.png');
		}else{
			$('header h1').find('img').attr('src','./img/logo.png');
		}
	}
	top_btn();
	logoColor();
	$(window).on('load scroll',function(){
		top_btn();
		logoColor();
	});
	$('.btn_top').on('click',function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop:'0'},300,'linear')

	});
	
});