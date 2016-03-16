
function init(){
   var queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);

    queue.addEventListener("complete",handler);

var manifest = [
  {id:"sound01",src:"./sound/MY OWN WORST ENEMY.mp3"},
  {id:"sound02",src:"./sound/Shake a Body.mp3"},
  {id:"sound03",src:"./sound/Russian Roulette.mp3"},
  {id:"sound04",src:"./sound/DIG WORK.mp3"},
  {id:"sound05",src:"./sound/Replay Road Race.mp3"},
  {id:"sound06",src:"./sound/狂喜乱舞.mp3"},
  {id:"sound07",src:"./sound/2007.mp3"},
  {id:"sound08",src:"./sound/FREE PAPER.mp3"},
  {id:"sound09",src:"./sound/ピーターパンシンドローム.mp3"}
];

queue.loadManifest(manifest);


console.log('読み込みおk');


function handler(event){
  queue.removeEventListener("complete")


   var sound01 = createjs.Sound.createInstance("sound01");
   sound01.setVolume(0.8);
   var sound02 = createjs.Sound.createInstance("sound02");
   sound02.setVolume(0.8);
   var sound03 = createjs.Sound.createInstance("sound03");
   sound03.setVolume(0.8);
   var sound04 = createjs.Sound.createInstance("sound04");
   sound04.setVolume(0.8);
   var sound05 = createjs.Sound.createInstance("sound05");
   sound05.setVolume(0.8);
   var sound06 = createjs.Sound.createInstance("sound06");
   sound06.setVolume(0.8);
   var sound07 = createjs.Sound.createInstance("sound07");
   sound07.setVolume(0.8);
   var sound08 = createjs.Sound.createInstance("sound08");
   sound08.setVolume(0.8);
   var sound09 = createjs.Sound.createInstance("sound09");
   sound09.setVolume(0.8);


   function doStop(){
    sound01.stop();
   }
   function doPlay(){
    sound01.play([interrupt="none"]);
   }
   document.getElementById('stop01').addEventListener('click',doStop);
   document.getElementById('play01').addEventListener('click',doPlay);

   function doStop2(){
    sound02.stop();
   }
   function doPlay2(){
    sound02.play([interrupt="none"]);
   }
   document.getElementById('stop02').addEventListener('click',doStop2);
   document.getElementById('play02').addEventListener('click',doPlay2);

   function doStop3(){
    sound03.stop();
   }
   function doPlay3(){
    sound03.play([interrupt="none"]);
   }
   document.getElementById('stop03').addEventListener('click',doStop3);
   document.getElementById('play03').addEventListener('click',doPlay3);

   function doStop4(){
    sound04.stop();
   }
   function doPlay4(){
    sound04.play(interrupt="none");
   }
   document.getElementById('stop04').addEventListener('click',doStop4);
   document.getElementById('play04').addEventListener('click',doPlay4);

   function doStop5(){
    sound05.stop();
   }
   function doPlay5(){
    sound05.play(interrupt="none");
   }
   document.getElementById('stop05').addEventListener('click',doStop5);
   document.getElementById('play05').addEventListener('click',doPlay5);

   function doStop6(){
    sound06.stop();
   }
   function doPlay6(){
    sound06.play(interrupt="none");
   }
   document.getElementById('stop06').addEventListener('click',doStop6);
   document.getElementById('play06').addEventListener('click',doPlay6);

   function doStop7(){
    sound07.stop();
   }
   function doPlay7(){
    sound07.play(interrupt="none");
   }
   document.getElementById('stop07').addEventListener('click',doStop7);
   document.getElementById('play07').addEventListener('click',doPlay7);

   function doStop8(){
    sound08.stop();
   }
   function doPlay8(){
    sound08.play(interrupt="none");
   }
   document.getElementById('stop08').addEventListener('click',doStop8);
   document.getElementById('play08').addEventListener('click',doPlay8);

   function doStop9(){
    sound09.stop();
   }
   function doPlay9(){
    sound09.play(interrupt="none");
   }
   document.getElementById('stop09').addEventListener('click',doStop9);
   document.getElementById('play09').addEventListener('click',doPlay9);

   }

 }
 window.onload = function(){
  init();
 }
