// Initialize taskObject to store task data
let taskObject = {}

// Initialize AnothertaskNumber
let AnothertaskNumber = 0

// Page initialization when the DOM is loaded
window.addEventListener("DOMContentLoaded", function(){
    // Retrieve data from local storage
    const storedData = localStorage.getItem("tasksInfo");
    if(storedData){
        // Parse the retrieved data
        let retrievedtaskObject = JSON.parse(storedData);
        let updateTaskNumber = 0;
        // Copy data from retrievedtaskObject to taskObject
        for (const objectKey in retrievedtaskObject){
            if(retrievedtaskObject.hasOwnProperty(objectKey)){
                taskObject[`task${updateTaskNumber}`] = retrievedtaskObject[objectKey];
                updateTaskNumber++;
            }
        }
        // Create new tasks based on the retrieved data
        for( let task in taskObject){
            if (taskObject.hasOwnProperty(task)){
                const taskData = taskObject[task];
                newTaskCreate(taskData.name, AnothertaskNumber, taskData.initialStatus);
                AnothertaskNumber += 1;
            }
        }
    }
})

// Add button click event listener to show the task input form
const addButton = document.querySelector(".add_task_button");
const form = document.querySelector(".task_input_form");
const taskManager = document.querySelector(".manager");

addButton.addEventListener("click", showForm);

function showForm(){
    const ifHidden = form.classList.contains("hidden");
    if(ifHidden){
        form.classList.replace("hidden", "flex");
        taskManager.classList.replace("grid", "hidden");
        addButton.classList.add("hidden");
    }
}

// Retrieve form elements
const submit = document.querySelector(".submit_button");
const cancelButton = document.querySelector(".cancel");

// Function to create a new task div and its children
function newTaskCreate(name, number, status){
    // Create a new task div
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("grid_item" ,"bg-red-400", "justify-start", "flex", "items-center", "text-lg");
    newTaskDiv.id = `task${number}`;

    // Create task name button div
    const newTaskNameButtonDiv = document.createElement("div");
    const newTaskButton = document.createElement("button");
    newTaskNameButtonDiv.classList.add("task_name", "ml-8", "bg-gray-400", "p-6", "mr-60", "w-[10rem]", "h-[5rem]", "rounded-lg", "hover:scale-110", "flex", "justify-center", "item-center");
    newTaskButton.textContent = name;
    newTaskNameButtonDiv.appendChild(newTaskButton);

    // Create task status div
    const newTaskStatusDiv = document.createElement("div");
    const newTaskStatusButton = document.createElement("button");
    newTaskStatusDiv.classList.add("task_status");
    if (status === "complete"){
        newTaskStatusButton.classList.add("status_button", "mr-52", "bg-green-400", "p-6", "rounded-lg", "hover:scale-105");
        newTaskStatusButton.textContent = "Completed!";
    } else if(status === "incomplete"){
        newTaskStatusButton.classList.add("status_button", "mr-52", "bg-gray-200", "p-6", "rounded-lg", "hover:scale-105");
        newTaskStatusButton.textContent = "Mark as Complete";
    }
    newTaskStatusDiv.append(newTaskStatusButton);

    // Create task delete div
    const newTaskDeleteDiv = document.createElement("div");
    const newTaskDeleteButton = document.createElement("button");
    newTaskDeleteDiv.classList.add("task_delete");
    newTaskDeleteButton.textContent = "Delete";
    newTaskDeleteButton.classList.add("delete_button", "bg-red-500", "p-6", "rounded-lg", "hover:scale-105");
    newTaskDeleteDiv.appendChild(newTaskDeleteButton);

    // Append children to the new task div
    newTaskDiv.appendChild(newTaskNameButtonDiv);
    newTaskDiv.appendChild(newTaskStatusDiv);
    newTaskDiv.appendChild(newTaskDeleteDiv);

    // Append the new task div to the taskManager
    taskManager.appendChild(newTaskDiv);
}

// Click event on the task description box to show task description
const desciptionBoxDiv = document.querySelector(".showDescription");
desciptionBoxDiv.addEventListener("click", function(e){
    const target = e.target;
    const closeButton = target.classList.contains("close_button");
    if(closeButton){
        desciptionBoxDiv.classList.replace("flex", "hidden");
        taskManager.classList.replace("hidden", "grid");
        addButton.classList.remove("hidden");
    }
});

