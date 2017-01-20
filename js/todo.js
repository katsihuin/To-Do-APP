// Exercise: Create a to do list application

// todoList function used on button click to get user input and 

function updateTaskStatus()
{
	var cbId = this.id.replace("cb_", "");
	var itemTask = document.getElementById("item_" + cbId);

	if (this.checked) 
	{
		itemTask.className = "checked";
	}
	else 
	{
		itemTask.className = "";
	}
}

function addNewTask(list, itemTask)
{	
	totalItems++;

	//Crea una nueva tarea con un checkbox al inicio
	var listTask = document.createElement("li");
	var totalItems = 0;
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "cb_" + totalItems;
	checkbox.onclick = updateTaskStatus;

	var span = document.createElement("span");
	span.id = "item_" + totalItems;
	span.innerHTML = itemTask;

	//listTask.innerHTML = itemTask;
	listTask.appendChild(checkbox);
	listTask.appendChild(span);
	list.appendChild(listTask);
}


var inItemTask = document.getElementById("todoInput");
inItemTask.focus();

// Agregar tareas con click al boton agregar
var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function()
{
	var itemTask =inItemTask.value;

	if(itemTask == "" || itemTask == " ")
	{
		return false;
	}

addNewTask(document.getElementById("todoList"), itemTask);
}

// Agregar tareas cuando usuario presiona la tecla ENTER
inItemTask.onkeyup = function(event)
{
	if (event.which == 13) 
	{
		var itemTask =inItemTask.value;

		if(itemTask == "" || itemTask == " ")
		{
			return false;
		}
		addNewTask(document.getElementById("todoList"), itemTask);

		inItemTask.focus();
		inItemTask.select();
	}
}


