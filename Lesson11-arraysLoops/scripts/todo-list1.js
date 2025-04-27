const TodoList=[];
function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    // console.log(name);
    TodoList.push(name);
    console.log(TodoList);    
    inputElement.value='';

}
