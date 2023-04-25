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

checked.addEventListener('click', crossOut)
checked2.addEventListener('click', crossOut2)
checked3.addEventListener('click', crossOut3)

