
let task, date;
let todos = [];
let taskbox = document.getElementById("inputtask");
let datebox = document.getElementById("duedate");


const displayItem = () => {
    let elm = document.getElementById("displayItem");
    let html = ``;

    for (let i = 0; i < todos.length; i++) {
        const elem = todos[i];
        console.log(elem)
        html += `<div class="task">

        <span >${i+1}</span>
     <span >${elem.todo}</span>
     <span>${elem.dueDate}</span>
     <div class="edtbtn">
         <span id='editBtn'  onclick="edittask(${i}) " ><span class="material-symbols-outlined">
         edit_square
         </span></span>
         <span id='deleteBtn' onclick="deleteTodo(${i})"><span class="material-symbols-outlined">
         delete
         </span></span>
    </div>
  </div>`

    }
    elm.innerHTML = html
}

const edittask = (ind) => {
    taskbox.value = todos[ind].todo;
    task = todos[ind].todo;
    datebox.value = todos[ind].dueDate;
    date = todos[ind].dueDate;
    todos.splice(ind, 1);
    // console.log(ind);
    displayItem();
    localStorage.setItem("todos", JSON.stringify(todos));
}


const deleteTodo = (ind) => {
    todos.splice(ind, 1);
    // console.log(ind);
    displayItem();
    localStorage.setItem("todos", JSON.stringify(todos));
}

const addTodo = () => {
    let obj = {
        todo: task,
        dueDate: date
    }

    if ((!obj.task) && (!obj.dueDate)) {
        alert("task and date can't be empty")
        return;
    }
    todos.push(obj)
    // console.log(todos)

    localStorage.setItem("todos", JSON.stringify(todos));
    taskbox.value = "";
    datebox.value = "";



    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);



    task="";
    date="";
    displayItem()

}


function main() {
    const str = localStorage.getItem("todos")
    const res = JSON.parse(str)
    // console.log(res)
    if (res)
        todos.push(...res);     

    displayItem();


    inputtask.addEventListener("change", (e) => {
        task = e.target.value;
        // console.log(task);
    })
    duedate.addEventListener("change", (e) => {
        date = e.target.value;
        // console.log(date) 
    })


}









main();
