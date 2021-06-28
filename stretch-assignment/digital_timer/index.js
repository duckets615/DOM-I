const tens = document.getElementById('secondTens');
const seconds = document.getElementById('secondOnes');
const tenth = document.getElementById('tenth');
const hundreths = document.getElementById('hundred');
const digits = document.querySelectorAll('.digit');
// button grabbers
const minuteBtn = document.querySelector('.minute');
const secondBtn = document.querySelector('.second');
const tenthsBtn = document.querySelector('.tenths');
const hundredBtn = document.querySelector('.hundreths');
const reset = document.querySelector('.rst')

tens.innerText = 0;
seconds.innerText = 0;
tenth.innerText = 0;
hundreths.innerText = 0;

const reseter = () => {
    tens.innerText = 0;
    seconds.innerText = 0;
    tenth.innerText = 0;
    hundreths.innerText = 0;
}

const addMin = () => tens.innerText = +tens.innerText === 9 ? 9 : +tens.innerText + 1;
const addSec = () => seconds.innerText = +seconds.innerText === 9 ? 9 : +seconds.innerText + 1;
const addTen = () => tenth.innerText = +tenth.innerText === 9 ? 9 : +tenth.innerText + 1;
const addHun = () => hundred.innerText = +hundred.innerText === 9 ? 9 : +hundred.innerText + 1;

minuteBtn.addEventListener('click', addMin);
secondBtn.addEventListener('click', addSec);
tenthsBtn.addEventListener('click', addTen);
hundredBtn.addEventListener('click', addHun)
reset.addEventListener('click', reseter);
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

//     if (+tenths.innerText === 9 && +hundreths.innerText === 9) {
//         seconds.innerText = +seconds.innerText + 1;
//     };

//     if (+hundreths.innerText === 9) {
//         tenths.innerText = +tenths.innerText === 9 ? 0 : +tenths.innerText + 1;
//     };
    
//     hundreths.innerText = +hundreths.innerText === 9 ? 0 : +hundreths.innerText + 1;
// }

// setInterval(timer, 10)


