//ロード素材
var manifest = [
  {src:'img/tbo.png'},
  {src:'img/pampers.mp3'},
  {src:'img/gilotin.png'},
  {src:'img/why.mp3'},
  {src:'img/lip.png'},
  {src:'img/year.mp3'},
  {src:'img/janizoma.png'},
  {src:'img/drum.mp3'},
  {src:'img/spray.png'},
  {src:'img/spray.mp3'},
  {src:'img/kascade.png'},
  {src:'img/ah.mp3'}
];

//ステージの設定
var stage;

window.addEventListener('load',init);

//初期設定
function init(){

  //ローダー
    var loader = new createjs.LoadQueue();
    loader.loadManifest(manifest);

    loader.addEventListener('progress',function(evt){
      console.log(evt.progress);

    });

    loader.addEventListener('complete',function(){
      console.log('読み込み完了');
      addStage();
    });

    stage = new createjs.Stage('canvasEL');



 //ステージに配置する
    function addStage(){

        // ステッカーの位置設定
        var stickerT = new createjs.Bitmap(manifest[0].src);
        stage.addChild(stickerT);
        stickerT.scaleX = 1.2;
        stickerT.scaleY = 1.2;
        stickerT.x = 300;
        stickerT.y = 50;
        stickerT.alpha = 0;

        var tbo = "tbo";
        createjs.Sound.registerSound(manifest[1].src, tbo);

        var stickerG = new createjs.Bitmap(manifest[2].src);
        stage.addChild(stickerG);
        stickerG.scaleX = 1;
        stickerG.scaleY = 1;
        stickerG.x = 1000;
        stickerG.y = 300;
        // stickerG.rotation = 45;
        stickerG.alpha = 0;

        var gilotin = "gilotin";
        createjs.Sound.registerSound(manifest[3].src, gilotin);

        var stickerY = new createjs.Bitmap(manifest[4].src);
        stage.addChild(stickerY);
        stickerY.scaleX = 1;
        stickerY.scaleY = 1;
        stickerY.x = 200;
        stickerY.y = 400;
        stickerY.rotation = 45;
        stickerY.alpha = 0;

        var year = "year";
        createjs.Sound.registerSound(manifest[5].src, year);

        var stickerH = new createjs.Bitmap(manifest[6].src);
        stage.addChild(stickerH);
        stickerH.scaleX = 1;
        stickerH.scaleY = 1;
        stickerH.x = 300;
        stickerH.y = 250;
        stickerH.rotation = 225;
        stickerH.alpha = 0;

        var janizoma = "janizoma";
        createjs.Sound.registerSound(manifest[7].src, janizoma);

        var stickerU = new createjs.Bitmap(manifest[8].src);
        stage.addChild(stickerU);
        stickerU.scaleX = 1;
        stickerU.scaleY = 1;
        stickerU.x = 700;
        stickerU.y = 40;
        stickerU.rotation = 45;
        stickerU.alpha = 0;

        var spray = "spray";
        createjs.Sound.registerSound(manifest[9].src, spray);

        var stickerJ = new createjs.Bitmap(manifest[10].src);
        stage.addChild(stickerJ);
        stickerJ.scaleX = 1;
        stickerJ.scaleY = 1;
        stickerJ.x = 400;
        stickerJ.y = 200;
        stickerJ.rotation = 45;
        stickerJ.alpha = 0;

        var ah = "ah";
        createjs.Sound.registerSound(manifest[11].src, ah);


        // キーイベント
        document.addEventListener('keydown',function(evt){
          console.log(evt.keyCode);

          // T
          if(evt.keyCode == 84){
            console.log('tが押されたよ');
            createjs.Tween.get(stickerT).call(function(){
              var instance = createjs.Sound.play(tbo);
              instance.addEventListener('complete',function(){
                console.log('音が終わったよ');
                createjs.Tween.get(stickerT).wait(1000).to({alpha:0},100);
              })
            }).to({alpha:1},100);
          }

          // G
          if(evt.keyCode == 71){
            console.log('gが押されたよ');
            createjs.Tween.get(stickerG).call(function(){
              var instance = createjs.Sound.play(gilotin);
              instance.addEventListener('complete',function(){
                console.log('音が終わったよ');
                createjs.Tween.get(stickerG).wait(1000).to({alpha:0},100);
              })
            }).to({alpha:1},100);
          }

          // Y
          if(evt.keyCode == 89){
            console.log('yが押されたよ');
            createjs.Tween.get(stickerY).call(function(){
              var instance = createjs.Sound.play(year);
              instance.addEventListener('complete',function(){
                console.log('音が終わったよ');
                createjs.Tween.get(stickerY).wait(1000).to({alpha:0},100);
              })
            }).to({alpha:1},100);
          }

          // H
          if(evt.keyCode == 72){
            console.log('hが押されたよ');
            createjs.Tween.get(stickerH).call(function(){
              var instance = createjs.Sound.play(janizoma);
              instance.addEventListener('complete',function(){
                console.log('音が終わったよ');
                createjs.Tween.get(stickerH).wait(1000).to({alpha:0},100);
              })
            }).to({alpha:1},100);
          }

          // U
          if(evt.keyCode == 85){
            console.log('uが押されたよ');
            createjs.Tween.get(stickerU).call(function(){
              var instance = createjs.Sound.play(spray);
              instance.addEventListener('complete',function(){
                console.log('音が終わったよ');
                createjs.Tween.get(stickerU).wait(1000).to({alpha:0},100);
              })
            }).to({alpha:1},100);
          }

          // J
          if(evt.keyCode == 74){
            console.log('uが押されたよ');
            createjs.Tween.get(stickerJ).call(function(){
              var instance = createjs.Sound.play(ah);
              instance.addEventListener('complete',function(){
                console.log('音が終わったよ');
                createjs.Tween.get(stickerJ).wait(1000).to({alpha:0},100);
              })
            }).to({alpha:1},100);
          }

        });
    }
 // document.removeEventListener('click',init);

    createjs.Ticker.timingMode = createjs.Ticker.RAD_SYNCHER;
    createjs.Ticker.setFPS(30);//フレームレート
    createjs.Ticker.addEventListener('tick',function(){
        stage.update(); //描画の更新
    });



}
