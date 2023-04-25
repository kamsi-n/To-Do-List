//the user iput cross-through
let checked = document.getElementById('check');
let checked2 = document.getElementById('check2');
let checked3 = document.getElementById('check3');

function crossOut() {
    let userInput = document.getElementById('userInput');
    userInput.style.textDecoration = 'line-through';
    userInput.style.border = 'none';   
}

function crossOut2() { 
    let userInput2 = document.getElementById('userInput2');
    userInput2.style.textDecoration = 'line-through';
    userInput2.style.border = 'none';
}

function crossOut3() {
    let userInput3 = document.getElementById('userInput3');
    userInput3.style.textDecoration = 'line-through';
    userInput3.style.border = 'none';  
}

checked.addEventListener('click', crossOut);
checked2.addEventListener('click', crossOut2);
checked3.addEventListener('click', crossOut3);

//Program the 1st clear button
let btn1 = document.getElementById('btn1');

function clear() {
    userInput.value = '';
}

function restoreBorder() {
    userInput.style.border = '1px solid';
    checked.checked = false;
}

btn1.addEventListener('click' , clear);
btn1.addEventListener('click' , restoreBorder);

//Program the 2nd clear button
let btn2 = document.getElementById('btn2');

function clear2() {
    userInput2.value = '';
}

function restoreBorder2() {
    userInput2.style.border = '1px solid';
    checked2.checked = false;
}

btn2.addEventListener('click' , clear2);
btn2.addEventListener('click' , restoreBorder2);

//Program the 3rd clear button
let btn3 = document.getElementById('btn3');

function clear3() {
    userInput3.value = '';
}

function restoreBorder3() {
    userInput3.style.border = '1px solid';
    checked3.checked = false;
}

btn3.addEventListener('click' , clear3);
btn3.addEventListener('click' , restoreBorder3);
