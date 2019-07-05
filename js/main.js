$(function(){

	function windowHt(){
		var winHt = $(window).height();
		var contPaddingT = winHt * 0.22;
		$('.cont .main-slider .wrapper').css({'padding-top':contPaddingT});
		$('section.cont, .main-slider').height(winHt);
	}
	windowHt();

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
			console.log(thisIdx);
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