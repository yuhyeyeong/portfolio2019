$(function(){

//콤마
	$(document).ready(function(){
	$('.cartPrice').each(function(index){
		$(this).text($(this).text().split(/(?=(?:\d{3})+(?:\.|$))/g).join(','));
	});
});	
//수량
var $textC = $('.numCart').find('li');
var $numCart = $('.numCart').find('li').eq(1);
$textC.eq(0).on('click',function(){
	var $Carttext =Number($numCart.text());
	if($Carttext == 1){
		return;
	};
	$numCart.text($Carttext -1);
});
$textC.eq(2).on('click',function(){
	var $textDe =Number($numCart.text());
	$numCart.text($textDe+1);
});

//가격변동
var $money = Number($('.money').text());
var $Change = $('.changeCart');

$Change.text($money);
$('.numCart').find('.numBtn').on('click',function(){
	var $cartPrice = $('.cartPrice');
	var $Num = Number($numCart.text());
	$cartPrice.text($money*$Num);
	$(document).ready(function(){
	$('.cartPrice').each(function(index){
		$(this).text($(this).text().split(/(?=(?:\d{3})+(?:\.|$))/g).join(','));
	});
});	
});

//close 버튼
$('.close').on('click',function(){
	$('.hidden').css({'display':'none'});
	$('.empty').css({'display':'block'});
	$Change.text(0);
});
//checked
$('#allChecked').on('click',function(){
	 if($("input:checkbox[id='allChecked']").is(":checked")){
     $("input:checkbox[id='checked']").prop("checked", true);
}else{
     $("input:checkbox[id='checked']").prop("checked", false);
}
});


});//end