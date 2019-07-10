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
var $reviewPage = $('.lnb').find('>li > a').eq(1);
$reviewPage.on('click',function(){
	alert('준비중입니다.');
});

//메인슬라이더
$('.slide').bxSlider({
	 auto: true,
	pagerCustom: '.sliderBtn',
	speed:600,
	//autoHover:true
});

//1단배너
$('.banner1').bxSlider({
	infiniteLoop: true,
	hideControlOnEnd: true,
	auto: true,
	speed:1300,
	autoDelay:500,
	controls:false
});
//best Tab
var $tabBtns =$('.mainCon2 .tabBtns > li'); 
var $tabBtn =$tabBtns.find('a'); 
var $tabCons = $('.mainCon2 .tabCons > div');
$tabBtns.eq(0).addClass('on');
$tabCons.hide();
$tabCons.eq(0).show();

$tabBtns.on('click',function(){
event.preventDefault();
if($(this).hasClass('on')){
	return;
};
 $tabBtns.removeClass('on');
$(this).addClass('on');
$tabCons.hide();
$($(this).find('a').attr('href')).show();
});
//best TabShadow
var $tabList = $('.main .tabCon');	
var $shadowBox = $('.main .tabCon > a > div');

$tabList.on('mouseover',function(){
	$(this).find('a').addClass('shadow');
	$(this).find('.button').css({'display':'block'});
}).on('mouseout',function(){
	$(this).find('a').removeClass('shadow');
	$(this).find('.button').css({'display':'none'});
});
//racommandSlider
$('.recommand').bxSlider({
	  minSlides: 5,
	  maxSlides: 5,
	  slideWidth: 198,
	  slideMargin: 14,
	  auto:false,
	  pager:false,
	  speed:500
});
//racommand shadow
var $recommandList = $('.recommand > li');

$recommandList.on('mouseover',function(){
	$(this).find('.image > a').eq(0).addClass('shadow');
	$(this).find('.txt > a > div').eq(0).css({'text-decoration':'underline'});
}).on('mouseout',function(){
	$(this).find('.image > a').eq(0).removeClass('shadow');
	$(this).find('.txt > a > div').eq(0).css({'text-decoration':'none'});
});
//new_MD추천 caption
var $md = $('.number1');
$md.on('mouseover',function(){
	$md.find('.caption').stop().animate({
	'padding-bottom':'80px'
	},210,'linear');
	$md.find('.button').stop().animate({
	'bottom':'20px','opacity':'1'
	},310,'linear');
}).on('mouseout',function(){
	$md.find('.caption').stop().animate({
	'padding-bottom':'22px'
	},300,'linear');
	$md.find('.button').stop().animate({
	'bottom':'-50px','opacity':'0'
	},200,'linear');
});
//new caption
var $newList = $('.newList').find('.list');

$newList.on('mouseover',function(){
	$(this).find('.caption').stop().animate({'height':'100%'},300,'linear');
	$(this).find('.caption > span').css({
		'display':'none','opacity':'0'
		});
	$(this).find('.txt').stop().animate({
		'bottom':'114px','z-index':'999','opacity':'1'
		},220,'linear');
}).on('mouseout',function(){
	$(this).find('.caption').stop().animate({'height':'40px'},300,'linear');
	$(this).find('.caption > span').css({
		'display':'block','opacity':'1'
		});
	$(this).find('.txt').stop().animate({
		'bottom':'-180px','opacity':'0'
		},220,'linear');
});

//2단배너 slider
$(document).ready(function(){
  $('.bn2').bxSlider({
    slideWidth: 576,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 18,
	pager:false,
	auto:true,
	speed:550
  });
});
//협찬배너slider
$('.sponsor').bxSlider({
	infiniteLoop: true,
	hideControlOnEnd: true,
	controls:false,
	auto:true,
	speed:2000,
	mode:'fade',
	pager:true
});
//review slider
$('.mainReview').bxSlider({
	infiniteLoop: true,
	hideControlOnEnd: true,
	controls:false,
	auto:true,
	speed:700,
	autoHover:true,
	pager:false
});
//review OPACITY
var $review = $('.mainReview .txt');
$review.on('mouseover',function(){
	$(this).find('p').css({
	'opacity':'1'});
}).on('mouseout',function(){
	$(this).find('p').css({
	'opacity':'0.8'});
});

//instagram
var $insta = $('.insta > li');
$insta.on('mouseover',function(){
	$(this).find('a').eq(0).addClass('shadow');
}).on('mouseout',function(){
	$(this).find('a').eq(0).removeClass('shadow');
});

