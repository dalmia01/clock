

document.getElementById('add__alarm').addEventListener('click',function(){
  document.querySelector('#clock__content').style.display = 'none';
  document.querySelector('#set__alarm').style.display = 'block';
});

document.querySelector('.set__alarm__back').addEventListener('click',function(){
  document.querySelector('#clock__content').style.display = 'block';
  document.querySelector('#set__alarm').style.display = 'none';
});

var nav_clock_items = document.getElementsByClassName('nav_clock_items');

for(var i = 0; i < nav_clock_items.length; i++) {
  nav_clock_items[i].addEventListener('click', function(e) {

    for(var i = 0; i < nav_clock_items.length; i++) {
      nav_clock_items[i].style.color = '#7d5a5a';
    }

    e.currentTarget.style.color = '#63b7af';

    if(e.currentTarget.className.includes('stopwatch')){
      document.getElementById('stopwatch').style.display = 'block';
      document.getElementById('alarm').style.display = 'none';
      document.getElementById('clock').style.display = 'none';
      document.getElementById('timer').style.display = 'none';
    }else if(e.currentTarget.className.includes('alarm')){
      document.getElementById('alarm').style.display = 'block';
      document.getElementById('stopwatch').style.display = 'none';
      document.getElementById('clock').style.display = 'none';
      document.getElementById('timer').style.display = 'none';
    }else if(e.currentTarget.className.includes('worldclock')){
      document.getElementById('clock').style.display = 'block';
      document.getElementById('stopwatch').style.display = 'none';
      document.getElementById('alarm').style.display = 'none';
      document.getElementById('timer').style.display = 'none';
    }else if(e.currentTarget.className.includes('timer')){
      document.getElementById('timer').style.display = 'block';
      document.getElementById('stopwatch').style.display = 'none';
      document.getElementById('clock').style.display = 'none';
      document.getElementById('alarm').style.display = 'none';
    }

  }, false);
}





document.querySelector('.set__alarm__done').addEventListener('click',function(){


  let time = document.getElementById('hours').value.split(' ');
  let mins = document.getElementById('minutes').value;

  var repeatValue = '';
  var inputElements = document.getElementsByClassName('repeat');
  for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
             repeatValue +=  inputElements[i].value + ', ';
        }
  }

  repeatValue = repeatValue.substr(0,repeatValue.length-2);


  document.getElementById("alarm").insertAdjacentHTML("afterBegin",
          `<div class="all__alarms">

            <div>
              <span style="padding: 1%;font-size: 1.2em;">${time[0]}</span>
              <span>:</span>
              <span style="padding: 1%;font-size: 1.2em;">${mins}</span><span>
              <small>${time[1]}</small></span>
              <div style="padding:2% 1%">${repeatValue}</div>
            </div>

            <div style='text-align:center'>
              <label class="switch">
              <input type="checkbox" checked>
              <span class="slider round"></span>
              </label>

              <i class="fa fa-trash-o delete__alarm" style="vertical-align:middle;padding-left:10%"></i>
            </div>




          </div>
`);

    var btn = document.getElementsByClassName('delete__alarm');

    for(var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function(e) {
        e.currentTarget.parentNode.parentNode.remove();
      }, false);
    }



  document.querySelector('#clock__content').style.display = 'block';
  document.querySelector('#set__alarm').style.display = 'none';
});


var stop_watch = document.querySelector('.stop_watch');
var stop_watch_play = document.querySelector('.stop_watch_play');
var stop_watch_pause = document.querySelector('.stop_watch_pause');
var stop_watch_reset = document.querySelector('.stop_watch_reset');
var stop_watch_flag = document.querySelector('.stop_watch_flag');

var stopwatchInterval;
var milliseconds = 0 ,milliseconds = 0, seconds = 0 , minutes = 0 , hours = 0;
var modhours = 0, modminutes = 0, modseconds = 0;
var flagstopwatchInterval;
var flagmilliseconds = 0 ,flagmilliseconds = 0, flagseconds = 0 , flagminutes = 0 , flaghours = 0;
var flagmodhours = 0, flagmodminutes = 0, flagmodseconds = 0;
stop_watch_play.addEventListener('click', function (event) {

  document.getElementById('start_stopwatch_play').style.display = 'none';
  document.getElementById('start_stopwatch_flag').style.display = 'block';
  document.getElementById('start_stopwatch_pause').style.display = 'block';
  document.getElementById('start_stopwatch_reset').style.display = 'none';

  stopwatchInterval = setInterval(()=>{
    milliseconds++;

    hours =  Math.floor(milliseconds / 60 / 60);
    minutes = Math.floor(milliseconds / 60) - (hours * 60);
    seconds = milliseconds % 60;
    modhours = hours < 10 ? '0'+hours : hours;
    modminutes = minutes < 10 ? '0'+minutes : minutes;
    modseconds = seconds < 10 ? '0'+seconds : seconds;
    //console.log(modhours,modminutes,modseconds,totalSecs);
    stop_watch.dataset.content = `${modhours}:${modminutes}:${modseconds}`
  },1000);

  if(document.getElementById(`single_flag_time${flagcount}`)){
    flagstopwatchInterval = setInterval(()=>{
      flagmilliseconds++;

      flaghours =  Math.floor(flagmilliseconds / 60 / 60);
      flagminutes = Math.floor(flagmilliseconds / 60) - (flaghours * 60);
      flagseconds = flagmilliseconds % 60;
      flagmodhours = flaghours < 10 ? '0'+flaghours : flaghours;
      flagmodminutes = flagminutes < 10 ? '0'+flagminutes : flagminutes;
      flagmodseconds = flagseconds < 10 ? '0'+flagseconds : flagseconds;
      //console.log(modhours,modminutes,modseconds,totalSecs);
      //console.log(flagcount)
      document.getElementById(`single_flag_time${flagcount}`).textContent = `${flagmodhours}:${flagmodminutes}:${flagmodseconds}`
      document.getElementById(`whole_stop_time${flagcount}`).textContent = `${modhours}:${modminutes}:${modseconds}`
    },1000);
  }




  stop_watch.dataset.content = '';
});

