const todo=[{
    name: 'assignments' ,
    dueDate: '2025-12-22'}];

outputTodo();
function outputTodo(){
    let todoHTML = '';
    for (let i = 0; i < todo.length; i++) {
        const elementObject = todo[i];
        const name = elementObject.name;
        const dueDate = elementObject.dueDate;
        const html = `<p>
            ${name} ${dueDate}
            <button onclick="todo.splice(${i},1);
            outputTodo();">
                Delete
            </button>
        </p>`;
        todoHTML += html;
    }
    console.log(todoHTML);

    document.querySelector('.todoList').innerHTML = todoHTML;
}

function addTodo(){
    let inputTodoName = document.querySelector('.inputName');
    let inputTodoDate = document.querySelector('.inputDate');

    const name = inputTodoName.value;
    const dueDate = inputTodoDate.value;

    todo.push({name: name, dueDate: dueDate});  
    console.log(todo);
    inputTodoName.value = '';
    inputTodoDate.value = '';  

    outputTodo();
}