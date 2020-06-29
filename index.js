const todoInput = document.getElementById('todo-input');
const dateInput = document.getElementById('date-input');
const todoButton = document.getElementById('add-button');
const list = document.getElementById('list');

/*
Task 0:
Retrieve the todo list array from localStorage
and parse it to the listArr variable if its not null
if it's null set the listArr variable to an empty array
*/
let listArr = [];

todoButton.addEventListener('click', (e) => {
    let todo = {
        text: todoInput.value,
        date: dateInput.value
    }
    listArr.push(todo);

    /*
   Task 1:
   Save listArr in localStorage in the form of string
   */

    list.innerHTML = '';
    renderList(listArr);
    e.preventDefault();
})

const renderList = (arr) => {
    arr.map(item => {
        list.insertAdjacentHTML("beforeend", `
        <li>
            <div>${item.text}</div>
            <div>${item.date}</div>
        </li>
        `)
    })
}

/*
Task 2:
render the listArr when the Dom Content is loaded
*/
