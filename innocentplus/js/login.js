$(function(){

//tab
var $tabBtn = $('.log .tabBtn').find('li');
var $tabCon = $('.log .tabCon').find('div');
$tabBtn.find('a').eq(0).addClass('active');
$tabCon.hide();
$tabCon.eq(0).show();
$tabBtn.find('a').on('click',function(){
	event.preventDefault();
	$tabBtn.find('a').removeClass('active');
	$(this).addClass('active');
	$tabCon.hide();
	$($(this).attr('href')).show();
});

//간편로그인
$('.naverLogin').on('click',function(){
	window.open('https://nid.naver.com/nidlogin.login?template=plogin&mode','네이버 간편로그인','width=400.height=600')
});
//아이디 비밀번호 오류
var $alink = $('.login').attr('href');
$('.login').on('click',function(){
var $id = $('.tabCon').find('.id').val();
var $password = $('.tabCon').find('.pass').val();
if($id =="" || $password ==""){
	alert('아이디와 비밀번호를 정확히 입력해주세요.');
	$('.login').attr('href',location.href);
}else{
	$('.login').attr($alink);
};
});
$('.login2').on('click',function(){
	var $id2 = $('.tabCon').find('.id2').val();
	var $password2 = $('.tabCon').find('.pass2').val();
if($id2 =="" || $password2 ==""){
	alert('아이디와 비밀번호를 정확히 입력해주세요.');
	$('.login2').attr('href',location.href);
}else{
	$('.login2').attr($alink);
};
});
});//end