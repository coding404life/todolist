// Elements
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const elements = Array.from(list);

// let arr = [];
// window.onload = () => {
//     if (JSON.parse(localStorage.getItem('todos')) !== null) {
//         arr = JSON.parse(localStorage.getItem('todos'));
//         displayTodo();
//     }
// }

// display the todos once page load
// const displayTodo = () => {
//     // 1. output the current value from array and insert it before the list
//     list.innerHTML = '';
//     for (let i = 0; i < arr.length; i++) {
//         const markup = `
//         <li class="list-group-item d-flex justify-content-between align-items-center" id="item-${i}">
//             <span>${arr[i]}</span>
//             <i class="far fa-trash-alt delete"></i>
//         </li>`;
//         list.insertAdjacentHTML('beforeend', markup)
//     }

// }

// generate todo markup
const generateTemplate = todo => {
    // 1. push the todo into the array
    // arr.push(todo);
    // 2. set the todo string into the localStorage and transform it to JSON format
    // localStorage.setItem(`todos`, JSON.stringify(arr));
    // 3. get the todos from localStorage
    // JSON.parse(localStorage.getItem('todos'));
    // 4. display the items into the todo list
    const markup = `
    <li class="list-group-item d-flex justify-content-between align-items-center id='item-1'">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.insertAdjacentHTML('beforeend', markup);
    // displayTodo();
}

// add submit event to the form
addForm.addEventListener('submit', e => {
    e.preventDefault();
    // get the value of the input field 
    const todo = addForm.add.value.trim();

    // if there is a value generate todo
    if (todo.length) {
        generateTemplate(todo);
        // clear feilds
        addForm.reset()
    }
});

// delete todo 
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        // 1. remove the todo from the todolist
        e.target.parentElement.remove();
        // 2. get the id attribute of the selected element
        // const idAtrr = e.target.parentElement.getAttribute('id');
        // const idNumber = parseInt(idAtrr.slice(5, 8));
        // 3. remove the item from the array
        // arr.splice(idNumber, 1)
        // 4. refresh the array with the new items
        // localStorage.setItem(`todos`, JSON.stringify(arr));
        // 5. update the localstorage 
        // displayTodo()
    }
});

// filter the search results
const filterTodos = searchResult => {
    // hide todos if they not includes search text
    Array.from(list.children)
        .filter(curr => !curr.textContent.toLowerCase().includes(searchResult))
        .forEach(curr => curr.classList.add('filtered'));
    //show todos if they include search text
    Array.from(list.children)
        .filter(curr => curr.textContent.toLowerCase().includes(searchResult))
        .forEach(curr => curr.classList.remove('filtered'));
}

// search todos
search.addEventListener('keyup', () => {
    // get the search value 
    const searchResult = search.value.trim().toLowerCase();
    filterTodos(searchResult);
});