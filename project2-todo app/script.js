function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // ✅ Mark as completed
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // 🗑️ Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = function (event) {
      event.stopPropagation(); // don't mark as completed when deleting
      li.remove();
    };
  
    li.appendChild(deleteBtn);
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
  }