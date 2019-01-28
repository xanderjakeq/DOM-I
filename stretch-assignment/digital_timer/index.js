const startTime = Date.now()
let elapsed;

const btn = document.getElementById('btn')

const sTens = document.getElementById('secondTens')
const sOnes = document.getElementById('secondOnes')
const msHunds = document.getElementById('msHundreds')
const msTens = document.getElementById('msTens')


let done = false

const interval = setInterval(runClock, 10);

function runClock(){
    elapsed = new Date(Date.now() - startTime);
      
    //seconds  
    var secs = elapsed.getSeconds();
    // hundredths
    var ms = Math.floor(elapsed.getMilliseconds()/10);

    sTens.textContent = Math.floor(secs/10)
    sOnes.textContent = secs%10
    msHunds.textContent = Math.floor(ms/10)
    msTens.textContent = ms%10

    if(secs === 10){
        stop()
    }
}


btn.addEventListener('click', stop)

function stop() {
    clearInterval(interval);
    console.log('called')
  }