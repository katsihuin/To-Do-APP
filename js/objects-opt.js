//var listaTareas = [["tarea1", true], ["tarea2", false], ["tarea3", false]];

var listaTareas = [];

var button=document.getElementById("btnAdd");
button.setAttribute("onclick","btnClick()");

function btnClick ()
{
    var lista = document.getElementById("todoList");
    var texto=document.getElementById("todoInput");

    if(texto.value!=null)
    {
	    listaTareas.push({nombre:texto.value,isDone:false});
	    texto.focus();
	    texto.value=""
	    drawTasksList();
    }
    else
    {
        alert("Ingresa una tarea");
    }
}
//var taskContainer = document
function drawTasksList(e)
{
	//obten tu contenedor de lista de tareas
	var lista = document.getElementById("todoList");
	lista.innerHMTL="";

	for (var i in listaTareas)
		{
			var html = "<li class='div "+(listaTareas[i].isDone?"check":"")+"'><input onclick='line("+i+")' type='checkbox' "+(listaTareas[i].isDone?"checked":"")+">"+listaTareas[i].nombre+"<i onclick='remove("+i+")'class='glyphicon  glyphicon-trash pull-right ico'"+"</li>";
			lista.innerHTML += html;
		}

	e.preventDefault();
}

//Comprueba o desmarca un elemento checkbox
function displayCheck(index)
{
    if(listaTareas[index].isDone==false)
    {
        listaTareas[index].isDone=true;
    }
    else
    {
        listaTareas[index].isDone=false;
    }
    drawTasksList();
}

//Elimina tarea
function removeTask(task){
    listaTareas.splice(task, 1);
    drawTasksList();
}
