// DOMロード
$(function(){

  // タッチイベント
  $('#ball').on('touchstart',function(){
    $('#touchResult li').eq(0).text('touchstartしたよ');
  });

  $('#ball').on('touchend',function(){
    $('#touchResult li').eq(1).text('touchstartしたよ');
  });

  $('#ball').on('touchstart',function(){
    $('#touchResult li').eq(2).text('touchstartしたよ');
  });

};)
