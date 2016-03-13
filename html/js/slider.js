// wrapperをwindowサイズに
  function setWinSize(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  wrapper.css('width',winWidth).css('height',winHeight);
  }

$('nav li a').on('click', function(evt) {
// イベントの停止
evt.preventDefault();
// リンク先の取得
var targetName = $(this).attr("href");
console.log(targetName);

// targetNameの座標
var targetPosX = $(targetName).offset().left;
// var targetPosY = $(targetName).offset().top;

$('html, body').animate({scrollLeft: targetPosX}, 800,'easeOutBounce');
});


$('#pageTo').hover(
  function(){
  $('#nextP').animate({"left":"-=200px"},"easeOutCubic");
},
function(){
  $('#nextP').animate({"left":"+=200px"},"easeOutCubic");
}
);

$('#pagePre').hover(
  function(){
  $('#prevP').animate({"left":"+=200px"},"easeOutCubic");
},
function(){
  $('#prevP').animate({"left":"-=200px"},"easeOutCubic");
}
);

$('#nextP').on('click',function(){
  $('html, body').animate({scrollLeft: '+=1500px'}, 800,'easeOutBounce');
});

$('#prevP').on('click',function(){
  $('html, body').animate({scrollLeft: '-=1500px'}, 800,'easeOutBounce');
});




// windowリサイズ
$(window).resize(function(){
// setWinSize();
});
