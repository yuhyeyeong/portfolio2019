$(function(){
	/*PC*/
	var $window = $(window);
	var $header =	$('header').offset().top;
	var $section1Offset = $('section:nth-child(1)').offset().top;
	var $section2Offset = $('section:nth-child(2)').offset().top;
	var $section3Offset = $('section:nth-child(3)').offset().top;
	var $section4Offset = $('section:nth-child(4)').offset().top;
	var $section5Offset = $('section:nth-child(5)').offset().top;
	var $section6Offset = $('section:nth-child(6)').offset().top;
	/*header nav*/
	$('header .gnb').find('li > a').on('mouseover click',function(){
		$(this).css({'color':'#f57e21'});
	}).on('mouseout',function(){
		$(this).css({'color':'#131313'});
	});
	$('header .all').find('li > a').on('mouseover click',function(){
		$(this).css({'color':'#f57e21'});
	}).on('mouseout',function(){
		$(this).css({'color':'#131313'});
	});
	$('.gnb').find('li > a').eq(0).on('click',function(){
		$('html,body').animate({
		scrollTop:$section2Offset
		},400,'linear');
	});
	$('.gnb').find('li > a').eq(1).on('click',function(){
		$('html,body').animate({
		scrollTop:$section3Offset
		},500,'linear');
	});
	$('.gnb').find('li > a').eq(2).on('click',function(){
		$('html,body').animate({
		scrollTop:$section4Offset
		},500,'linear');
	});
	$('.gnb').find('li > a').eq(3).on('click',function(){
		$('html,body').animate({
		scrollTop:$section5Offset
		},500,'linear');
	});
	$('.gnb').find('li > a').eq(4).on('click',function(){
		$('html,body').animate({
		scrollTop:$section6Offset
		},500,'linear');
	});

	/*all*/
	$('.all').find('>li > a').on('click',function(event){
		var headerHeight =$('header').outerHeight();
		var winWid = $(window).width();
		event.preventDefault();
		if(winWid > 600){
			$('header > p').css({'display':'block','top':headerHeight});
			$('body').css({'overflow':'hidden'});
			$('.menu').css({'top':headerHeight});
		}else if(winWid <= 600){
			$('header > p').css({'display':'block','top':headerHeight});
			$('body').css({'overflow':'hidden'});
			$('.menuM').css({'display':'block','top':headerHeight,'left':'0px'});
		};
	});
	$('.menu').find('.fa.fa-times').on('click',function(event){
		event.preventDefault();
		$('header > p').css({'display':'none'});
		$('body').css({'overflow':'scroll'});
		$('.menu').stop().animate({'top':'-550px'},500,'linear');

	});
	$('.menuM').find('.fa.fa-times').on('click',function(event){
		event.preventDefault();
		$('header > p').css({'display':'none'});
		$('body').css({'overflow':'scroll'});
		$('.menuM').stop().animate({'display':'none','left':'-9999px'},500,'linear');

	});
	/*menu 색*/
	$('.menu').find('li > a').on('click',function(event){
		$('.menu').find('li > a').removeClass('on');
		$(this).addClass('on');
		$('header > p').css({'display':'none'});
		$('body').css({'overflow':'scroll'});
		$('.menu').css({'top':'-550px'});
	});
	/*menu scroll*/
	$('.menu').find('li > a').eq(0).on('click',function(){
		var headerHeight2 =$('header').outerHeight();
		$('html,body').animate({
		scrollTop:$section1Offset
		},400,'linear');
	});
	$('.menu').find('li > a').eq(1).on('click',function(){
		var $section2Off = $('section:nth-child(2)').offset().top;
		var headerHeight2 =$('header').outerHeight();
		$('html,body').animate({
		scrollTop:$section2Off -headerHeight2
		},500,'linear');
	});
	$('.menu').find('li > a').eq(2).on('click',function(){
		var $section3Off = $('section:nth-child(3)').offset().top;
		var headerHeight2 =$('header').outerHeight();
		$('html,body').animate({
		scrollTop:$section3Off -headerHeight2
		},500,'linear');
	});
	$('.menu').find('li > a').eq(3).on('click',function(){
		var $section4Off= $('section:nth-child(4)').offset().top;
		var headerHeight2 =$('header').outerHeight();
		$('html,body').animate({
		scrollTop:$section4Off -headerHeight2
		},500,'linear');
	});
	$('.menu').find('li > a').eq(4).on('click',function(){
		var $section5Off = $('section:nth-child(5)').offset().top;
		var headerHeight2 =$('header').outerHeight();
		$('html,body').animate({
		scrollTop:$section5Off -headerHeight2
		},500,'linear');
	});
	$('.menu').find('li > a').eq(5).on('click',function(){
		var $section6Off = $('section:nth-child(6)').offset().top;
		var headerHeight2 =$('header').outerHeight();
		$('html,body').animate({
		scrollTop:$section6Off -headerHeight2
		},500,'linear');
	});

	/*menuM 색*/
	$('.menuM').find('li > a').on('click',function(event){
		$('.menuM').find('li > a').removeClass('on');
		$(this).addClass('on');
		$('header > p').css({'display':'none'});
		$('body').css({'overflow':'scroll'});
		$('.menuM').css({'left':'-9999px'});
	});
	/*menuM scroll*/
	$('.menuM').find('li > a').eq(0).on('click',function(){
		var $s1Offset = $('section:nth-child(1)').offset().top;
		$('html,body').animate({
		scrollTop:$s1Offset
		},400,'linear');
	});
	$('.menuM').find('li > a').eq(1).on('click',function(){
		var headerHeight3 =$('header').outerHeight();
		var $s2Offset = $('section:nth-child(2)').offset().top;
		$('html,body').animate({
		scrollTop:$s2Offset -headerHeight3
		},500,'linear');
	});
	$('.menuM').find('li > a').eq(2).on('click',function(){
		var headerHeight3 =$('header').outerHeight();
		var $s3Offset = $('section:nth-child(3)').offset().top;
		$('html,body').animate({
		scrollTop:$s3Offset -headerHeight3
		},500,'linear');
	});
	$('.menuM').find('li > a').eq(3).on('click',function(){
		var headerHeight3 =$('header').outerHeight();
		var $s4Offset = $('section:nth-child(4)').offset().top;
		$('html,body').animate({
		scrollTop:$s4Offset -headerHeight3
		},500,'linear');
	});
	$('.menuM').find('li > a').eq(4).on('click',function(){
		var headerHeight3 =$('header').outerHeight();
		var $s5Offset = $('section:nth-child(5)').offset().top;
		$('html,body').animate({
		scrollTop:$s5Offset -headerHeight3
		},500,'linear');
	});
	$('.menuM').find('li > a').eq(5).on('click',function(){
		var headerHeight3 =$('header').outerHeight();
		var $s6Offset = $('section:nth-child(6)').offset().top;
		$('html,body').animate({
		scrollTop:$s6Offset -headerHeight3
		},500,'linear');
	});

	/*down버튼*/
	$('.down').on('click',function(){
		$('html,body').animate({
		scrollTop:$section2Offset
		},400,'linear');
	});
	/*section2*/
	$('#section2 .text').find('.con').on('mouseover',function(){
		$(this).find('div').addClass('light');
		$(this).find('.inner').css({
			'display':'block'});
	}).on('mouseout',function(){
		$(this).find('div').removeClass('light');
		$(this).find('.inner').css({'display':'none'});
	});

	/*section2_회사소개_MORE*/
	var $article2 = $('#section2').find('article').eq(1).offset().top;
	var $article3 = $('#section2').find('article').eq(2).offset().top;
	$('#section2 > article').eq(0).find('.button').on('click',function(){
		$('html,body').stop().animate({
		scrollTop:$article2
		},300,'linear');
	});
	$('#section2 .con:nth-child(1)').on('click',function(){
		$('html,body').stop().animate({
		scrollTop:$article2
		},300,'linear');
	});
	$('#section2 .con:nth-child(2)').on('click',function(){
		$('html,body').stop().animate({
		scrollTop:$('#CI').offset().top
		},300,'linear');
	});
	$('#section2 .con:nth-child(3)').on('click',function(){
		$('html,body').stop().animate({
		scrollTop:$('#awards').offset().top
		},300,'linear');
	});
	/*section2_기업이념*/
	$('#section2 > article').find('.List').on('mouseover',function(){
		$(this).find('p').eq(1).css({'color':'#111'});
	}).on('mouseout',function(){
		$(this).find('p').eq(1).css({'color':'#888'});
	});
	/*section2_기업이념_MORE*/
	$('#section2 > article').eq(1).find('.button').on('click',function(){
		$('html,body').stop().animate({
		scrollTop:$article3
		},300,'linear');
	});

	/*section CI/수상 슬라이더*/
	$('.slider01').bxSlider({
	  infiniteLoop: true,
	  hideControlOnEnd: true,
		controls:true
	});
	/*section3_친환경이노센트*/
	$('#section3 > div:nth-child(2) > div > div').on('mouseover',function(){
		$(this).find('div > div').addClass('shadow');
		$(this).find('.inner').css({'display':'block'});
	}).on('mouseout',function(){
		$(this).find('div > div').removeClass('shadow');
		$(this).find('.inner').css({'display':'none'});
	});
	/*section3_친환경이노센트_MORE*/
	$('#section3').find('.button').on('click',function(){
		$('html,body').stop().animate({
		scrollTop:$section4Offset
		},300,'linear');
	});
	/*section4_이노센트제품*/
	/*slide팝업*/
	$('#section4 > div:nth-child(2) > div').find(' > div').on('click',function(event){
		var $width =$('.bx-viewport').width();
		var i = $(this).index();
		event.preventDefault();
		$('.fixedBg').css({
			'opacity':'1','z-index':'9999','overflow-y':'scroll'
		});
		$('body').css({'overflow':'hidden'});
		$('.productTabBtn').find('a').removeClass('on');
		$('.productTabBtn').find('a').eq(i).addClass('on');
		
		$('.productTabCon').find('>div').css({'opacity':'0','z-index':'-1'});
		$($(this).find('a').attr('href')).css({'opacity':'1','z-index':'5'});
	});
	$('.fixedBg').find('> i').on('click',function(){
		$('.fixedBg').css({
			'opacity':'0','z-index':'-1'
		});
		$('body').css({'overflow':'scroll'});

	});
	WinW();
	$(window).on('resize',function(){
		WinW();
	});
	function WinW(){
		var winW = $(window).width();
		if(winW <=767){
			$('#section4 > div:nth-child(2) > div > div').eq(3).find('img').attr('src','./img/product04_2.png');
		}else if(winW >767){
			$('#section4 > div:nth-child(2) > div > div').eq(3).find('img').attr('src','./img/product04.png');
		};
	}

	$('.productTabBtn').find('a').on('click',function(){
		$('.productTabCon').find('>div').css({'opacity':'0','z-index':'-1'});
		$($(this).attr('href')).css({'opacity':'1','z-index':'5'});
		$('.productTabBtn').find('a').removeClass('on');
		$(this).addClass('on');
	});
	$('.productSlide').bxSlider({
		pagerCustom: '#pSlidePager',
		controls:true,
		captions: true
	});
	$('.productSlide2').bxSlider({
		pagerCustom: '#pSlidePager2',
		controls:true,
		captions: true
	});
	$('.productSlide3').bxSlider({
		pagerCustom: '#pSlidePager3',
		controls:true,
		captions: true
	});
	$('.productSlide4').bxSlider({
		pagerCustom: '#pSlidePager4',
		controls:true,
		captions: true
	});
	$('.productSlide5').bxSlider({
		pagerCustom: '#pSlidePager5',
		controls:true,
		captions: true
	});
	$('.productSlide6').bxSlider({
		pagerCustom: '#pSlidePager6',
		controls:true,
		captions: true
	});
	/*section5_홍보매거진*/
	/*tab*/
		$('.eventTabCon').find('> div').hide();
		$('.eventTabCon').find('div:nth-child(1)').show();
	$('#section5').find('.eventTabBtn > a').on('click',function(event){
		event.preventDefault();
		$('#section5').find('.eventTabBtn > a').removeClass('on');
		$(this).addClass('on');
		if($('#section5').find('.eventTabBtn > a').eq(1).hasClass('on')){
			$('.category').hide();
			$('#section5 .pager').hide();
		}else{
			$('.category').show();
			$('#section5 .pager').show();
		};
		$('.eventTabCon').find('> div').hide();
		$($(this).attr('href')).show();
	});
	/*진행/종료*/
	$('.category').find('div > a').on('click',function(event){
		event.preventDefault();
		if($(this).hasClass('on')){
			return;
		};
		$('.category').find('div > a').eq(0).addClass('on');
		$('.category').find('div > a').removeClass('on');
		$(this).addClass('on');
		$('#eventTabCon1 > ul').hide();
		$($(this).attr('href')).show();

	});
	/*pager*/
	$('#section5 .pager').find('li > a').eq(0).addClass('on');
	$('#section5 .pager').find('li > a').on('click',function(event){
		event.preventDefault();
		if($(this).hasClass('on')){
			return;
		};
		$('#section5 .pager').find('li > a').removeClass('on');
		$(this).addClass('on');
	});
	/*section6 대리점*/
	$('.stores > div').eq(0).find('a').on('click',function(event){
		event.preventDefault();
		$('#section6').find('iframe').attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.776820952797!2d126.70717101508274!3d37.46599103763812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7bf6dfcd0837%3A0xec8dce73328a66dc!2z7J2064W47IS87Yq4IOqwhOyEnQ!5e0!3m2!1sko!2skr!4v1500876316791');
	});
	$('.stores > div').eq(1).find('a').on('click',function(event){
		event.preventDefault();
		$('#section6').find('iframe').attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.853887282387!2d127.09352011508453!3d37.53494143369497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca53cefcffa77%3A0xde9a7bcee92cbae0!2z6rCV67OAIO2FjO2BrOuFuOuniO2KuA!5e0!3m2!1sko!2skr!4v1500877045422');
	});
	$('.stores > div').eq(2).find('a').on('click',function(event){
		event.preventDefault();
		$('#section6').find('iframe').attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41259.854043527186!2d128.59985012722225!3d34.892559941237764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356ecd658cda1473%3A0x1340fd021f68779d!2z7J2064W47IS87Yq46rCA6rWs6rGw7KCc64yA66as7KCQ!5e0!3m2!1sko!2skr!4v1500877175848');
	});
	$('.stores > div').eq(3).find('a').on('click',function(event){
		event.preventDefault();
		$('#section6').find('iframe').attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.527748512073!2d126.63066171508292!3d37.47187073730207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b78ece4837f0b%3A0x6b36e6bdfbbf1113!2z7J2064W47IS87Yq46rK964-Z7KCQ!5e0!3m2!1sko!2skr!4v1500877225034');
	});
	/*pager*/
	$('#section6 .pager').find('li > a').eq(0).addClass('on');
	$('#section6 .pager').find('li > a').on('click',function(event){
		event.preventDefault();
		if($(this).hasClass('on')){
			return;
		};
		$('#section6 .pager').find('li > a').removeClass('on');
		$(this).addClass('on');
	});
	/*asidePager*/
	/*클릭_스크롤*/
	var $asidePager = $('.asidePager').find('li > a');
	$asidePager.eq(0).on('click',function(){
		$('html,body').animate({
		scrollTop:$header
		},400,'linear');
	});
	$asidePager.eq(1).on('click',function(){
		$('html,body').animate({
		scrollTop:$section2Offset
		},400,'linear');
	});
	$asidePager.eq(2).on('click',function(){
		$('html,body').animate({
		scrollTop:$section3Offset
		},400,'linear');
	});
	$asidePager.eq(3).on('click',function(){
		$('html,body').animate({
		scrollTop:$section4Offset
		},400,'linear');
	});
	$asidePager.eq(4).on('click',function(){
		$('html,body').animate({
		scrollTop:$section5Offset
		},400,'linear');
	});
	$asidePager.eq(5).on('click',function(){
		var $section6Off = $('section:nth-child(6)').offset().top;
		$('html,body').animate({
		scrollTop:$section6Off
		},400,'linear');
	});
	/*스크롤_버튼변경*/
	$button();
	$window.on('scroll',function(){
		$button();
	});
	var section6Off = $('section:nth-child(6)').offset().top;
	function $button(){
		var $scrollTop2 = $window.scrollTop();
		if($scrollTop2 >= $header){
			$asidePager.removeClass('click');
			$asidePager.eq(0).addClass('click');
		};
		if($scrollTop2 >= $section2Offset-1){
			$asidePager.removeClass('click');
			$asidePager.eq(1).addClass('click');
		};
		if($scrollTop2 >= $section3Offset-1){
			$asidePager.removeClass('click');
			$asidePager.eq(2).addClass('click');
		};
		if($scrollTop2 >= $section4Offset-1){
			$asidePager.removeClass('click');
			$asidePager.eq(3).addClass('click');
		};
		if($scrollTop2 >= $section5Offset-1){
			$asidePager.removeClass('click');
			$asidePager.eq(4).addClass('click');
		};
		if($scrollTop2 >= section6Off-1){
			$asidePager.removeClass('click');
			$asidePager.eq(5).addClass('click');
		};
	}

});//end