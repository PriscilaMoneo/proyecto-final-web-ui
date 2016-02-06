// Por defecto buscamos por nombre del comic
var campoDeFiltro = 'nombre';

// Por defecto ordenamos por nombre del comic
var campoDeOrden = 'nombre';

if (localStorage.getItem("user") == undefined){
  alert("Debes iniciar sesion para ver esto")
  window.location = "login.html";
} else {
  document.getElementById('name_user').innerHTML = localStorage.getItem("user");

function log_out () {
  localStorage.removeItem("user");
  window.location = "login.html";
}

function show_myaccount () {
  var userContent = "";
  document.getElementById('content').innerHTML = userContent;

  userContent += "<div class='show_user'><div class='texto_info'>";
  userContent +=   "<span>Name: </span>" + localStorage.getItem("nombre") + "<br/><br/>";
  userContent +=   "<span>Surname: </span>"+ localStorage.getItem("apellido") + "<br/><br/>";
  userContent +=   "<span>User: </span>"+ localStorage.getItem("user") + "</div>";
  userContent +=   "<img class='img_user' src='"+localStorage.getItem("img")+"'/>";
  userContent +=   "</div>";

  document.getElementById('content').innerHTML = userContent;

}
function show_comics () {
  document.getElementById('content').innerHTML = renderizarItems(items.comics);
}

function renderizarItems(arrayDeComics) {
  var listContent = "";
  for (i=0; i< arrayDeComics.length; i++){
      listContent += "<div class='element'>";
      listContent +=   "<img id='img_elm' src='"+ arrayDeComics[i].url +"'/>";
      listContent +=      "<span id='nombre_elm'>"+ arrayDeComics[i].nombre +"</span>";
      listContent +=      "<span id='pto_elm'>Puntaje: "+ arrayDeComics[i].puntaje +"</span>";
      /*listContent +=      "<div class='elm_vm'><i class='fa fa-plus'></i> Ver Mas</div>";*/
      listContent +=      "</div>";
  }
  return listContent;
}

function buscar(ordenoBusqueda) {
  // El texto a buscar
  var texto_busqueda = document.getElementById('buscarInput').value;

  // Recibo el tipo de filtro. (Personaje, nombre, puntos) desde 'campoFiltro'
  var resultadoBusqueda = filtrarPor(campoDeFiltro, texto_busqueda);

  // Si hay resultados, renderizamos
  if (resultadoBusqueda.length > 0) {
    if (ordenoBusqueda) {
      resultadoBusqueda = ordenarPor(resultadoBusqueda, campoDeOrden);
    }
    document.getElementById('content').innerHTML = renderizarItems(resultadoBusqueda);
  } else {
    // Si el texto de busqueda es vacio, entonces mostramos TODOSS los commics de nuevo.
    if (texto_busqueda == '') {
      if (ordenoBusqueda) {
        resultadoBusqueda = ordenarPor(items.comics, campoDeOrden);
      }
      document.getElementById('content').innerHTML = renderizarItems(resultadoBusqueda);
    } else {
      document.getElementById('content').innerHTML = "Sin resultados";
    }
  }
}

function ordenar(campo) {
  campoDeOrden = campo;
  buscar(true); // Llamo a la busqueda pero le digo que Ordene
}

function filtrarPor(campo, valor) {
  var itemsFiltrados = items.comics.filter(function(elemento){
    return elemento[campo].toLowerCase() === valor.toLowerCase();
  });

  return itemsFiltrados;
}

function ordenarPor(array, campo) {
    var itemsOrdenados = array.sort(function(a, b) {
        var x = a[campo]; var y = b[campo];

        if (campo == 'puntaje') {
          return ((parseInt(x) < parseInt(y)) ? -1 : ((parseInt(x) > parseInt(y)) ? 1 : 0));
        } else {
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }  

    });
    if (campo == 'puntaje') {
          itemsOrdenados.reverse();
        };
    return itemsOrdenados;
}

function agregarNuevoComic() {
  var nombre = prompt("Ingrese nombre del Comic", "");
  var personaje = prompt("Ingrese nombre del Personaje", "");
  var puntaje = prompt("Ingrese puntaje", "");
  var url = prompt("Ingrese URL publica para imagen del comic", "");

  if (nombre != null && personaje != null && puntaje != null) {

      items.comics.push({"nombre": nombre, "personaje" : personaje, "url" : url, "puntaje" : puntaje});

      localStorage.setItem("items", JSON.stringify(items));

      // Renderizamos de nuevo todos los commiscs
      document.getElementById('content').innerHTML = renderizarItems(items.comics);

  } else {
    alert("Error, intente nuevamente.")
  }
}

function grabarCampoDeFiltro(campo) {
  campoDeFiltro = campo;
}

if (localStorage.getItem("items") == null) {

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
  ]};

} else {
  items = JSON.parse(localStorage.getItem("items"));
}

document.getElementById('content').innerHTML = renderizarItems(items.comics);


};