stop_watch_pause.addEventListener('click', function (event) {

  document.getElementById('start_stopwatch_play').style.display = 'block';
  document.getElementById('start_stopwatch_pause').style.display = 'none';
  document.getElementById('start_stopwatch_reset').style.display = 'block';
  document.getElementById('start_stopwatch_flag').style.display = 'none';
  clearInterval(stopwatchInterval);
  clearInterval(flagstopwatchInterval);

});

var flagcount = 0;

stop_watch_flag.addEventListener('click', function (event) {

  flagcount++;

  flagmilliseconds = 0 ,flagmilliseconds = 0, flagseconds = 0 , flagminutes = 0 , flaghours = 0;

  modflagcount = flagcount < 10 ? '0'+flagcount : flagcount;

  clearInterval(flagstopwatchInterval);

  document.getElementById("stop__flags").insertAdjacentHTML("afterBegin",
          `<div class="single__flag">
            <span>${modflagcount}</span>
            <span id=\single_flag_time${flagcount}\>00:00:00</span>
            <span id=\whole_stop_time${flagcount}\>${modhours}:${modminutes}:${modseconds}</span>
          </div>`);


  if(flagcount != 1){
    flagstopwatchInterval = setInterval(()=>{
      flagmilliseconds++;

      flaghours =  Math.floor(flagmilliseconds / 60 / 60);
      flagminutes = Math.floor(flagmilliseconds / 60) - (flaghours * 60);
      flagseconds = flagmilliseconds % 60;
      flagmodhours = flaghours < 10 ? '0'+flaghours : flaghours;
      flagmodminutes = flagminutes < 10 ? '0'+flagminutes : flagminutes;
      flagmodseconds = flagseconds < 10 ? '0'+flagseconds : flagseconds;
      //console.log(modhours,modminutes,modseconds,totalSecs);
      //console.log(flagcount)
      document.getElementById(`single_flag_time${flagcount}`).textContent = `${flagmodhours}:${flagmodminutes}:${flagmodseconds}`
      document.getElementById(`whole_stop_time${flagcount}`).textContent = `${modhours}:${modminutes}:${modseconds}`
    },1000);
  }else{
    document.getElementById(`single_flag_time${flagcount}`).textContent = `${modhours}:${modminutes}:${modseconds}`
    flagcount++;

    modflagcount = flagcount < 10 ? '0'+flagcount : flagcount;

    document.getElementById("stop__flags").insertAdjacentHTML("afterBegin",
            `<div class="single__flag">
              <span>${modflagcount}</span>
              <span id=\single_flag_time${flagcount}\>00:00:00</span>
              <span id=\whole_stop_time${flagcount}\>${modhours}:${modminutes}:${modseconds}</span>
            </div>`);
            flagstopwatchInterval = setInterval(()=>{
              flagmilliseconds++;

              flaghours =  Math.floor(flagmilliseconds / 60 / 60);
              flagminutes = Math.floor(flagmilliseconds / 60) - (flaghours * 60);
              flagseconds = flagmilliseconds % 60;
              flagmodhours = flaghours < 10 ? '0'+flaghours : flaghours;
              flagmodminutes = flagminutes < 10 ? '0'+flagminutes : flagminutes;
              flagmodseconds = flagseconds < 10 ? '0'+flagseconds : flagseconds;
              //console.log(modhours,modminutes,modseconds,totalSecs);
              //console.log(flagcount)
              document.getElementById(`single_flag_time${flagcount}`).textContent = `${flagmodhours}:${flagmodminutes}:${flagmodseconds}`
              document.getElementById(`whole_stop_time${flagcount}`).textContent = `${modhours}:${modminutes}:${modseconds}`
            },1000);

  }





});


stop_watch_reset.addEventListener('click', function (event) {

  milliseconds = 0 ,milliseconds = 0, seconds = 0 , minutes = 0 , hours = 0,flagcount = 0;
  flagmilliseconds = 0 ,flagmilliseconds = 0, flagseconds = 0 , flagminutes = 0 , flaghours = 0,flagcount = 0;

  document.getElementById('start_stopwatch_play').style.display = 'block';
  document.getElementById('start_stopwatch_pause').style.display = 'none';
  document.getElementById('start_stopwatch_reset').style.display = 'none';
  //clearInterval(stopwatchInterval);

  document.getElementById('stop__flags').innerHTML = '';
  stop_watch.dataset.content = `00:00:00`

});
