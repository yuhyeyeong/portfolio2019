$(function(){
	function innerTxt(){
		$('.inner').each(function(){
			var thisColor = $(this).css('background-color');
			$(this).find('.period').css({'color':thisColor});
		});
	}

	function inner(){
		var winWd = $(window).width();
		if(winWd > 740){
			$('.sub_cont ul > li a').on('mouseover',function(){
			$(this).find('.inner').stop().animate({'top':'0','opacity':'1'},400,'linear');
			}).on('mouseout',function(){
				$(this).find('.inner').stop().animate({'top':'400px','opacity':'0'},400,'linear');
			});
		}else{
			$('.sub_cont ul > li a').off('mouseover mouseout');
			$('.sub_cont .list > li a .inner').removeAttr('style');
		}
	}

	innerTxt();
	inner();
	$(window).on('resize',function(){
		innerTxt();
		inner();
	});

});