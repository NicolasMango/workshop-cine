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
     id  : 9887,
     nombre : "208",
     loc   : "Automatica",
     max : "Nafta",
}
var cine2 = {
     id  : 5,
     nombre : "208",
     loc   : "Automatica",
     max : "Nafta",
 }

var cine3 = {
     id  : 55,
     nombre : "208",
     loc   : "Automatica",
     max : "Nafta",
 }
var peli1 = {
	id : "peli1",
	id_cine : "cine1",
	nombre : "esperando",
	foto : "wwwwwww.gooogle.com.ar",
	sinopsis : "una cagada",
	trailer : "https://www.youtube.com/embed/sC9abcLLQpI",
}

var peli2 = {
	id : "peli2",
	id_cine : "cine24",
	nombre : "endo",
	foto : "wwww.gooogle.com.ar",
	sinopsis : "una cagada",
	trailer : "https://www.youtube.com/embed/sC9abcLLQpI", 
}

var peli3 = {
	id : "peli3",
	id_cine : "cine0",
	nombre : "garcha",
	foto : "wwwwwww.gooogle.com.ar",
	sinopsis : "pepe",
	trailer : "https://www.youtube.com/embed/sC9abcLLQpI",
}

Cines = [cine1,cine2,cine3];
Peliculas = [peli1,peli2,peli3];

function altaCine(){
	
	var id       = document.getElementById('cine-id').value;
	var nombre   = document.getElementById('cine-nombre').value;
	var loc      = document.getElementById('cine-loc').value;
	var max      = document.getElementById('cine-max').value;
	
    var Cine = new cine(id,nombre,loc,max);
	Cines.push(Cine);   
}

function altaUsuario(){
	
	var id       = document.getElementById('user-id').value;
	var nombre   = document.getElementById('user-nombre').value;
	var apellido = document.getElementById('user-apellido').value;
	var nick     = document.getElementById('user-nick').value;
	
    var Usuario = new usuario(id,nombre,apellido,nick);
	Usuarios.push(Usuario);   
}

function altaPelicula(){
	
	var id       = document.getElementById('peli-id').value;
	var id_cine  = document.getElementById('peli-id_cine').value;
	var nombre   = document.getElementById('peli-nombre').value;
	var foto     = document.getElementById('peli-foto').value;
	var sinopsis = document.getElementById('peli-sinopsis').value;
	var trailer     = document.getElementById('peli-trailer').value;
	
    var Pelicula = new pelicula(id,ic-cine,nombre,foto,sinopsis,trailer);
	Peliculas.push(Pelicula);   
}

function Listar(){
   
	for (var i in Cines){
		var cine = document.createElement("div");
		cine.setAttribute("id",Cines[i].id); 

		for (var j in Peliculas){
			if (Cines[i].id == Peliculas[j].id_cine){
				
				var nombre  = document.createElement("div")
				var nomDetalle = document.createTextNode(Peliculas[j].nombre);

				nombre.setAttribute("id",Peliculas[i].id);
				nombre.appendChild(nomDetalle);
				cine.appendChild(nombre);
				
				var foto  = document.createElement("div")
				var fotoValor = document.createTextNode(Peliculas[j].foto);

				foto.setAttribute("id",Peliculas[i].id+ "-foto");
				foto.appendChild(fotoValor);
				cine.appendChild(foto);

				var sinopsis  = document.createElement("div")
				var sinopsis_text = document.createTextNode(Peliculas[j].sinopsis);

				sinopsis.setAttribute("id",Peliculas[i].id+ "-sinopsis");
				sinopsis.appendChild(sinopsis_text);
				cine.appendChild(sinopsis);

				var trailer  = document.createElement("iframe")

				trailer.src = Peliculas[j].trailer;
				trailer.autoPlay = true;

				trailer.setAttribute("id",Peliculas[i].id+ "-trailer");
				cine.appendChild(trailer);
			}
		}		
		document.getElementById("pelicula").appendChild(cine);
	}
}

function ordenar(vector){
   
// Para procesar datos , ordenar ect : https://lodash.com/
   Cines = vector.sort(function (a, b) {
    return (a.id - b.id)
});
   debugger;
}


window.onload = function() {
	ordenar(Cines);
	Listar();
};






