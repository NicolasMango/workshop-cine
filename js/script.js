var Cines     = [];
var Peliculas = [];
var Usuarios  = [];

function cine(id,nombre,loc,max){
	this.id = id;
	this.nombre = nombre;
	this.loc = loc;
	this.max = max;
}

/*
var cine1 = {
     id  : "cine1",
     nombre : "208",
     loc   : "Automatica",
     max : "Nafta",
}
var cine2 = {
     id  : "cine2",
     nombre : "208",
     loc   : "Automatica",
     max : "Nafta",
 }

var cine3 = {
     id  : "cine3",
     nombre : "208",
     loc   : "Automatica",
     max : "Nafta",
 }
var peli1 = {
	id : "peli1",
	id-cine : "cine1",
	nombre : "esperando",
	foto : "wwwwwww.gooogle.com.ar",
	sinopsis : "una cagada",
	trailer : "www.youtube.com",
}

var peli2 = {
	id : "peli2",
	id-cine : "cine2",
	nombre : "endo",
	foto : "wwww.gooogle.com.ar",
	sinopsis : "una cagada",
	trailer : "www.youtube.com", 
}

var peli3 = {
	id : "peli3",
	id-cine : "cine3",
	nombre : "garcha",
	foto : "wwwwwww.gooogle.com.ar",
	sinopsis : "pepe",
	trailer : "www.youtube.com",
}
*/

function usuario(id,nombre,apellido,nick){
	this.id = id;
	this.nombre = nombre;
	this.apellido = apellido;
	this.nick = nick;
}

function pelicula(id,id-cine,nombre,foto,sinopsis,trailer){
	this.id = id;
	this.id-cine = id-cine;
	this.nombre = nombre;
	this.foto = foto;
	this.sinopsis = sinopsis;
	this.trailer = trailer;
}

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
	var id-cine  = document.getElementById('peli-id-cine').value;
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
			if (Cines[i].id == Peliculas[j].id-cine){
				
				var nombre  = document.createElement("div")
				var detalle = document.createTextNode(Peliculas[j].nombre);
				
				nombre.setAttribute("id",Peliculas[i].id);
				nombre.appendChild(detalle);
				cine.appendChild(nombre);
			}
		}		
		document.body.appendChild(cine);
	}
}







