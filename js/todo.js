// Exercise: Create a to do list application

// todoList function used on button click to get user input and 

function updateTaskStatus()
{
	var checkId = this.id.replace("cb_", "");
	var itemTask = document.getElementById("item_" + checkId);


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
	var totalItems = 0;

	// Para conseguir id unicos
	//var date = new Date ();
	//var id = "" + date.getHours() + date.getMinutes() + date.getSecond(); + date.getMilliseconds();

	//Crea una nueva tarea con un checkbox al inicio
	var listTask = document.createElement("li");
	//listTask.id = "li_" + id;
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "cb_" + totalItems;
	checkbox.onclick = updateTaskStatus;

	var span = document.createElement("span");
	span.id = "item_" + totalItems;
	span.innerHTML = itemTask;
	//span.ondblclick = renameItem;

	var icon = document.createElement("i");
	icon.className= "fa fa-trash-o pull-right";

	//icon.onclick = removeTask;
	  
	//listTask.innerHTML = itemTask;
	listTask.appendChild(checkbox);
	listTask.appendChild(span);
	listTask.appendChild(icon);
	list.appendChild(listTask);

}
/*function renameItem 
{
	// Cuando se da double click a la tarea ubicada en span
	var newText = prompt(¿Cúal deberia ser el nombre de esta tarea);

	if (!newText || newText == "" || newText == " ")
	{
		return false;
	}
	this.innerHTML = newText;
}
function removeTask 
{
	// Cuando se da click al icono tacho ubicada en icon
	var iconId = this.id.replace("item_", "");
	document.getElementById("li_" + iconId).style.display = "none";

	var item =this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);
}*/

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


