// DOMの読み込み完了
$(function(){
  console.log('DOM読み込んだよ');

// ボタンとして機能させたい場合はidだけでなくaももってくる
  $('.pagetop a').on('click',function(evt){
    console.log('クリックしたよ');
    console.log(evt);
    evt.preventDefault(); //イベントの停止

    $('html,body').animate({scrollTop:0},2000,'easeOutBounce');
  })

  $('header li a').on('click',function(evt){
    evt.preventDefault(); //イベント停止
    // console.log(evt.currentTarget.hash);

    // リンク先を保存する変数
    var targetName = $(this).attr('href');
    console.log(targetName);

    // targetNameの座標
    var targetPos = $(targetName).offset().top;
    console.log(targetPos);

    // targetPosまでのアニメーション
    $('html,body').animate({scrollTop:targetPos},1000,'easeOutCubic');
  });

    // スクロールイベント
    $(window).scroll(function(){
      // console.log('スクロールしているよ');
      // windowのトップの高さ値
      var posY = $(this).scrollTop();
      console.log(posY);

      if(posY > 200){
        $('header').slideDown();
      }else if(posY < 200){
        $('header').slideUp();
      }
    });

});
