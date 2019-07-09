$(function(){
//상위 소카테고리
$('.menu li').find('a').eq(0).addClass('on');
$('.menu li').on('click','a',function(){
	event.preventDefault();
	$('.menu li').find('a').removeClass('on');
	$(this).addClass('on');
});
//왼쪽 소카테고리
$('.menu2 li').find('a').eq(0).addClass('on');
$('.menu2 li').on('click','a',function(){
	event.preventDefault();
	$('.menu2 li').find('a').removeClass('on');
	$(this).addClass('on');
});
//오른쪽 소카테고리
$('.menu3 li').find('a').eq(0).addClass('on');
$('.menu3 li').on('click','a',function(){
	event.preventDefault();
	$('.menu3 li').find('a').removeClass('on');
	$(this).addClass('on');
});

//productList
//mouseover/out
$('.productList').on('mouseover',function(){
	$(this).find('a > div').addClass('shadow');
	$(this).find('ul > li p').eq(0).css({
	'opacity':'1'
	});
	$(this).find('ul > li p').eq(0).find('span').css({
	'text-decoration':'underline'
	});
}).on('mouseout',function(){
	$(this).find('a > div').removeClass('shadow');
	$(this).find('ul > li p').eq(0).css({
	'opacity':'0.9'
	});
	$(this).find('ul > li p').eq(0).find('span').css({
	'text-decoration':'none'
	});
});
//하트아이콘 click
$('.productList').find('i').on('click',function(){
	if($(this).hasClass('fa fa-heart-o')){
		$(this).attr('class','fa fa-heart');
		$(this).css({'color':'#fcc'});
	}else if($(this).hasClass('fa fa-heart')){
		$(this).attr('class','fa fa-heart-o');
		$(this).css({'color':'#c5c5c5'});

	};
});

//pager
$('.pager li').find('a').eq(0).addClass('on');
$('.pager li').on('click','a',function(){
	event.preventDefault();
	$('.pager li').find('a').removeClass('on');
	$(this).addClass('on');
});

});//end