//variable global
var inItemTask = document.getElementById("todoInput");

//funcion para actualizar el estado del checkbox
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

//funcion para editar las tareas
function renameItem() 
{
	// Cuando se da double click a la tarea ubicada en span
	var newText = prompt("¿Cúal deberia ser el nombre de esta tarea?");

	if (!newText || newText == "" || newText == " ")
	{
		return false;
	}
	this.innerHTML = newText;
}

//funcion para editar las tareas
function removeTask(evt) 
{
	// Cuando se da click al icono tacho ubicada en icon
	var hijo = evt.target.parentNode;
	hijo.parentNode.removeChild(hijo);
	hijo.className = "option animated FadeOutDown";
}

//funcion para agrega tareas
function addNewTask(list, itemTask)
{	
	// Para conseguir id unicos
	var date = new Date ();
	var id = "" + date.getHours() + date.getMinutes() + date.getSeconds(); + date.getMilliseconds();

	//Crea una nueva tarea 
	var listTask = document.createElement("li");
	listTask.id = "li_" + id;


	//Adiciona un checkbox a la tarea
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "cb_" + id;
	checkbox.onclick = updateTaskStatus;

	//Adiciona un span la tarea para el texto
	var span = document.createElement("span");
	span.id = "item_" + id;
	span.innerHTML = itemTask;
	span.ondblclick = renameItem;

	//Adiciona un icono tacho la tarea para eliminar la tarea
	var icon = document.createElement("i");
	icon.id = "icon_"
	icon.className = "fa fa-trash-o pull-right";
	icon.onclick = removeTask;
	
	listTask.appendChild(checkbox);
	listTask.appendChild(span);
	listTask.appendChild(icon);
	list.appendChild(listTask);

	//enfoca el cursor en el text area
	inItemTask.focus();

	//Borra el texto del text area
	inItemTask.value="";
}


// Agregar tareas con click al boton agregar
var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function()
{
	var itemTask =inItemTask.value;

	if(itemTask == "" || itemTask == " ")
	{
		return false;
		alert("Ingresa una tarea a completar y luego click en el botón Agregar o presiona ENTER");
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


