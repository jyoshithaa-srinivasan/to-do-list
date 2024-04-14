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
        <p>
            ${name} ${dueDate}
            <button onclick="
                todoList.splice(${i},1);
                renderTodoList();         
            ">DELETE</button>
        </p>`; //GENERATING HTML through javascript loop
        todoListHTML+=html;
        

    }
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}