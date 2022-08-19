var playBtn = document.getElementById('inicio'),
    playBtn2 = document.getElementById('nosotros'),
    playBtn3 = document.getElementById('trabajos'),
    playBtn4 = document.getElementById('diseño'),
    resetBtn = document.getElementById('contacto'),

//   'nosotros','trabajos','diseño'

  hearbeat = document.getElementById('heartbeat')
	audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);

/**********************/
playBtn2.addEventListener('mouseover', function() {
    [].forEach.call(audios, function(audio) {
      // do whatever
      audio.play();
    });
    }, false);
    
playBtn2.addEventListener('mouseleave', function() {
      heartbeat.pause();
      heartbeat.currentTime = 0;
    }, false);    
    
    
/**********************/
playBtn3.addEventListener('mouseover', function() {
    [].forEach.call(audios, function(audio) {
      // do whatever
      audio.play();
    });
    }, false);
    
playBtn3.addEventListener('mouseleave', function() {
      heartbeat.pause();
      heartbeat.currentTime = 0;
    }, false);

/**********************/
playBtn4.addEventListener('mouseover', function() {
        [].forEach.call(audios, function(audio) {
          // do whatever
          audio.play();
        });
        }, false);
        
playBtn4.addEventListener('mouseleave', function() {
          heartbeat.pause();
          heartbeat.currentTime = 0;
        }, false);

/**************************/
resetBtn.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);

resetBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);