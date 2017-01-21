var Cines     = [];
var Peliculas = [];
var Usuarios  = [];

function cine(id,nombre,loc,max){
	this.id = id;
	this.nombre = nombre;
	this.loc = loc;
	this.max = max;
}

function usuario(id,nombre,apellido,nick){
	this.id = id;
	this.nombre = nombre;
	this.apellido = apellido;
	this.nick = nick;
}

function pelicula(id,id_cine,nombre,foto,sinopsis,trailer){
	this.id = id;
	this.id_cine = id_cine;
	this.nombre = nombre;
	this.foto = foto;
	this.sinopsis = sinopsis;
	this.trailer = trailer;
}

var cine1 = {
     id  : 1,
     nombre : "Village Caballito",
     loc   : "Capital Federal",
     max : "230",
}
var cine2 = {
     id  : 2,
     nombre : "Village Recoleta",
     loc   : "Capital Federal",
     max : "230",
 }

var cine3 = {
     id  : 3,
     nombre : "Village Avellaneda",
     loc   : "Prov. Buenos Aires",
     max : "230",
 }
var peli1 = {
	id : 1,
	id_cine : 1,
	nombre : "Pelicula de prueba 1",
	foto : "http://cinemadevoto.neexcdn.com.ar/182.png",
	sinopsis : "Buenisima la pelicula",
	trailer : "https://www.youtube.com/embed/sC9abcLLQpI",
}

var peli2 = {
	id : 2,
	id_cine : 2,
	nombre : "Pelicula de prueba 2",
	foto : "http://cinemadevoto.neexcdn.com.ar/182.png",
	sinopsis : "Buenisima la pelicula",
	trailer : "https://www.youtube.com/embed/sC9abcLLQpI", 
}

var peli3 = {
	id : 3,
	id_cine : 3,
	nombre : "Pelicula de prueba 3",
	foto : "http://cinemadevoto.neexcdn.com.ar/182.png",
	sinopsis : "Buenisima la pelicula",
	trailer : "https://www.youtube.com/embed/sC9abcLLQpI",
}

Cines = [cine1,cine2,cine3];
Peliculas = [peli1,peli2,peli3];

function altaCine(){
	
	var id       = Cines.length;
	var nombre   = document.getElementById('cine-nombre').value;

	if (nombre == ''){
		alert("Debe ingresar el nombre del cine");
		return;
	}

	var loc      = document.getElementById('cine-loc').value;

	if (loc == ''){
		alert("Debe ingresar una localidad para el cine");
		return;
	}

	var max      = document.getElementById('cine-max').value;

	if (max == '' || max == 0){
		alert("Debe ingresar la capacidad para el cine");
		return;
	}
	
    var Cine = new cine(id,nombre,loc,max);
	Cines.push(Cine);   


	var select = document.getElementById("peli-id_cine");
	var option = document.createElement("option");
	option.setAttribute("id","opt-" + id);
	option.text = nombre;
	option.value = id;
	select.appendChild(option);

	alert("Cine ingresado exitosamente");
}

function altaUsuario(){
	
	var id       = Usuarios.length;
	var nombre   = document.getElementById('user-nombre').value;

	if (nombre == ''){
		alert("Debe ingresar el nombre del usuario");
		return;
	}

	var apellido = document.getElementById('user-apellido').value;

	if (apellido == ''){
		alert("Debe ingresar el apellido del usuario");
		return;
	}

	var nick     = document.getElementById('user-nick').value;

	if (nick == ''){
		alert("Debe ingresar el apodo del usuario");
		return;
	}
	
    var Usuario = new usuario(id,nombre,apellido,nick);
	Usuarios.push(Usuario);   

	alert("Usuario ingresado exitosamente");

}

function altaPelicula(){
	
	var id       = Peliculas.length;
	var id_cine  = document.getElementById('peli-id_cine').value;
	var nombre   = document.getElementById('peli-nombre').value;

	if (nombre == ''){
		alert("Debe ingresar el nombre de la pelicula");
		return;
	}
	
	var foto     = document.getElementById('peli-foto').value;
	
	if (foto == ''){
		alert("Debe ingresar la url de la foto");
		return;
	}

	var sinopsis = document.getElementById('peli-sinopsis').value;

	if (sinopsis == ''){
		alert("Debe ingresar una sinopsis para la pelicula");
		return;
	}

	var trailer     = document.getElementById('peli-trailer').value;
	
	if (trailer == ''){
		aler("Debe ingresar una url con el trailer de la pelicula");
		return;
	}

    var Pelicula = new pelicula(id,id_cine,nombre,foto,sinopsis,trailer);
	Peliculas.push(Pelicula);   

	alert("Pelicula ingresado exitosamente");

	refrescarPantalla();
}

