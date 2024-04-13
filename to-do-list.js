const todoList=[];
renderTodoList();
function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value='';
    //resets the text in the textbox on clicking add button

    renderTodoList();
   
}
function renderTodoList(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
        const todo=todoList[i];
        const html=`<p>${todo}</p>`; //GENERATING HTML through javascript loop
        todoListHTML+=html;
        document.querySelector('.js-todo-list').innerHTML=todoListHTML;

    }

}