// Function to display the task description in the description box
function desciptionBox(descript){
    while (desciptionBoxDiv.firstChild){
        desciptionBoxDiv.removeChild(desciptionBoxDiv.firstChild);
    }
    const desciptionHeadingDiv = document.createElement("div");
    desciptionHeadingDiv.classList.add("descriptionHeading", "w-36", "h-12", "p-6", "text-xl", "font-bold", "relative", "bottom-10");
    const desciptionHeadingChild = document.createElement("p");
    desciptionHeadingChild.textContent = "Description";

    const desciptionDetailDiv = document.createElement("div");
    desciptionDetailDiv.classList.add("descDetail", "h-[20rem]", "w-[25rem]", "border", "border-gray-300", "rounded-lg", "p-6");
    const desciptionDetailChild= document.createElement("p");
    desciptionDetailChild.textContent = descript;

    desciptionHeadingDiv.appendChild(desciptionHeadingChild);
    desciptionDetailDiv.appendChild(desciptionDetailChild);

    const descriptionBoxCloser = document.createElement("div");
    descriptionBoxCloser.classList.add("close_description_box", "relative", "left-52", "bottom-6");

    const descriptionBoxCloserButton = document.createElement("button");
    descriptionBoxCloserButton.classList.add("close_button");
    descriptionBoxCloserButton.innerHTML = "&#10006;";

    descriptionBoxCloser.appendChild(descriptionBoxCloserButton);

    desciptionBoxDiv.appendChild(descriptionBoxCloser);
    desciptionBoxDiv.appendChild(desciptionHeadingDiv);
    desciptionBoxDiv.appendChild(desciptionDetailDiv);
}

// Retrieve data from local storage
retrievedData = JSON.parse(localStorage.getItem("tasksInfo"));
// Initialize anotherTaskObject
const anotherTaskObject = taskObject || {}
let taskNumber = retrievedData ? Object.keys(retrievedData).length : 0;

// Click event to submit the form
submit.addEventListener("click", submitForm);

function submitForm(){
    const taskName = document.forms.item(0).taskName.value;
    const taskDescription = document.forms.item(0).taskDescription.value;
    if (taskName){
        // Add the new task data to anotherTaskObject
        anotherTaskObject[`task${taskNumber}`] = { name : taskName , description : taskDescription, initialStatus : "incomplete" };
        newTaskCreate(taskName, taskNumber, "incomplete");
        taskNumber += 1;
        document.forms.item(0).reset();
        showTaskManager();
        StorageUpdater();
    }
}

// Click event to cancel the form
cancelButton.addEventListener("click", cancelForm);

function cancelForm(){
    document.forms.item(0).reset();
    showTaskManager();
}

// Show or hide the task manager based on the number of tasks
if(taskNumber === 0){
    taskManager.classList.replace("grid", "hidden");
} else {
    taskManager.classList.replace("hidden", "grid");
}

// Function to show the task manager and hide the form
function showTaskManager(){
    const ifNotHidden = form.classList.contains("flex");
    if(ifNotHidden){
        form.classList.replace("flex", "hidden");
        taskManager.classList.replace("hidden", "grid");
        addButton.classList.remove("hidden");
    }
}

// Update local storage with the task data
function StorageUpdater(){
    localStorage.setItem("tasksInfo", JSON.stringify(anotherTaskObject));
}

// Click event to update task status or delete a task
taskManager.addEventListener("click", statusChangeAndDelete);

function statusChangeAndDelete(event) {
    const target = event.target;
    const ifStatusButton = target.classList.contains("status_button");
    const ifDeleteButton = target.classList.contains("delete_button");
    const ifTaskNameButton = target.parentElement.classList.contains("task_name");

    const taskInfoBar = target.parentElement.parentElement;
    const TaskIdInStoreObject = taskInfoBar.id;
    const storedDescription = anotherTaskObject[TaskIdInStoreObject]["description"];

    if (ifStatusButton) {
        if (anotherTaskObject[TaskIdInStoreObject]) {
            const storedStatus = anotherTaskObject[TaskIdInStoreObject]["initialStatus"];
            if (storedStatus === "incomplete") {
                anotherTaskObject[TaskIdInStoreObject]["initialStatus"] = "complete";
                StorageUpdater();
                target.innerText = "Completed!";
                target.classList.remove("bg-gray-200");
                target.classList.add("bg-green-400");
            } else if (storedStatus === "complete") {
                anotherTaskObject[TaskIdInStoreObject]["initialStatus"] = "incomplete";
                StorageUpdater();
                target.innerText = "Mark as Complete";
                target.classList.remove("bg-green-400");
                target.classList.add("bg-gray-200");
            }
        }
    } else if (ifDeleteButton) {
        const taskInfoBar = target.parentElement.parentElement;
        const TaskIdInStoreObject = taskInfoBar.id;
        if (anotherTaskObject.hasOwnProperty(TaskIdInStoreObject)) {
            delete anotherTaskObject[TaskIdInStoreObject];
            taskManager.removeChild(taskInfoBar);
            StorageUpdater();
        } else {
            alert("Task Not Found");
        }
    } else if(ifTaskNameButton){
        const descriptionPanel = document.querySelector(".showDescription");
        const ifDescriptionHidden = descriptionPanel.classList.contains("hidden");
        if (ifDescriptionHidden){
            desciptionBox(storedDescription);
            descriptionPanel.classList.replace("hidden", "flex");
            taskManager.classList.replace("grid", "hidden");
            addButton.classList.add("hidden");
        }
    }
}
