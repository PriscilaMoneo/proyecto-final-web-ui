 if (localStorage.getItem("user") == undefined){
 	alert("Debes iniciar sesion para ver esto")
 	window.location = "login.html";
 	}else{
 document.getElementById('name_user').innerHTML = localStorage.getItem("user"); 
}

function log_out () {
	localStorage.clear();
	window.location = "login.html";
}

items = {"comics":[
    {"nombre":"Comic 1", "personaje":"Doe","url":"img/comic1.jpg", "puntaje":"2"},
    {"nombre":"Comic 2", "personaje":"Peter","url":"img/comic2.jpg","puntaje":"10"},
    {"nombre":"Comic 3", "personaje":"Doe","url":"img/comic3.jpg", "puntaje":"3"},
    {"nombre":"Comic 4", "personaje":"Peter","url":"img/comic4.jpg","puntaje":"5"},
    {"nombre":"Comic 5", "personaje":"Doe","url":"img/comic5.jpg", "puntaje":"8"},
    {"nombre":"Comic 6", "personaje":"Peter","url":"img/comic6.jpg","puntaje":"4"},
    {"nombre":"Comic 7", "personaje":"Doe","url":"img/comic7.jpg", "puntaje":"1"},
    {"nombre":"Comic 8", "personaje":"Peter","url":"img/comic8.jpg","puntaje":"9"},
    {"nombre":"Comic 9", "personaje":"Doe","url":"img/comic9.jpg", "puntaje":"6"},
    {"nombre":"Comic 10", "personaje":"Peter","url":"img/comic10.jpg","puntaje":"7"}
]}

var listContent = "";
for(i=0; i<10; i++){
    listContent += "<div class='element'>";
    listContent +=   "<img id='img_elm' src='"+ items.comics[i].url +"'/>";
    listContent +=      "<span id='nombre_elm'>"+ items.comics[i].nombre +"</span>";
    listContent +=      "<div class='elm_vm'><i class='fa fa-plus'></i> Ver Mas</div>";
    listContent +=      "</div>";
}

document.getElementById('content').innerHTML = listContent;			
					
					
				