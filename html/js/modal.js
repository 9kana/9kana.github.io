
$(function(){
  console.log('読み込んだよ');

$('.eve').on('click',function(){

  console.log(this.id+ 'クリックしたよ');
    $('#modal-overlay').slideDown("fast").fadeIn();

    var count = this.id;

    $('#modal-content li').eq(count).show("fast");
  });

$('#close').on('click',function(){
  $('#modal-overlay').slideUp("fast").fadeOut();
});


});
