$(function(){
	$('.inner').each(function(){
		var thisColor = $(this).css('background-color');
		$(this).find('.period').css({'color':thisColor});
	});

	$('.sub_cont ul > li a').on('mouseover',function(){
		$(this).find('.inner').stop().animate({'top':'0','opacity':'1'},400,'linear');
	}).on('mouseout',function(){
		$(this).find('.inner').stop().animate({'top':'400px','opacity':'0'},400,'linear');
	});

});