const TodoList=[
    {name:'make dinner',dueDate:'2025-04-30'},
    {name:'play games',dueDate:'2025-04-31'},
    ];

renderTodoList();
function renderTodoList(){
        let todoListHTML=``;
        for(let i=0;i<TodoList.length;i++){
            const todoObject=TodoList[i];
            // const name=todoObject.name;
            // const dueDate=todoObject.dueDate;
            const {name,dueDate}=todoObject;
            const html=`
                <div>${name}</div>
                <div>${dueDate} </div>
                <button onclick="
                    TodoList.splice(${i},1);
                    renderTodoList();    
                " class="delete-todo-btn">Delete</button> 
                `;
            todoListHTML+=html;
        }
        // console.log(todoListHTML);
        document.querySelector('.js-todo-div').innerHTML=todoListHTML;
}

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const dateInputElement=document.querySelector('.js-due-date-input');
    const name=inputElement.value;
    const dueDate=dateInputElement.value;
    // console.log(name);
    TodoList.push({
            // name:name,
            // dueDate:dueDate,
            name,               //shorthand property used here if property and variable names are same as in above lines
            dueDate}  
        );
    // console.log(TodoList);    
    inputElement.value='';
    dateInputElement.value='';
    renderTodoList();

}
