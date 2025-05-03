const todoList=JSON.parse(localStorage.getItem('todoList'))||[
    {name:'make dinner',dueDate:'2025-04-30'},
    {name:'play games',dueDate:'2025-04-31'},
    ];

rendertodoList();
function rendertodoList(){
        let todoListHTML=``;
        //  localStorage.getItem('js-todo-div',JSON.stringify(todoListHTML));
        for(let i=0;i<todoList.length;i++){
            const todoObject=todoList[i];
            // const name=todoObject.name;
            // const dueDate=todoObject.dueDate;
            const {name,dueDate}=todoObject;
            const html=`
                <div>${name}</div>
                <div>${dueDate} </div>
                <button onclick="
                    todoList.splice(${i},1);
                    rendertodoList();  
                    saveTodoStorage();  
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
    todoList.push({
            // name:name,
            // dueDate:dueDate,
            name,               //shorthand property used here if property and variable names are same as in above lines
            dueDate}  
        );
    // console.log(todoList);    
    inputElement.value='';
    dateInputElement.value='';
    rendertodoList();
    saveTodoStorage();

}

function saveTodoStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}
