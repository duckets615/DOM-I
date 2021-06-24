let tens = document.getElementById('secondTens');
let seconds = document.getElementById('secondOnes');
let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds')

tens.innerText = 0
seconds.innerText = 0
msTens.innerText = 0
msHundreds.innerText = 0


setInterval(() => {
    let addOne = +(seconds.innerText) + 1;    
    if (+seconds.innerText < 11) seconds.innerText = addOne;
}, 1000)


// setInterval(seconds.innerText = +seconds.innerText + 1, 10)
// setInterval(seconds.innerText = +seconds.innerText + 1, 10)