var users = [{"user":"admin", "pass":"1234","nombre":"Juan","apellido":"Perez","img":"http://goo.gl/K3fAIZ"},
{"user":"pepe", "pass":"4785","nombre":"Lorenzo","apellido":"Gomes","img":"http://goo.gl/ouXI8S"}];

function login () {
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

	for (var i = 0; i < users.length; i++) {
		if (user == users[i].user && pass == users[i].pass){
		localStorage.setItem("user", user);
		localStorage.setItem("nombre", users[i].nombre);
		localStorage.setItem("apellido", users[i].apellido);
		localStorage.setItem("img", users[i].img);
		window.location = "index.html";
	}
	};
}

