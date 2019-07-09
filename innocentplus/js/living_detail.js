$(function(){


//.수량
$(document).ready(function(){
	$('.price').each(function(index){
		$(this).text($(this).text().split(/(?=(?:\d{3})+(?:\.|$))/g).join(','));
	});
});	
var $numB = $('.number').find('li').eq(1);
var $price = Number($('.price').text());
//-
$('.number').find('li').eq(0).on('click',function(){
	var $num = Number($numB.text());
	if($num == 1){
		return;
	};
	$numB.text($num-1);
});
//+
$('.number').find('li').eq(2).on('click',function(){
	var $num2 = Number($numB.text());
	$numB.text($num2+ 1 );
});

//총합계
$('.number').find('.num').on('click',function(){
	var $numBer = Number($numB.text());
	$('.price').text($price * $numBer);
$(document).ready(function(){
	$('.price').each(function(index){
		$(this).text($(this).text().split(/(?=(?:\d{3})+(?:\.|$))/g).join(','));
	});
});	
});

//카테고리best
//productList2
//mouseover/out
$('.productList2').on('mouseover',function(){
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
$('.productList2').find('i').on('click',function(){
	if($(this).hasClass('fa fa-heart-o')){
		$(this).attr('class','fa fa-heart');
		$(this).css({'color':'#fcc'});
	}else if($(this).hasClass('fa fa-heart')){
		$(this).attr('class','fa fa-heart-o');
		$(this).css({'color':'#c5c5c5'});

	};
});

//함께 구매한 상품_slide
var List = $('.recommend_list');
    $('.Btn').on('click',function () {
    var ih = $(this).index() == 0 ? -375 : 375; //위아래로 움직이는 px 숫자
    List.animate({ scrollTop:List.scrollTop() + ih }, 200);
  });
  //함께 구매한 상품_mousover/out
List.on('mouseover','li',function(){
	$(this).find('span > a > div').addClass('shadow');
	$(this).find('p').eq(0).find('span').css({
	'text-decoration':'underline'
	});
}).on('mouseout','li',function(){
	$(this).find('span > a > div').removeClass('shadow');
	$(this).find('p').eq(0).find('span').css({
	'text-decoration':'none'
	});
});
//하트아이콘 click
List.find('i').on('click',function(){
	if($(this).hasClass('fa fa-heart-o')){
		$(this).attr('class','fa fa-heart');
		$(this).css({'color':'#fcc'});
	}else if($(this).hasClass('fa fa-heart')){
		$(this).attr('class','fa fa-heart-o');
		$(this).css({'color':'#c5c5c5'});

	};
});

//section 스크롤이동
var $btn = $('.sectionBtn').find('li');
var $nav1 = $('.nav1');
var $nav2 = $('.nav2');
var $headerHeight = $nav1.outerHeight() + $nav2.outerHeight();
$btn.on('click',function(){
	var $section = $(this).find('a').attr('href');
	var $sectionOff =$($section).offset().top;
	
$('html,body').stop().animate({
scrollTop: $sectionOff - $headerHeight
},350,'linear');
});
//section2_mouseover/out
$('.over').on('mouseover',function(){
	$(this).find('span').css({
	'text-decoration':'underline'
	});
}).on('mouseout',function(){
	$(this).find('span').css({
	'text-decoration':'none'
	});
});
//section2 pager
$('.pager > li').eq(0).addClass('on');
$('.detailCon3 #section2').find('.pager > li').on('click',function(){
	$('.pager > li').removeClass('on');
	$(this).addClass('on');
});
//asideBar
var $asideBar = $('#asideBar');
$(window).on('scroll',function(){
	$scrollTop = $(window).scrollTop();
	$section1 = $('.detailCon3 #section1').offset().top;
	$section3 = $('.detailCon3 #section3').offset().top;
	if($scrollTop >=$section1 && $scrollTop < $section3){
		$asideBar.stop().animate({
		'opacity':'1'
		},200,'linear');
	}else{
	$asideBar.stop().animate({
		'opacity':'0'
		},200,'linear');
	};
	
});
//옵션선택_asideCon나타나기
$('.asideBtn').find('div:nth-child(1)').on('click',function(){
	if(!$(this).hasClass('open')){
		$('.asideCon').stop().animate({
		'bottom':'0','opacity':'1'
		},320,'linear');
		$(this).find('i').attr('class','fa fa-angle-down');
		$(this).addClass('open');
	}else{
		$('.asideCon').stop().animate({
		'bottom':'-350px','opacity':'0'
		},300,'linear');
		$(this).find('i').attr('class','fa fa-angle-up');
		$(this).removeClass('open');
	};
	
});
//close 닫기
$('.asideCon').find('div > div > span').on('click',function(){
	$('.asideCon').stop().animate({
		'bottom':'-350px','opacity':'0'
		},300,'linear');
		$('.asideBtn').find('div:nth-child(1)').find('i').attr('class','fa fa-angle-up');
	$('.asideBtn').find('div:nth-child(1)').removeClass('open');
});
//.수량2
$(document).ready(function(){
	$('.price2').each(function(index){
		$(this).text($(this).text().split(/(?=(?:\d{3})+(?:\.|$))/g).join(','));
	});
});	
var $numBer = $('.number2').find('li').eq(1);
var $price2 = Number($('.price2').text());
//-
$('.number2').find('li').eq(0).on('click',function(){
	var $num2 = Number($numBer.text());
	if($num2 == 1){
		return;
	};
	$numBer.text($num2-1);
});
//+
	$('.number2').find('li').eq(2).on('click',function(){
		var $num3 = Number($numBer.text());
		$numBer.text($num3+ 1 );
	});
//총합계
$('.number2').find('.num2').on('click',function(){
	var $numBer2 = Number($numBer.text());
	$('.price2').text($price2 * $numBer2);
	$(document).ready(function(){
		$('.price2').each(function(index){
			$(this).text($(this).text().split(/(?=(?:\d{3})+(?:\.|$))/g).join(','));
		});
	});	
});
//옵션
$('.option').on('click',function(){
	if(!$(this).hasClass('click')){
		$(this).addClass('click');
		$('.2depth').css({'opacity':'1'});
	}else if($(this).hasClass('click')){
		$(this).removeClass('click');
		$('.2depth').css({'opacity':'0'});
	};
});
//2depth
$('.2depth').on('click','li',function(){
var $clickList = $(this).text();
	$('.option').find('span:eq(0)').text($clickList);
	$('.option').removeClass('click');
	$('.2depth').css({'opacity':'0'});
});

});//end