$(function(){


//비밀번호
$('.password').on('blur',function(){
	var $val1 = $('#password').val();
	var $val2 = $('.password').val();
	if($val1 !== $val2){
		$('span.error').css({'display':'inline-block'});
	}else{
		$('span.error').css({'display':'none'});
	};
});
//생년월일
var Year = $('.year').val();
$('.year').on('focus',function(){
	var Year2 = $('.year').val();
	if(Year2 ==Year){
		$(this).val('');
	}else{
		return;
	};
}).on('blur',function(){
	var Year2 = $('.year').val();
	if(Year2 ==''){
		$(this).val(Year);
	}else{
		return;
	};
});
//성별
$('.man').find('li').on('click','a',function(){
	event.preventDefault();
	if($(this).hasClass('active')){
		return;
	};
	$('.man').find('li > a').removeClass('active');
	$(this).addClass('active');
	
});
//e-mail
$('.e-mail').find('select').on('change',function(){
	var email = $(this).val();
	$('.e-mail > .cons').find('input').eq(1).val(email);
	if(email =="직접입력"){
		$('.e-mail > .cons').find('input').eq(1).val('');
	};
});
});//end