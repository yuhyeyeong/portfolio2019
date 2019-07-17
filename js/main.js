$(function(){
	//header_main
	function headerScroll(){
		var scrollT = $(window).scrollTop();
		
		if(scrollT >= 400){
			$('header').addClass('black');
		}else{
				$('header').removeClass('black');
		}
	}
	//메인과 서브 분리 이벤트
	var currHref = location.href;
	if(currHref.split('https://yuhyeyeong.github.io/portfolio2019')[1] == '/' || currHref.split('https://yuhyeyeong.github.io/portfolio2019')[1] == '/#' || currHref.indexOf('/index') >= 0){
		function windowHt(){
			var winHt = $(window).height();
			var winWt = $(window).width();
			var contPaddingT = winHt * 0.2;
			if(winWt > 1200){
				$('.cont .main-slider .wrapper').css({'padding-top':contPaddingT});
				if(winHt >= 900){
					var contMarginT = winHt * 0.2;
					$('.main-slider li .txt').css({'margin-top':contMarginT});
				}else{
					$('.main-slider li .txt').css({'margin-top':'4vw'});
				}
			}else{
				$('.cont .main-slider .wrapper, #contents section .main-slider > li .txt').removeAttr('style');
			}
			/***데스크탑 / 태블릿~모바일***/
			if(winWt  > 1024){
				$('section.cont, .main-slider').height(winHt);
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
				var contHt = $('#contents section .main-slider .wrapper').outerHeight();
				var per = contHt + contHt * 0.04;
				//메인슬라이드 높이값
				$('section.cont').height('auto');
				$('.main-slider').height(per);
				$('.main-slider').css({'min-height':winHt});
				//스크롤 및 마우스휠
				$('body,html').css({'overflow':'initial'});
				$('.cont').off('mousewheel');
			}
		}

		windowHt();
		$(window).on('resize',function(){
			windowHt();
		});
		
		//header
		$(window).on('scroll',function(){
			headerScroll();
		});
		
	}else{
		$('header').addClass('black');
	}

	slider = $('.main-slider') .bxSlider({
		mode:'fade',
		auto: true,
		pause:3200,
		speed:4000,
		pager: true,
		touchEnabled : false,
		onSlideBefore: function($slideElement, oldIndex, newIndex){ 
			var curr = slider.getCurrentSlide();
			var bgColor = $('#contents section .main-slider > li').eq(curr).find('.btn_fill').css('color');
			$('#contents .main-slider').stop().animate({'background-color':bgColor},750,'linear');
			$('#contents .main-slider').css({'background-image': 'url("./img/main/'+'visual_bg_0'+(curr+1)+'.png'+'")'});
		}

	}); 

	$('.btn-wrap .btn_line:first-child').each(function(){
		$(this).on('click',function(e){		
			e.preventDefault();
			var winH = $(window).height();
			var thisIdx = $(this).parents('li').index();
			slider.stopAuto();
			$('html').css({'width':'100%','height':'100%','position':'fixed'});
			$('.bg_pop').stop().fadeIn();
			$('.pop_wrap').find('.pop').eq(thisIdx).stop().fadeIn();
			
			$('.pop .per li p').each(function(){
				var perTxt = $(this).siblings('span').text();
				$(this).stop().animate({'width':perTxt},550,'linear');
			});
			
		});
	});

	$('.bg_pop, .i_cancel').on('click',function(e){
		e.preventDefault();
		$('.bg_pop, .pop').stop().fadeOut();
		slider.startAuto();
		$('html').css({'width':'auto','height':'auto','position':'static'});
		$('.pop .per li p').each(function(){
				var perTxt = $(this).siblings('span').text();
				$(this).stop().animate({'width':'0%'},450,'linear');
			});
	
	});

	

});