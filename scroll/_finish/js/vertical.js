$(function() {

	$(window).scroll(function() {

		// スクロール値
		var dy = $(this).scrollTop();　// Y座標

		// スクロール値の表示
		$('.positionY').text( dy );
		// console.log(dy);
	});


	// クリックイベント
	$('header li a').on('click',function(evt) {
		
		// イベントの停止
		evt.preventDefault();

		// リンク先の取得
		var targetName = $(this).attr("href");
		console.log(targetName);

		// targetNameの座標
		var targetPosY = $(targetName).offset().top;

		// console.log(targetPos);
		$('html, body').animate({scrollTop: targetPosY-70}, 500);

	});

});
