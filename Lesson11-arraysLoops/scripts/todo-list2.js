const TodoList=[];
renderTodoList();
function renderTodoList(){
        let todoListHTML=``;
        for(let i=0;i<TodoList.length;i++){
            todo=TodoList[i];
            const html=`<p>${todo}</p>`;
            todoListHTML+=html;
        }
        console.log(todoListHTML);
        document.querySelector('.js-todo-div').innerHTML=todoListHTML;
}

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    // console.log(name);
    TodoList.push(name);
    // console.log(TodoList);    
    inputElement.value='';
    renderTodoList();

}
