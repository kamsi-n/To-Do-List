const inputTask = document.getElementById('inputTask');
const inputBtn = document.getElementById('inputBtn');
let error = document.getElementById('msg');
let posts = document.getElementById('tasks');
const emptyTask = document.getElementById('complete');

inputBtn.addEventListener('click', ()=> {
    if (inputTask.value === '') {
        error.innerHTML = 'Please enter a task';
    } else {
        error.innerHTML = '';
        acceptData();
        taskRef.push(tasks);
    }
});

let data = {};
let acceptData = () => {
    data['text'] = inputTask.value;
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span>
            <i onClick="editPost(this)" class="fa-regular fa-pen-to-square"></i>
            <i onclick="complete(this)" class="fa-regular fa-circle-check"></i>
            <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
        </span>
    </div>
    `;
    inputTask.value = '';
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    inputTask.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

let complete = (e) => {
    e.parentElement.previousElementSibling.style.textDecoration = 'line-through'
};