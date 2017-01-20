// Exercise: Create a to do list application

// todoList function used on button click to get user input and 

function addNewTask(list, itemTask)
{
	//Crea una nueva tarea con un checkbox al inicio
	var listTask = document.createElement("li");
	var checkbox = document.
	listTask.innerHTML = itemTask;

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


