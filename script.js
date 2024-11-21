// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';


// document.querySelector('h1').textContent = 'JavaScript and react are amazing!';

// console.log(document.querySelector('h1').textContent);

// // console.log(document.querySelector('.score').textContent);

// // console.log(document.querySelector('.number').textContent);

// document.querySelector('.score').textContent = 13
// document.querySelector('.number').textContent = 17

// document.querySelector('.guess').value =23;
// console.log(document.querySelector('.guess').value);




const numbers = Math.random();

document.querySelector('.check').addEventListener('click', function(e) {
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess) {
        
        document.querySelector('.message').textContent = 'No number provided!'
        alert('No number provided!');
        return;
        
    }

});