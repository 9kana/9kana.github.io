$(function(){
  // GPS
  console.log('DOM読み込んだよ');
  navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;

    console.log(lat,lon);

    //定数
    const apikey = '2f9278cf2b5d932086da421cb6cf84c5';
    // openweathermapのお天気情報のURL
    var url = 'api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon +'&appid=' + apikey;

    $.ajax({
      url:url,
      dataType:'json'
    }).done(function(data){

      showWeather(data);

    }).fail(function(){
      console.log('ajax error!!!');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status , "textStatus : " + textStatus , "errorThrown : " + errorThrown.message);
    });

    // htmlに表示する関数
    function showWeather(data){
      console.log(data);

      // 地域名
      var areaName = data.name;
      $('#areaName').text(areaName);
    }


  });
});
