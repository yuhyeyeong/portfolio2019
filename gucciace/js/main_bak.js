$(function(){
	//fullpage_height
	var ht =$(window).height();
	$('section').height(ht);
	$(window).on('resize',function(){
		var ht2 =$(window).height();
		$('section').height(ht2);
	});
	//버튼변경
		$scroll();
	$(window).on('scroll',function(){
		$scroll();
	});
	//section1 소개
	$('section:nth-child(1) > div').stop().animate({
		'top':'38%','opacity':'1'
		},880,'linear');
		$('section:nth-child(1) > p').stop().animate({
		'top':'52%','opacity':'1'
		},1080,'linear');
	//section
	function $scroll(){
		var scrollTop = $(window).scrollTop();
		var ht3 =$(window).height();
		if(scrollTop >= 0 && scrollTop < ht3*1){
			$('.pager > li').find('a').removeClass('on');
			$('.pager > li').find('a').eq(0).addClass('on');
				$('h1 > a').find('img').attr('src','./img/symbolLogo_gold.png');
			$('.menuBar').find('img').attr('src','./img/bar_gold.png');
			$('section:nth-child(1) > div').stop().animate({
			'top':'38%','opacity':'1'
			},500,'linear');
			$('section:nth-child(1) > p').stop().animate({
			'top':'52%','opacity':'1'
			},700,'linear');
		};
		if(scrollTop >= ht3*1-1 && scrollTop < ht3*2){
			$('.pager > li').find('a').removeClass('on');
			$('.pager > li').find('a').eq(1).addClass('on');
			$('h1 > a').find('img').attr('src','./img/symbolLogo_black.png');
			$('.menuBar').find('img').attr('src','./img/bar_black.png');
			$('section:nth-child(1) > div').stop().animate({
			'top':'55%','opacity':'0'
			},500,'linear');
			$('section:nth-child(1) > p').stop().animate({
			'top':'70%','opacity':'0'
			},500,'linear');
		};
		if(scrollTop >= ht3*2-1 && scrollTop < ht3*3){
			$('.pager > li').find('a').removeClass('on');
			$('.pager > li').find('a').eq(2).addClass('on');
			$('h1 > a').find('img').attr('src','./img/symbolLogo_black.png');
			$('.menuBar').find('img').attr('src','./img/bar_black.png');
			$('.scroll').css({'display':'block'});
		};
		if(scrollTop >= ht3*3-1 && scrollTop < ht3*4){
			$('.pager > li').find('a').removeClass('on');
			$('.pager > li').find('a').eq(3).addClass('on');
			$('h1 > a').find('img').attr('src','./img/symbolLogo_black.png');
			$('.menuBar').find('img').attr('src','./img/bar_black.png');
			$('.scroll').css({'display':'none'});
		};
		if(scrollTop >= ht3*4-1 && scrollTop < ht3*5){
			$('.pager > li').find('a').removeClass('on');
			$('.pager > li').find('a').eq(4).addClass('on');
			$('h1 > a').find('img').attr('src','./img/symbolLogo_gold.png');
			$('.menuBar').find('img').attr('src','./img/bar_gold.png');
			$('.scroll').css({'display':'none'});
		};
	}
	//pager클릭시스크롤
	$('.pager > li').on('click',function(event){
		event.preventDefault();
		var i=$(this).index();
		var ht4=$(window).height();
		var nowHt = i*ht4;
		$('html,body').stop().animate({
			scrollTop: nowHt
		},800,'easeInOutQuad');
	});
	//scroll 클릭시 아래로
	$('.scroll').on('click',function(){
		var scrollTop2 = $(window).scrollTop();
		var ht5 =$(window).height();
		if(scrollTop2 >= 0 && scrollTop2 < ht5*1){
			$('html,body').stop().animate({
				scrollTop:ht5*1
			},700,'easeInOutQuad');
		};
		if(scrollTop2 >= ht5*1-1 && scrollTop2 < ht5*2){
			$('html,body').stop().animate({
				scrollTop:ht5*2
			},700,'easeInOutQuad');
		};
		if(scrollTop2 >= ht5*2-1 && scrollTop2 < ht5*3){
			$('html,body').stop().animate({
				scrollTop:ht5*3
			},700,'easeInOutQuad');
		};
	});
	//mousewheel
	$('section').on('mousewheel',function(event,delta){
		if(delta > 0){
			var prev=$(this).prev().offset().top;
			$('html,body').stop().animate({
				'scrollTop': prev
			},750,'easeInOutQuad');	
		};
		if(delta < 0){
			var next=$(this).next().offset().top;
			$('html,body').stop().animate({
				'scrollTop':next
			},750,'easeInOutQuad');
		};
	});

	//section2 골라봐
	$('section:nth-child(2) > .List > div').on('mousedown',function(){
		var $clone = $(this).find('>div').clone();
		
		if($(this).hasClass('Li03')){
			$(this).css({'transform':'scale(1.53)'});
		}else{
			$(this).css({'transform':'scale(1.35)'});
		};
		$(this).parent('div').append($clone);
		$('section:nth-child(2)').find('>div').eq(1).text('Please put it on this sneakers.');
		$('section:nth-child(2)').find('>div').eq(1).css({'bottom':'72px','font-size':'25px'});
	});
	setInterval(function(){
	$('section:nth-child(2)').find('>div').eq(1).animate({
		'color':'#23cec1'
		},800,'linear').animate({
		'color':'#52eade'
		},800,'linear');
	},800);
	
	//드래그발생
	dragElement('.Li01');//함수호출 setInterval();같은역할
	dragElement('.Li02');
	dragElement('.Li03');
	dragElement('.Li04');
	dragElement('.Li05');
	dragElement('.Li06');//함수호출 setInterval();같은역할
	dragElement('.Li07');
	dragElement('.Li08');
	function dragElement(selector){
	
		//변수생성
		var startX=0; //이벤트의 시작,위치 좌표X축
		var startY=0; 
		var delX=0; //이동한 거리X축
		var delY=0;
		var offsetX=0; //객체(box)의 위치
		var offsetY=0;

		$(selector).on('mousedown touchstart',function(e){
			e.preventDefault();
			//이동하지말아야 하는경우
			if(e.clientX === undefined){
				e=e.originalEvent.touches[0];//스마트폰.touches[] 뷰포트에 터치가 일어난 순서. [0]번째 터치
			};
		
		//위에 지정한 변수값을 업데이트
		startX=e.clientX;
		startY=e.clientY;
		offsetX=$(selector).position().left;
		offsetY=$(selector).position().top;

		//이동해야된다.
		$(document).on('mousemove touchmove',function(e){
			if(e.clientX === undefined){
				e=e.originalEvent.touches[0];
			};	

			delX=e.clientX-startX;//움직이는값-클릭한위치
			delY=e.clientY-startY;

			$(selector).css({'left':(offsetX+delX)+'px','top':(offsetY+delY)+'px'});
		});

		$(document).on('mouseup touchend',function(){
		
		$(document).off('mousemove mouseup touchmove touchend'); //이벤트(매개변수)를 종료하는 메서드
	
		});
	});


	}/////함수

});//end