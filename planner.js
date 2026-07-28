function addTask(){

const input=document.getElementById("taskInput");

const task=input.value.trim();

if(task===""){

alert("Please enter a task.");

return;

}

const li=document.createElement("li");

const span=document.createElement("span");

span.textContent=task;

const actions=document.createElement("div");

actions.className="actions";

const completeBtn=document.createElement("button");

completeBtn.innerHTML="✓";

completeBtn.className="complete";

completeBtn.onclick=function(){

span.classList.toggle("completed");

};

const deleteBtn=document.createElement("button");

deleteBtn.innerHTML="🗑";

deleteBtn.className="delete";

deleteBtn.onclick=function(){

li.remove();

};

actions.appendChild(completeBtn);

actions.appendChild(deleteBtn);

li.appendChild(span);

li.appendChild(actions);

document.getElementById("taskList").appendChild(li);

input.value="";

}