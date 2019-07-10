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

//조회팝업
//팝업나타나기
$('div.popup').find('span.whiteBtnS').on('click',function(){
	$('.pop').css({'display':'none'});
	$(this).siblings('.pop').css({'display':'block'});
	
});
//마일리지팝업
//close
$('.mileage').find('a.close').on('click',function(){
	event.preventDefault();
	$('.mileage').find('.pop').css({'display':'none'});
});
//addClass('on')
$('.term').find('a').on('click',function(){
	$('.term').find('a').removeClass('on');
	$(this).addClass('on');
});
//쿠폰팝업 
//close
$('.coupon').find('a.close').on('click',function(){
	event.preventDefault();
	$('.coupon').find('.pop').css({'display':'none'});
});
//addClass('on')
$('.term1').find('a').on('click',function(){
	$('.term1').find('a').removeClass('on');
	$(this).addClass('on');
});
//입금확인중
setInterval(function(){
	$('.notice').animate({'opacity':'0.7'},450,'linear').animate({'opacity':'1'},450,'linear');
},2300);
//최근주문내역
//상품명
$('.mypage #con1').find('.prodeuct').on('mouseover',function(){
	$(this).css({'text-decoration':'underline','opacity':'1'});
}).on('mouseout',function(){
	$(this).css({'text-decoration':'none','opacity':'0.9'});
});
//교환/반품 팝업
//나타나기
$('div.change > span').on('click',function(){
		if(!$(this).hasClass('visiable')){
			$(this).siblings('.pop').css({'display':'block'});
			$(this).addClass('visiable');
		}else{
			$(this).siblings('.pop').css({'display':'none'});
			$(this).removeClass('visiable');
		};
		
});
//close
$('.change').find('a.close').on('click',function(){
	event.preventDefault();
	$('.change').find('.pop').css({'display':'none'});
	$('div.change > span').removeClass('visiable');
});
//tab
var $btn = $('.tabBtn').find('>li');
var $con = $('.tabCon').find('>li');
$btn.find('a').eq(0).addClass('active');
$con.hide();
$con.eq(0).show();
$btn.find('a').on('click',function(){
	event.preventDefault();
	if($(this).hasClass('active')){
		return;
	};
	$btn.find('a').removeClass('active');
	$(this).addClass('active');
	$con.hide();
	$($(this).attr('href')).show();
});
//교환/반품_input:focus
var $value = $('.focus').val();
$('.focus').on('focus',function(){
	$(this).val('');
}).on('blur',function(){
	var $value2 = $(this).val();
	if($value2 == ""){
	$(this).val($value);
	};	
});
//반품:focus
//계좌번호
var $Value = $('.focus2').val();
$('.focus2').on('focus',function(){
	$(this).val('');
}).on('blur',function(){
	var $Value2 = $(this).val();
	if($Value2 == ""){
	$(this).val($Value);
	};	
});
//예금주
var $Val = $('.focus3').val();
$('.focus3').on('focus',function(){
	$(this).val('');
}).on('blur',function(){
	var $Val2 = $(this).val();
	if($Val2 == ""){
	$(this).val($Val);
	};	
});
//상품평쓰기
$('.reviewBtn').on('click',function(){
	event.preventDefault();
	  $('.review').slideDown();
});
//닫기
$('.review').find('.close').on('click',function(){
	event.preventDefault();
	  $('.review').slideUp();
});
//확인
$('.review').find('.confirm').on('click',function(){
	event.preventDefault();
	confirm("상품후기를 등록하시겠습니까?");
	  $('.review').css({'display':'none'});
});
//별점
$('.star').find('li:nth-child(-n+5)').on('click',function(){
	var $star = $(this).index()+1;
	$('.star').find('li').eq(5).text('('+$star+'.'+0+')');
	
	$(this).nextAll().css({'color':'#c5c5c5'});
	$('.star').find('li:nth-child(6)').css({'color':'#777'});
	$(this).prevAll().add($(this)).css({'color':'#f1bc1a'});
	
	
});
//첨부파일
$('#filename').on('change',function(){
	if(window.FileReader){

		var $filename=$(this)[0].files[0].name;

		}else{
		$filename=$(this).val().split('/').pop().split('\\').pop();
		};

	$(this).siblings('.filename').val($filename);

});

//instagram
var $insta = $('.insta > li');
$insta.on('mouseover',function(){
	$(this).find('a').eq(0).addClass('shadow');
}).on('mouseout',function(){
	$(this).find('a').eq(0).removeClass('shadow');
});
});//end