const tens = document.getElementById('secondTens');
const seconds = document.getElementById('secondOnes');
const tenth = document.getElementById('tenth');
const hundreths = document.getElementById('hundred');
const digits = document.querySelectorAll('.digit');

const resetBtn = document.querySelector('.reset')
const lapBtn = document.querySelector('.lapBtn')
const logTimes = document.querySelector('.times')
const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')

var inter
var i = 0;

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
}

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
}
const lapTimes = () => {
    i += 1
    let time = `${tens.innerText}${seconds.innerText}:${tenth.innerText}${hundreths.innerText}`
    let lapTime = document.createElement('p');
    lapTime.classList.add(`lap${i}`, `lap`);
    logTimes.appendChild(lapTime);
    lapTime.innerText = `Lap ${i}: ${time}`;
}

const start = () => inter = setInterval(timer, 10);
const stop = () => clearInterval(inter)

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reseter);
lapBtn.addEventListener('click', lapTimes)
//-------------------------------------------



///--------------------------------------------
// function timer() {
//     if(+tens.innerText === 1) {
//         hundreths.innerText = 0;    
//         tenths.innerText = 0;    
//         seconds.innerText = 0;    
//         digits.forEach(digit => digit.style.color = 'red');
//         return tenths;
//     };
      
//     if(+seconds.innerText === 1) digits.forEach(digit => digit.style.color = 'rgb(5, 70, 5)');
//     if(+seconds.innerText === 2) digits.forEach(digit => digit.style.color = 'rgb(15, 121, 15)');
//     if(+seconds.innerText === 3) digits.forEach(digit => digit.style.color = 'rgb(39, 138, 39)');
//     if(+seconds.innerText === 4) digits.forEach(digit => digit.style.color = 'rgb(69,165,69)');
//     if(+seconds.innerText === 5) digits.forEach(digit => digit.style.color = 'rgb(152,211,152)');
//     if(+seconds.innerText === 6) digits.forEach(digit => digit.style.color = 'rgb(184,197,124)');
//     if(+seconds.innerText === 7) digits.forEach(digit => digit.style.color = 'rgb(184, 146, 41)');
//     if(+seconds.innerText === 8) digits.forEach(digit => digit.style.color = 'rgb(218, 128, 26)');
//     if(+seconds.innerText === 9) digits.forEach(digit => digit.style.color = 'rgb(243, 94, 8)');
    
//     if (+seconds.innerText === 9 && +tenths.innerText === 9) {
//         tens.innerText = +tens.innerText + 1;
//     };
//
//     if (+tenths.innerText === 9 && +hundreths.innerText === 9) {
//         seconds.innerText = +seconds.innerText + 1;
//     };
//
//     if (+hundreths.innerText === 9) {
//         tenths.innerText = +tenths.innerText === 9 ? 0 : +tenths.innerText + 1;
//     };
//    
//     hundreths.innerText = +hundreths.innerText === 9 ? 0 : +hundreths.innerText + 1;
// }

// setInterval(timer, 10)


