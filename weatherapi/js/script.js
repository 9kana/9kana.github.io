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
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon +'&appid=' + apikey;

    $.ajax({
      url:url,
      dataType:'json'
    }).done(function(data){
        showWeather(data);

    }).fail(function(){
      console.log('ajax error!!!');
    });

    // htmlに表示する関数
    function showWeather(data){
      console.log(data);

      // 地域名
      var areaName = data.name;
      $('#areaName').text(areaName);

      // 気温
      var areaTemp = data.main.temp; //華氏
      areaTemp = areaTemp - 273.15;
      $('#areaTemp').text(Math.round(areaTemp) + '度');

      // 湿度
      var areaHumidity = data.main.humidity;
      $('#areaHumidity').text(areaHumidity + '%');

      // 天気
      var areaWeather = data.weather[0].description;
      $('#areaWeather').text(areaWeather);

      // 天気アイコン
      var weatherIcon = 'http://openweathermap.org/img/w/' +data.weather[0].icon + '.png';
      $('#weatherIcon').append('<img src="'+ weatherIcon +'">');
    }


  });
});
