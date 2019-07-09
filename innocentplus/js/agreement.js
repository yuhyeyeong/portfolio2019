$(function(){
//동의체크박스
$('.agreeCon').eq(0).find('input:checkbox').on('click',function(){
	if($(this).is(':checked')){
	$(this).siblings('input').prop('checked',false);
};	
});
$('.agreeCon').eq(1).find('input:checkbox').on('click',function(){
	if($(this).is(':checked')){
	$(this).siblings('input').prop('checked',false);
};	
});
//오류
var $next = $('.nextBtn').attr('href');
var $con1 = $('.agreeCon').eq(0).find('input[id=agree]');
var $con2 = $('.agreeCon').eq(1).find('input[id=agree]');
$('.nextBtn').on('click',function(){
	if($con1.is(':checked') && $con2.is(':checked')){
		$(this).attr($next);
}else{
	alert('약관동의 후에 다음으로 이동하실 수 있습니다.');
	$(this).attr('href',location.href);
};	
});
});//end