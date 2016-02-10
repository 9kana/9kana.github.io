$(function(){
  // GPS
  console.log('DOM読み込んだよ');
  navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;

    console.log(lat,lon);
  });
});
