$(function() {

	// クリックイベント
	$('.pagetop a').on('click',function(evt) {

		// イベントの停止
		evt.preventDefault();

		$('html, body').animate({scrollTop: 0}, 500);

	});

});
