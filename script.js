const todo=[];

outputTodo();
function outputTodo(){
    let todoHTML = '';

    for (let i = 0; i < todo.length; i++) {
        const elementObject = todo[i];
        const name = elementObject.name;
        const dueDate = elementObject.dueDate;
        
        const html = `<p>
            ${name} ${dueDate}
            <button onclick="deleteTodo(${i})";>
                Delete
            </button>
        </p>`;
        todoHTML += html;
    }

    document.querySelector('.todoList').innerHTML = todoHTML;
}

function addTodo(){
    let inputTodoName = document.querySelector('.inputName');
    let inputTodoDate = document.querySelector('.inputDate');

    const name = inputTodoName.value;
    const dueDate = inputTodoDate.value;

    if (name === '' || dueDate === '') {
        alert('Both Task Name and Due Date are required!');
        return;
    }

    todo.push({name: name, dueDate: dueDate}); 

    inputTodoName.value = '';
    inputTodoDate.value = '';  

    outputTodo();
}

function deleteTodo(index) {
    todo.splice(index, 1);
    outputTodo();
}