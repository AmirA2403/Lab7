document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("input-box");
    const addTaskBtn = document.getElementById("add-btn");
    const taskList = document.getElementById("list-container");

    const addTask = () => {
        let taskText = taskInput.value.trim();
        if (taskText === "") return; 

     
        let taskItem = document.createElement("li");

     
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";
        

        let taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.padding = "5px";
        deleteBtn.style.border = "none";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        taskInput.value = "";
    };

    addTaskBtn.addEventListener("click", addTask);

    
});
