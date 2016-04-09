$(function(){
  console.log('読み込んだぜ');

 $('#home').animate({width:'85%'},200).show();


$('nav li a').on('click',function(){
  console.log('クリックしたよ');
  var targetName = $(this).attr('href');
  // var contentName = $(targetName).children();

  console.log(targetName);

  $(targetName).animate({width:'85%'},200).show();


  $('.content').not(targetName).animate({width:'0%'}).hide();


});

});
