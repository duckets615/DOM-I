let tens = document.getElementById('secondTens');
let seconds = document.getElementById('secondOnes');
let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds')

tens.innerText = 0
seconds.innerText = 0
msTens.innerText = 0
msHundreds.innerText = 0


function timer() {
    if (+msHundreds.innerText === 9) msTens.innerText = +msTens.innerText + 1;
    msHundreds.innerText = +msHundreds.innerText !== 9 ? +msHundreds.innerText + 1 : 0
}
setInterval(timer, 1000)