function optionCine(id_elemento){

	var select = document.getElementById(id_elemento);

	for (var i in Cines){
		var option = document.createElement("option");
		option.setAttribute("id",id_elemento+"-opt-" + Cines[i].id);
		option.text = Cines[i].nombre;
		option.value = Cines[i].id;
		select.appendChild(option);
	}
}

function optionUser(){
	var select = document.getElementById("eliminar-id-user");

	for (var i in Usuarios){
		var option = document.createElement("option");
		option.setAttribute("id","eliminar-id-user-opt-" + Usuarios[i].id);
		option.text = Usuarios[i].nombre;
		option.value = Usuarios[i].id;
		select.appendChild(option);
	}
}

function eliminarCine(){

	var select = document.getElementById("eliminar-id-cine");

	for (var i in Cines){
		if (Cines[i].id == select.options[select.selectedIndex].value){
			Cines.splice(i,1);
			alert("Cine eliminado exitosamente" );
		}
	}
	refrescarPantalla();
}

function optionPeliculas(){
	
	var select = document.getElementById("delete-id-cine");
	var select_peli = document.getElementById("eliminar-id-pelicula");

	for (var i in Peliculas){
		if (Peliculas[i].id_cine == select.options[select.selectedIndex].value){
			var option = document.createElement("option");
			option.setAttribute("id","eliminar-peli-opt-" + Peliculas[i].id);
			option.text = Peliculas[i].nombre;
			option.value = Peliculas[i].id;
			select_peli.appendChild(option);
		}
	}

}

function eliminarPelicula() {

	var select = document.getElementById("eliminar-id-pelicula");

	for (var i in Peliculas){
		if (Peliculas[i].id == select.options[select.selectedIndex].value){
			Peliculas.splice(i,1);
			alert("Pelicula eliminado exitosamente" );
		}
	}
	refrescarPantalla();

}

function refrescarPantalla(){
	var div_peliculas = document.getElementById("pelicula");	
	while (div_peliculas.firstChild) {
    	div_peliculas.removeChild(div_peliculas.firstChild);
	}

	var select_cines = document.getElementById("peli-id_cine");
	while (select_cines.firstChild) {
    	select_cines.removeChild(select_cines.firstChild);
	}
	Listar();
}

function Listar(){
   
	for (var i in Cines){

		var select = document.getElementById("peli-id_cine");
		var option = document.createElement("option");
		option.setAttribute("id","opt-" + Cines[i].id);
		option.text = Cines[i].nombre;
		option.value = Cines[i].id;
		select.appendChild(option);

		for (var j in Peliculas){
			if (Cines[i].id == Peliculas[j].id_cine){

				var cine = document.createElement("div");
				cine.setAttribute("id","cine-" + Cines[i].id +"peli"+Peliculas[j].id); 
				cine.setAttribute("class","pelicula");

				var foto  = document.createElement("img");
				foto.setAttribute("src", Peliculas[j].foto);
				foto.setAttribute("id",Peliculas[j].id+ "-foto");
				cine.appendChild(foto);
				
				var elemento = document.createElement("div");

				var nombre  = document.createElement("h2");
				var nomDetalle = document.createTextNode(Peliculas[j].nombre);

				nombre.setAttribute("id",Peliculas[j].id);
				nombre.appendChild(nomDetalle);
				elemento.appendChild(nombre);

				var sinopsis  = document.createElement("h3")
				var sinopsis_text = document.createTextNode(Peliculas[j].sinopsis);

				sinopsis.setAttribute("id",Peliculas[j].id+ "-sinopsis");
				sinopsis.appendChild(sinopsis_text);
				elemento.appendChild(sinopsis);

				cine.appendChild(elemento);

				var trailer  = document.createElement("iframe")

				trailer.src = Peliculas[j].trailer;
				trailer.autoPlay = true;

				trailer.setAttribute("id",Peliculas[j].id+ "-trailer");
				cine.appendChild(trailer);

				document.getElementById("pelicula").appendChild(cine);
			}
		}		
		
	}
}

function Ordenar(vector){
   
// Para procesar datos , ordenar , etc : https://lodash.com/
   Cines = vector.sort(function (a, b) {
    return (a.id - b.id)
   });
   //debugger;
}


window.onload = function() {
	Ordenar(Cines);
	Listar();
};






