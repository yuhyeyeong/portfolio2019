$(function(){

	//header
	
		$('#gnb .gnb-btn').on('mouseover',function(){
			if(!$('#gnb .gnb-btn').hasClass('on')){
				$(this).find('span').eq(0).stop().animate({'left':'50%'},400,'linear');
				$(this).find('span').eq(2).stop().animate({'left':'50%'},400,'linear');
			}
		}).on('mouseout',function(){
			$(this).find('span').eq(0).stop().animate({'left':'0'},300,'linear');
			$(this).find('span').eq(2).stop().animate({'left':'0'},300,'linear');
		});

	$('#gnb .gnb-btn').on('click',function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('on');
		$(this).find('span').eq(0).css({'left':'0'});
		$(this).find('span').eq(2).css({'left':'0'});
			$(this).siblings('.gnb-nav').stop().fadeToggle(500);
	});
/*
	headerScroll();
	function headerScroll(){
		var scrollT = $(window).scrollTop();
		if(scrollT >= 100){
			$('header').addClass('black');
			$('.btn_top').stop().fadeIn(300);
		}else{
				$('header').removeClass('black');
				$('.btn_top').stop().fadeOut(200);
		}
		if($('header').hasClass('black')){
			$('header h1').find('img').attr('src','./img/logo_b.png');
		}else{
			$('header h1').find('img').attr('src','./img/logo.png');
		}
	}


	$(window).on('scroll',function(){
		headerScroll();
		 
	});
*/

	function headerScroll(){
		var scrollT = $(window).scrollTop();
		if(scrollT >= 400){
			$('header').addClass('black');
		}else{
				$('header').removeClass('black');
		}
		if($('header').hasClass('black')){
			$('header h1').find('img').attr('src','./img/logo_b.png');
		}else{
			$('header h1').find('img').attr('src','./img/logo.png');
		}
	}
	function top_btn(){
		var scrollT = $(window).scrollTop();
		if(scrollT >= 500){
			$('.btn_top').stop().fadeIn(300);
		}else{
			$('.btn_top').stop().fadeOut(200);
		}
	}
	top_btn();
	$(window).on('scroll',function(){
		top_btn();
	});
	$('.btn_top').on('click',function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop:'0'},300,'linear')

	});

	var currHref = location.href;
	if(currHref.split('https://yuhyeyeong.github.io/portfolio2019')[1] == '/' || currHref.split('https://yuhyeyeong.github.io/portfolio2019')[1] == '/#' || currHref.indexOf('/index') >= 0){
		$(window).on('resize',function(){
			windowHt();
			slider();
		});
		//header
		$(window).on('scroll',function(){
			headerScroll();
		});
		//스크롤바
		$('body,html').css({'overflow':'hidden'});
		//mousewheel
		$('.cont').on('mousewheel',function(event,delta){
			event.preventDefault();
			event.stopPropagation();
			if(delta > 0){
				var prev = $(this).prev().offset().top;
				$('html,body').stop().animate({
					'scrollTop': prev
				},750,'easeInOutQuad');    
			};
			if(delta < 0){
				var next = $(this).next().offset().top;
				$('html,body').stop().animate({
					'scrollTop':next
				},750,'easeInOutQuad');
			};
		});
	}else{
		$('header').addClass('black');
	}

});