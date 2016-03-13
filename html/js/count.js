
$(function(){
  console.log('DOM読み込んだよ');


  var count = 0;
  console.log(count + 'スライドショー');

$('.list').fadeIn("easeOutQuint");


  // クリックイベント
  $('#next').on('click',function(){
    nextSlide();
  });
  $('#prev').on('click',function(){
    prevSlide();
  });


  // カウンター数を減らす関数
  function prevSlide(){

      // カウンターを１ずつ増やす
       count = count - 1;

      if(count < 0){
        count = 2;
      }

      $('#circle li').removeClass('select');
      $('#circle li').eq(count).addClass('select');

      $('.list').fadeOut("fast",function(){
        $('.sound').removeClass('list');
        $('.sound').eq(count).addClass('list');
        $('.list').fadeIn("fast");
      });
  }

  // カウンター数を増やす関数
  function nextSlide(){
      count = count + 1;

      if(count > 2){
        count = 0;
      }

      // #circleのリストからselectを一旦とる
      $('#circle li').removeClass('select');

      // #circleのリストのcount番目に.selectを追加する
      $('#circle li').eq(count).addClass('select');

      $('.list').fadeOut("fast",function(){
        $('.sound').removeClass('list');
        $('.sound').eq(count).addClass('list');
        $('.list').fadeIn("fast");
      });

  }


});
