let tens = document.getElementById('secondTens');
let seconds = document.getElementById('secondOnes');
let tenths = document.getElementById('tenths');
let hundreths = document.getElementById('hundreths')
let digits = document.querySelectorAll('.digit')

tens.innerText = 0
seconds.innerText = 0
tenths.innerText = 0
hundreths.innerText = 0


function timer() {
    if(+tens.innerText === 1) {
        hundreths.innerText = 0    
        tenths.innerText = 0    
        seconds.innerText = 0    
        digits.forEach(digit => digit.style.color = 'red');
        return tenths;
    };
    

    if (+seconds.innerText === 9 && +tenths.innerText === 9) {
        tens.innerText = +tens.innerText + 1
    }

    if (+tenths.innerText === 9 && +hundreths.innerText === 9) {
        seconds.innerText = +seconds.innerText + 1
    }

    if (+hundreths.innerText === 9) {
        tenths.innerText = +tenths.innerText === 9 ? 0 : +tenths.innerText + 1
    }

    
    hundreths.innerText = +hundreths.innerText === 9 ? 0 : +hundreths.innerText + 1;


}


setInterval(timer, 10)
