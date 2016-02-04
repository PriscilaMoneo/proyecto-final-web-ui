function login() {
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	if (user == "admin" && pass == "1234"){
		localStorage.setItem("user", user);
		window.location = "index.html"; 
	}else{
		alert("Datos incorrectos");
	}
}
