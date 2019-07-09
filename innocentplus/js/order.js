$(function(){

//이름
$('.name').on('blur',function(){
	if($('.name').val() == ""){
		$(this).siblings('.tip').css({'display':'inline-block'});
	}else{
		$(this).siblings('.tip').css({'display':'none'});
	};
});

//주문자 핸드폰번호
$('.Phone').find('input:text').on('blur',function(){
var $phonNum = Number($('.phone').val());
var $phonNum2 = Number($('.phone2').val());
if($phonNum >=10000 || 10000<= $phonNum2){
	$('.Phone').find('.tip').css({'display':'inline-block'});
}else{
	$('.Phone').find('.tip').css({'display':'none'});
};
});
//받는분_동일
$('#same').on('click',function(){
	if($('#same').is(':checked')){
		var $customer = $('.orderCon2').find('.customer').val();
		var $selfPhone = $('.orderCon2').find('.selfPhone').val();
		var $selfPhone2 = $('.orderCon2').find('.selfPhone2').val();
		var $Zipcode= $('.orderCon2').find('.Zipcode').val();
		var $Address= $('.orderCon2').find('.Address').val();
		var $Address2= $('.orderCon2').find('.Address2').val();
		$('.orderCon3').find('.customer').val($customer);
		$('.orderCon3').find('.selfPhone').val($selfPhone);
		$('.orderCon3').find('.selfPhone2').val($selfPhone2);
		$('.orderCon3').find('.Zipcode').val($Zipcode);
		$('.orderCon3').find('.Address').val($Address);
		$('.orderCon3').find('.Address2').val($Address2);
	}else{
	 $('.orderCon3').find('.input').val('');
	};
});

//받는분 핸드폰번호
$('.Phone2').find('input:text').on('blur',function(){
var $PhonNum = Number($('.phone3').val());
var $PhonNum2 = Number($('.phone4').val());
if($PhonNum >=10000 || 10000<= $PhonNum2){
	$('.Phone2').find('.tip').css({'display':'inline-block'});
}else{
	$('.Phone2').find('.tip').css({'display':'none'});
};
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