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
    {"nombre":"Power Man", "personaje":"Luke Cage","url":"img/comic1.jpg", "puntaje":"2"},
    {"nombre":"Capitan America", "personaje":"Capitan America","url":"img/comic2.jpg","puntaje":"10"},
    {"nombre":"X-Men", "personaje":"X-Men","url":"img/comic3.jpg", "puntaje":"3"},
    {"nombre":"Capitan America", "personaje":"Capitan America - The Falcon","url":"img/comic4.jpg","puntaje":"5"},
    {"nombre":"Hero for Hire", "personaje":"Luke Cage","url":"img/comic5.jpg", "puntaje":"8"},
    {"nombre":"The Defenders", "personaje":"The Defenders","url":"img/comic6.jpg","puntaje":"4"},
    {"nombre":"The Avengers", "personaje":"The Avengers","url":"img/comic7.jpg", "puntaje":"1"},
    {"nombre":"Hulk", "personaje":"Hulk","url":"img/comic8.jpg","puntaje":"9"},
    {"nombre":"Patrula X", "personaje":"Patrula X","url":"img/comic9.jpg", "puntaje":"6"},
    {"nombre":"Silver Surfer", "personaje":"Silver Surfer","url":"img/comic10.jpg","puntaje":"7"},

]}

var tamano = items.comics.length;

var listContent = "";

for(i=0; i<tamano; i++){
    listContent += "<div class='element'>";
    listContent +=   "<img id='img_elm' src='"+ items.comics[i].url +"'/>";
    listContent +=      "<span id='nombre_elm'>"+ items.comics[i].nombre +"</span>";
    listContent +=      "<div class='elm_vm'><i class='fa fa-plus'></i> Ver Mas</div>";
    listContent +=      "</div>";
}

document.getElementById('content').innerHTML = listContent;			
					
					
				