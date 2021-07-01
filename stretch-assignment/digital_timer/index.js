const tens = document.getElementById('secondTens');
const seconds = document.getElementById('secondOnes');
const tenth = document.getElementById('tenth');
const hundreths = document.getElementById('hundred');
const digits = document.querySelectorAll('.digit');
const colon = document.querySelector('.colon')

const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lapBtn');
const logTimes = document.querySelector('.times');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');

var inter;
var i = 0;
var running = false;

tens.innerText = 0;
seconds.innerText = 0;
tenth.innerText = 0;
hundreths.innerText = 0;

const reseter = () => {
    tens.innerText = 0;
    seconds.innerText = 0;
    tenth.innerText = 0;
    hundreths.innerText = 0;
    logTimes.innerHTML = '';
    i = 0;
};
const timer = () => {
    if (+seconds.innerText === 9 && +tenth.innerText === 9 && +hundreths.innerText === 9) {
        tens.innerText = +tens.innerText === 9 ? 0 : +tens.innerText + 1;
    }
    if (+tenth.innerText === 9 && +hundreths.innerText === 9) {
        seconds.innerText = +seconds.innerText === 9 ? 0 : +seconds.innerText + 1;
    }
    if (+hundreths.innerText === 9) {
        tenth.innerText = +tenth.innerText === 9 ? 0 : +tenth.innerText + 1;
    }
    hundreths.innerText = +hundreths.innerText === 9 ? 0 : +hundreths.innerText + 1;
};
const lapTimes = () => {
    i += 1
    let time = `${tens.innerText}${seconds.innerText}:${tenth.innerText}${hundreths.innerText}`
    let lapTime = document.createElement('p');
    lapTime.classList.add(`lap${i}`, `lap`);
    logTimes.appendChild(lapTime);
    lapTime.innerText = `Lap ${i}: ${time}`;
};
const start = () => {
    startBtn.disabled = true;
    inter = setInterval(timer, 10);
}
const stop = () => {
    startBtn.disabled = false;
    clearInterval(inter)
};

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reseter);
lapBtn.addEventListener('click', lapTimes);
console.log(startBtn.attributes)
//-------------------------------------------//