$(function() {



	$(window).scroll(function() {

		// スクロール値

		var dx = $(this).scrollLeft();　// X座標
		var dy = $(this).scrollTop();　// Y座標


		// スクロール値の表示
		$('.positionX').text( dx );
		$('.positionY').text( dy );
		// console.log(dy);
	});



	// #wrapperの幅と高さをwindowサイズに
	function setWinSize(){
		var winWidth = $(window).width();
		var winHeight = $(window).height();

		wrapper.css('width',winWidth).css('height',winHeight);
	}


	// クリックイベント
	$('footer li a, #scroll a').on('click',function() {

		// リンク先の取得
		var targetName = $(this).attr("href");
		console.log(targetName);

		// targetNameの座標
		var targetPosX = $(targetName).offset().left;
		var targetPosY = $(targetName).offset().top;

		// console.log(targetPos);
		$('html, body').animate({scrollLeft: targetPosX,scrollTop: targetPosY
		}, 500);
		return false;
	});


	// windowリサイズ
	$(window).resize(function(){
		// setWinSize();
	});

});
