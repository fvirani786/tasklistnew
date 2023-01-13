//setting button wiring: saves the users input
//resent button wiring: resets the users input
var taskID = 0;

function saveSetting() {
    let userName = document.getElementById("userName").value
    let colorScheme = document.getElementById("color").value
    let heading = document.getElementById("heading")

    heading.innerHTML = userName + " Task List"

    selectColor = document.querySelector('#color');
    colorOutput = selectColor.value;
    //document.querySelector('.output').textContent = output;
    heading.style.backgroundColor = colorOutput
}

function resetSetting() {
    document.getElementById('settingsForm').reset();

    heading.innerHTML = "Task List"
    heading.style.backgroundColor = "white"

}

let taskListArray = []

function addTask() {
    let taskName = document.getElementById("taskDescription").value
    let date = document.getElementById('date').value


    taskID++;
    const taskObject = {
        taskTitle: taskName,
        taskDate: date,
        taskStatus: "New",
        taskId: taskID
    }

    taskListArray.push(taskObject)

    document.getElementById('addTaskForm').reset();

    renderTaskList();

    const newTask = document.createElement("li");
    newTask.innerHTML = "Add Task";

    // add the new list item to the task list
    //s taskList.appendChild(addTask);
}

function enterTask(taskTitle, taskDate, taskStatus, taskId) {
    const display =
        `<div class="card" style="width: 30rem;">
                    <ul class="list-group">
                        <li class="list-group-item">
                          <input class="form-check-input me-1" type="checkbox" value="checkbox" id="checkbox ${taskId}">
                          <label class="form-check-label" for="firstCheckbox"></label>
                        </li>
                      </ul>
                    <div class="card-body" id="${taskId}">
                      <h5 class="card-title">${taskTitle}</h5>
                      <p class="card-text">${taskDate}</p>
                      <button class="btn btn-danger" id="deleteButton ${taskId}">Delete</button>
                    </div>
                  </div>`;

    return display;

}


function renderTaskList() {
    let taskList = document.getElementById('myTaskList');
    taskList.innerHTML = "";
    for (taskIndex = 0; taskIndex < taskListArray.length; taskIndex++) {
        taskList.innerHTML = taskList.innerHTML +
            enterTask(taskListArray[taskIndex].taskTitle,
                taskListArray[taskIndex].taskDate,
                taskListArray[taskIndex].taskStatus,
                taskListArray[taskIndex].taskId)

    }
}
var taskList = document.getElementById("myTaskList");
taskList.addEventListener('click', (event) => { // "event" here is the event parameter
    const clickedEvent = event.target;
    //console.log("delete")
    //console.log(clickedEvent.innerHTML);
    //console.log(clickedEvent);
    const parentNode = clickedEvent.parentNode;
    let taskIdlocal = +parentNode.id;
    //console.log("my task title is " + taskTitle)
    //const taskTitle = parseInt(parentNode.id);
    if (clickedEvent.innerHTML === "Delete") {
        // we are going to use splice to remove elements
        if (taskListArray.length !== 0) {
            //const indexToDelete = studentID - 1;
            // find the student id
            let indexToDelete = 0;
            for (taskIndex = 0; taskIndex < taskListArray.length; taskIndex++) {
                if (taskListArray[taskIndex].taskId === taskIdlocal) {
                    indexToDelete = taskIndex;
                    break;
                }
            }
            console.log("indexToDelete is" + indexToDelete)
            taskListArray.splice(indexToDelete, 1)

            renderTaskList()
        }

    } else if (clickedEvent.value === 'checkbox') {
        console.log("I clicked " + clickedEvent.id)
        //console.log("Delete Button #" + clickedEvent.id === "deleteButton")
        let myCheckbox = clickedEvent.id
        //console.log(myCheckbox)
        myArray = myCheckbox.split(" ")
        numericArray = +myArray[1]
        console.log(typeof numericArray)
        //console.log(myArray[1])
        //console.log(typeof (myArray[1]))
        let checkBox = document.getElementById(myCheckbox)
        let deleteBtn = document.getElementById("deleteButton" + ' ' + numericArray)
        console.log(numericArray)

        console.log(typeof Delete)

        checkBox.disabled = true
        deleteBtn.remove()

        /*
            TO DISABLE BUTTON COMPLETELY FROM CHECKED TASK:
            deleteBtn.disabled = true
        */

        //alert('checkbox is selected');
        // taskListArray.splice(indexToDelete,0)
        //     renderTaskList()
    } else {
        // alert('button is not supported')
    }
    // console.log(firstCheckbox);
    // let checkBox = document.getElementById("firstCheckbox")
    // checkBox.addEventListener('click', (event)) =>

})