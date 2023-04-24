let checked = document.getElementById('check');


function crossOut() {
    let userInput = document.getElementById('userInput');
    userInput.style.textDecoration = 'line-through';
    userInput.style.border = 'none';   
}

checked.addEventListener('click', crossOut)