//aside
/*나타나기*/
var $asidePager = $('.asidePager');
var $con1Offset = $('.mainCon1').offset().top;
$(window).on('scroll',function(){
	event.preventDefault();
	var $scroll2 = $(window).scrollTop();
	if($scroll2 >= $con1Offset){
		$asidePager.stop().animate({
		'opacity':'1','right':'15px'
		},150,'linear');
	}else if($scroll2 <= $con1Offset){
	$asidePager.stop().animate({
		'opacity':'0','right':'-35px'
		},150,'linear');
	};
});

/*버튼전환*/
$asidePager.find('li').eq(0).addClass('on');

$(window).on('scroll',function(){
	
	var $bestOff = $('.conOffset').eq(0).offset().top;
	var $recommandOff = $('.conOffset').eq(1).offset().top;
	var $newOff = $('.conOffset').eq(2).offset().top;
	var $storeOff = $('.conOffset').eq(3).offset().top;	
	var $winScroll = $(window).scrollTop();
	if($winScroll <= ($bestOff - $headerHeight)-1){
		$asidePager.find('li').removeClass('on');
		$asidePager.find('li').eq(0).addClass('on');
	};
	if($winScroll >= ($bestOff - $headerHeight)-1){
		$asidePager.find('li').removeClass('on');
		$asidePager.find('li').eq(1).addClass('on');
	};
	if($winScroll >= ($recommandOff - $headerHeight)-1){
		$asidePager.find('li').removeClass('on');
		$asidePager.find('li').eq(2).addClass('on');	
	};	
	if($winScroll >= ($newOff - $headerHeight)-1){
		$asidePager.find('li').removeClass('on');
		$asidePager.find('li').eq(3).addClass('on');	
	};	
	if($winScroll >= ($storeOff - $headerHeight)-1){
		$asidePager.find('li').removeClass('on');
		$asidePager.find('li').eq(4).addClass('on');	
	};	
});


/*click*/
$asidePager.on('click','li',function(event){
	event.preventDefault();
	if($asidePager.hasClass('on')){
	return;
}
	var i = $(this).index()-1 ;
	var $offSet2 = $('.content.main').find('.conOffset').eq(i).offset().top;
	if($(this).hasClass('top')){
		$('body,html').stop().animate({
	scrollTop:$('#header').offset().top
	},300,'linear');
	}else{
	$('body,html').stop().animate({
	scrollTop:$offSet2 - $headerHeight
	},300,'linear');
	};
});
//asideBanner
$('#asideBanner').on('mouseover',function(){
	$(this).find('a').stop().animate({
		'width':'165px',
		'height':'165px'
		},300,'linear');
	$(this).find('>div').stop().animate({
		'font-size':'14px','font-weight:':'900','color':'#a01f31'
		},300,'linear');
		$(this).find('> div').text('INNOCENT SITE');
	$(this).find('a > div').stop().animate({
	'width':'165px',
	'height':'165px'
	},300,'linear');
	$(this).find('a > div > img').attr('src','./img/banner03.png');
	$(this).find('a > span').css({
	'display':'block'
	});
	$(this).find('a > p').css({
	'display':'block'
	});
}).on('mouseout',function(){
	$(this).find('a').stop().animate({
		'width':'80px',
		'height':'80px'
		},300,'linear');
	$(this).find('>div').stop().animate({
		'font-size':'12px','font-weight:':'300'
		},300,'linear');
		$(this).find('> div').text('MOUSEOVER');
	$(this).find('a > div').stop().animate({
	'width':'80px',
	'height':'80px'
	},300,'linear');
	$(this).find('a > div > img').attr('src','./img/banner02.png');
	$(this).find('a > span').css({
	'display':'none'
	});
	$(this).find('a > p').css({
	'display':'none'
	});
});
/*나타나기*/
var $asideBanner = $('#asideBanner');
$(window).on('scroll',function(){
	event.preventDefault();
	var $scroll3 = $(window).scrollTop();
	if($scroll3 >= $con1Offset){
		$asideBanner.stop().animate({
		'opacity':'1'
		},150,'linear');
	}else if($scroll3 <= $con1Offset){
	$asideBanner.stop().animate({
		'opacity':'0'
		},150,'linear');
	};
});
setInterval(function(){
$('#asideBanner').find('>div').animate({'color':'#444'},300,'linear').animate({'color':'#a01f31'},300,'linear');
	
},2000);
//
});//end