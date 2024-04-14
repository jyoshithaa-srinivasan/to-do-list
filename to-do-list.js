const todoList=[

    {name:'make dinner',
     dueDate:'2022-12-22'
},
{
    name:'wash dishes',
    dueDate:'2022-11-04'
}
];
renderTodoList();

function adTodo(){
    const inputNameElement=document.querySelector('.js-name-input');//class selector is parameter
    const inputDateElement=document.querySelector('.js-date-input');
    
    const name=inputNameElement.value;
    const dueDate=inputDateElement.value;
    const inputObject={
        name:name,
        dueDate:dueDate
        //shorthand property
        //name,
        //dueDate
    
    }
    todoList.push(inputObject);
    console.log(todoList);
    inputNameElement.value='';
    inputDateElement.value='';
    //resets the text in the textbox on clicking add button

    renderTodoList();
   
}
function renderTodoList(){ //displaying
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        const name=todoObject.name;
        //SHORTCUT
        // const {name}=todoObject;
        //const {name,dueDate}=todo
        const dueDate=todoObject.dueDate;
        //template strings as multiline strings
        const html=`                 
        <div> ${name}</div>    
        <div>
            ${dueDate}
        </div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();         
        " class="delete-todo-button">DELETE</button>
        `; //GENERATING HTML through javascript loop
        //first div ll work as 1st column
        //second div ll work as 2nd column
        //button ll work as 3rd column in CSS GRID
        todoListHTML+=html;
        

    }
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}