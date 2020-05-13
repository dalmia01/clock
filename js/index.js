

document.getElementById('add__alarm').addEventListener('click',function(){
  document.querySelector('#clock__content').style.display = 'none';
  document.querySelector('#set__alarm').style.display = 'block';
});

document.querySelector('.set__alarm__back').addEventListener('click',function(){
  document.querySelector('#clock__content').style.display = 'block';
  document.querySelector('#set__alarm').style.display = 'none';
});

document.getElementById('new_city_timezone').addEventListener('click',function(){
  document.querySelector('#clock__content').style.display = 'none';
  document.querySelector('#timezone_cities').style.display = 'block';
});

document.querySelector('.set__clock__back').addEventListener('click',function(){
  document.querySelector('#clock__content').style.display = 'block';
  document.querySelector('#timezone_cities').style.display = 'none';
});

document.querySelector('.set__clock__done').addEventListener('click',function(){
  document.querySelector('#clock__content').style.display = 'block';
  document.querySelector('#timezone_cities').style.display = 'none';

  differentTineZoneFunc();

  //console.log(citesArray);


});

var nav_clock_items = document.getElementsByClassName('nav_clock_items');

for(var i = 0; i < nav_clock_items.length; i++) {
  nav_clock_items[i].addEventListener('click', function(e) {

    for(var i = 0; i < nav_clock_items.length; i++) {
      nav_clock_items[i].style.color = 'rgba(125, 90, 90,0.6)';
    }

    e.currentTarget.style.color = '#d63447';

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



var pin_hrs = document.getElementById('pin_hours');
var pin_mins = document.getElementById('pin_mins');
var pin_secs = document.getElementById('pin_secs');
var pin_num = document.querySelectorAll('.pin_num');

for(j = 0; j< pin_num.length;j++){
  pin_num[j].addEventListener('click',function(){
    for(i=0;i<pin_num.length;i++){
      pin_num[i].className = pin_num[i].className.replace('activetime','');
    }
    this.className = this.className + ' activetime';
  });
}




var numPad =  document.querySelector(".pin-login__numpad");


function  _generatePad() {
        const padLayout = [
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9",
            "a", "0", "backspace"
        ];

        padLayout.forEach(key => {
            const insertBreak = key.search(/[369]/) !== -1;
            const keyEl = document.createElement("div");

            keyEl.classList.add("pin-login__key");
            keyEl.classList.toggle("material-icons", isNaN(key));
            keyEl.textContent = key;
            if(key == 'a')
            keyEl.style.visibility = 'hidden';

            keyEl.addEventListener("click", () => { _handleKeyPress(key) });
            numPad.appendChild(keyEl);

            if (insertBreak) {
                numPad.appendChild(document.createElement("br"));
            }
        });
    }

    var numkey = '';
    var hrkey = '',newvalue = '';

    var timer_play = document.querySelector('.timer_play');
    var timer_play_pause = document.querySelector('.timer_play_pause');
    var timer_pause = document.querySelector('.timer_pause');
    var timer_delete = document.querySelector('.timer_delete');
    var flip_card_inner = document.querySelector('.flip-card-inner');
    var start_timer = document.querySelector('#start_timer');
    var startTimer;


    function _handleKeyPress(key){

      if(document.getElementById('pin_secs').className.includes('activetime') && key!= 'backspace'){

        var getValue = getSecMin(key);

        hrkey = '';

        var value = parseInt(document.getElementById('pin_mins').textContent) + parseInt(getValue.minutes);
        value = value < 10 ? '0'+value : value;

        document.querySelector('.pin_seconds').textContent = getValue.seconds;
        document.querySelector('.pin_minutes').textContent = value;

      }else if(document.getElementById('pin_mins').className.includes('activetime') && key!= 'backspace'){

        var getValue = getSecMin(key);

        hrkey = '';

        var value = parseInt(document.getElementById('pin_hours').textContent) + parseInt(getValue.minutes);
        value = value < 10 ? '0'+value : value;

        document.querySelector('.pin_minutes').textContent = getValue.seconds;
        document.querySelector('.pin_hours').textContent = value;

      }else{



        if(key == 'backspace'){
          newvalue = document.querySelector('.pin_hours').textContent;
          if(newvalue.length>2){
            newvalue = newvalue.substr(0,newvalue.length -1 );
            document.querySelector('.pin_hours').textContent = newvalue;
            hrkey= newvalue;
          }


        }else{
          hrkey += key;

          hrkey = parseInt(hrkey) < 10 ? '0'+parseInt(hrkey) : parseInt(hrkey);

          document.querySelector('.pin_hours').textContent = hrkey;
        }

      }

      if(document.querySelector('.pin_hours').textContent == '00' && document.querySelector('.pin_minutes').textContent == '00' && document.querySelector('.pin_seconds').textContent == '00'){
        timer_play.style.display = 'none';

      }else{

        timer_play.style.display = 'block';

        var timerhours = parseInt(document.querySelector('.pin_hours').textContent);
        var timermins = parseInt(document.querySelector('.pin_minutes').textContent);
        var timersecs = parseInt(document.querySelector('.pin_seconds').textContent);
      }


    }

    function getSecMin(key){
      if(numkey.length > 1)
      numkey = '';

      numkey += key;

      seconds = numkey % 60;
      minutes = parseInt(numkey / 60);

      seconds = seconds < 10 ? '0'+seconds : seconds;
      minutes = minutes < 10 ? '0'+minutes : minutes;

      return {
        seconds : seconds,
        minutes: minutes
      }
    }

    _generatePad();




    timer_play.addEventListener('click', function (event) {

      timer_play.style.display = 'none';
      timer_pause.style.display = 'block';
      timer_delete.style.display = 'block';

      newFunc('play');



      flip_card_inner.style.transform = 'rotateY(180deg)';

    });

    timer_delete.addEventListener('click', function (event) {

      timer_play.style.display = 'none';
      timer_pause.style.display = 'none';
      timer_delete.style.display = 'none';
      document.querySelector('.pin_hours').textContent = '00';
      document.querySelector('.pin_minutes').textContent = '00';
      document.querySelector('.pin_seconds').textContent = '00';

      flip_card_inner.style.transform = 'rotateY(0deg)';

    });

    timer_pause.addEventListener('click', function (event) {

      timer_play_pause.style.display = 'block';
      timer_pause.style.display = 'none';
      clearInterval(startTimer);
      //flip_card_inner.style.transform = 'rotateY(0deg)';

    });

    timer_play_pause.addEventListener('click', function (event) {

      timer_play_pause.style.display = 'none';
      timer_pause.style.display = 'block';

      newFunc('play_pause');
      //clearInterval(startTimer);
      //flip_card_inner.style.transform = 'rotateY(0deg)';

    });


    function newFunc(someval){

      if(someval == 'play'){
        var newtimehours = document.querySelector('.pin_hours').textContent;
        var newtimemins = document.querySelector('.pin_minutes').textContent;
        var newtimesecs = document.querySelector('.pin_seconds').textContent;
      }else{

        var newtimehours = start_timer.dataset.content.split(':')[0];
        var newtimemins = start_timer.dataset.content.split(':')[1];
        var newtimesecs = start_timer.dataset.content.split(':')[2];
      }



      start_timer.dataset.content = `${newtimehours}:${newtimemins}:${newtimesecs}`;

      newtotalseconds = parseInt(newtimehours) * 60 * 60 + parseInt(newtimemins) * 60 + parseInt(newtimesecs);
      console.log(newtotalseconds);

      startTimer = setInterval(()=>{
        newtotalseconds--;

        timerhours =  Math.floor(newtotalseconds / 60 / 60);
        timerminutes = Math.floor(newtotalseconds / 60) - (timerhours * 60);
        timerseconds = newtotalseconds % 60;

        newtimermodhours = timerhours < 10 ? '0'+timerhours : timerhours;
        newtimermodminutes = timerminutes < 10 ? '0'+timerminutes : timerminutes;
        newtimermodseconds = timerseconds < 10 ? '0'+timerseconds : timerseconds;



        start_timer.dataset.content = `${newtimermodhours}:${newtimermodminutes}:${newtimermodseconds}`;

        if(newtotalseconds == 0){
          timer_play.style.display = 'block';
          timer_pause.style.display = 'none';
          timer_delete.style.display = 'block';
        //  start_timer.dataset.content = `${newtimehours}:${newtimemins}:${newtimesecs}`;
          clearInterval(startTimer);
        }

        //console.log(timerhours,timerminutes,timerseconds);
      },1000);
    }




    window.onload = function() {

    const hourHand = document.querySelector('.hourHand');
    const minuteHand = document.querySelector('.minuteHand');
    const secondHand = document.querySelector('.secondHand');
    const time = document.querySelector('.time');
    const clock = document.querySelector('.clock');
    const audio = document.querySelector('.audio');
    const timezonetime_htm =   document.querySelector('.timezone_time');

    timezonetime_htm.innerHTML = '';

    function setDate(){
        const today = new Date();

        const second = today.getSeconds();
        const secondDeg = ((second / 60) * 360) + 360;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;



        const minute = today.getMinutes();
        const minuteDeg = ((minute / 60) * 360);
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        const hour = today.getHours();
        const hourDeg = ((hour / 12 ) * 360 );
        hourHand.style.transform = `rotate(${hourDeg}deg)`;

        newsecond = second < 10 ? '0'+second : second;
        newminiute = minute < 10 ? '0'+minute : minute;
        newhour = hour < 10 ? '0'+hour : hour;

        time.innerHTML = '<span>' + '<strong>' + newhour + '</strong>' + ' : ' + newminiute + ' : ' + '<small>' + newsecond +'</small>'+ '</span>';


        let timezonehours = today.getHours();
        const timezome_ampm = timezonehours > 12 ? 'PM' : 'AM';
        timezonehours = timezonehours > 12 ? (timezonehours - 12) : timezonehours;
        timezonehours = timezonehours < 10 ? '0'+timezonehours : timezonehours;

        let timezonemins= today.getMinutes();
        timezonemins = timezonemins < 10 ? '0'+timezonemins : timezonemins;

        let timezoneday = today.getDay();


        let timezonedate = today.getDate();
        timezonedate = timezonedate < 10 ? '0'+timezonedate : timezonedate;

        let timezonemonth = today.getMonth();

        let values = getDayMonth(timezoneday,timezonemonth);

        timezoneday = values.timezoneday;
        timezonemonth = values.timezonemonth;


        let timezoneyear = today.getFullYear();
        //console.log(timezonehours,timezonemins,timezoneday,timezonedate,timezonemonth,timezome_ampm);


        timezonetime_htm.innerHTML = `<span id='timezone_time'>${timezonehours}:${timezonemins}</span>
        <span id='timezone_ampm'>${timezome_ampm}</span>
        <span id='timezone_day'>${timezoneday}</span>
        <span id='timezone_month'>${timezonemonth}</span>
        <span id='timezone_date'>${timezonedate},</span>
        <span id='timezone_date'>${timezoneyear}</span>`

        //document.getElementById('timezone_time').textContent  =
        differentTineZoneFunc();

        }

    setInterval(setDate, 1000);

}


function getDayMonth(timezoneday,timezonemonth){
  switch (timezoneday) {
    case 1: timezoneday = 'Mon,';break;
    case 2: timezoneday = 'Tue,';break;
    case 3: timezoneday = 'Wed,';break;
    case 4: timezoneday = 'Thu,';break;
    case 5: timezoneday = 'Fri,';break;
    case 6: timezoneday = 'Sat,';break;
    case 7: timezoneday = 'Sun,';break;
    default:break;
  }
  switch (timezonemonth) {
    case 0: timezonemonth = 'Jan';break;
    case 1: timezonemonth = 'Feb';break;
    case 2: timezonemonth = 'Mar';break;
    case 3: timezonemonth = 'Apr';break;
    case 4: timezonemonth = 'May';break;
    case 5: timezonemonth = 'Jun';break;
    case 6: timezonemonth = 'Jul';break;
    case 7: timezonemonth = 'Aug';break;
    case 8: timezonemonth = 'Sep';break;
    case 9: timezonemonth = 'Oct';break;
    case 10: timezonemonth = 'Nov';break;
    case 11: timezonemonth = 'Dec';break;
    default:break;
  }

  return{
    timezonemonth:timezonemonth,
    timezoneday : timezoneday
  }
}


function differentTineZoneFunc(){
  let city = document.querySelectorAll('.city');
  let citesArray = [];

  let different_timezones = document.querySelector('.different_timezones');

  different_timezones.innerHTML = '';

  for(i = 0 ; i < city.length ; i++){
    if(city[i].checked){
      citesArray.push(city[i].value);

      let val = city[i].value.split('/')[1];
      let cityname = '';
      if(city[i].value.split('/')[1].includes('_')){
        cityname = city[i].value.split('/')[1].replace('_',' ');
      }else{
        cityname = city[i].value.split('/')[1];
      }

      //console.log(val,cityname);

      let localcitytime =  new Date().toLocaleString("en-US", {timeZone: city[i].value});

      let todays = new Date(localcitytime);



      let day = todays.getDay();
      let month = todays.getMonth();
      let date = todays.getDate();
      date = date < 10 ? '0'+date : date;
      let mins = todays.getMinutes();
      mins = mins < 10 ? '0'+mins : mins;
      let hrs = todays.getHours();
      let ampm = hrs > 12 ? 'PM' : 'AM';
      hrs = hrs > 12 ? (hrs - 12) : hrs;
      hrs = hrs < 10 ? '0'+hrs : hrs;

      let values = getDayMonth(day,month);

      day = values.timezoneday;
      month = values.timezonemonth;

      //console.log(day,date,mins,hrs)


      localcitytime = localcitytime.replace(',','').split(' ');

      if(cityname == 'Kolkata')
      cityname = 'New Delhi'

      //console.log(localcitytime);

      different_timezones.innerHTML += `<div class='specific_timezone' id=${val}>
        <div class='spec_zone_data'>
          <span>${cityname}</span>
          <span>${day} ${month} ${date} </span>
        </div>
        <div class='spec_zone_time'><b>${hrs} : ${mins}</b><span> ${ampm}</span></div>
      </div>`;



    }
  }
}
