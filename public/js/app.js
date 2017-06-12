var cargarPagina = function(){
  cargarPokemons();
  $(document).on("click", ".pokemon", mostrarDetallePokemon);
    //cuando los elementos son creados dinamicamente utilizar el evento on click
    $('.modal').modal();
}

var cargarPokemons = function(){
  var url ="http://pokeapi.co/api/v2/pokemon/";
  $.getJSON(url,function(response){
    var pokemones = response.results;
    var total = response.count;
    mostrarTotalPokemones(total);
    mostrarPokemones(pokemones);
  });
};
var mostrarTotalPokemones = function(total){
  $("#total").text(total)
}

var mostrarPokemones = function(pokemones){
  var $ul= $("#pokemones");
    //console.log(personajes);
  // crear un li que se muestre en el html
  pokemones.forEach(function(pokemon){//por defecto nos va a dar una unidad, obtiene el valor de cada objeto
      console.log(pokemon);
    var $li = $("<li/>");
   // $li.text(personaje.name);
    $li.addClass("pokemon");
    $li.attr("data-url",pokemon.ability);//le da el atributo de data-url a cada personaje
    $li.text(pokemon.name + " - " + pokemon.weight + "kg");   //crea un elemento li para cada nombre de personaje
    $ul.append($li);       //agrega cada personaje a la lista
      //console.log(personaje.name);  //obtenemos solo el nombre de los personajes.
  });
    
}
var plantillaPokemon =  '<h2>Pokemon:</h2>' +
   '<p><strong>Nombre:</strong>__nombre__</p>' +
   '<p><strong>Habilidad:</strong>__habilidad__</p>';

var mostrarDetallePokemon=function(){
    var url=$(this).data("url");
    console.log(url);
    var $pokemonContenedor = $("#pokemones");
    $.getJSON(url,function(response){
     $pokemonContenedor.html(
     plantillaPokemon.replace('__nombre__',response.name).replace('__habilidad__',response.ability)
        );
    });
};
$(document).ready(cargarPagina);  












//$.getJSON("http://pokeapi.co/api/v2/pokemon/", 
	//function (response) {
	//var pokemons = response.results;
	//crearPokemons(pokemons);
//});

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function (e) {
// 	if (this.readyState === 4) {
// 		if (this.status === 200) {
			// var response = JSON.parse(this.response);
			// var pokemons = response.results;
			// var squads = JSON.parse(this.response);	
			// crearPokemons(pokemons);
// 		}
		
// 	}
// };

// xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

// xhr.send();

//function crearPokemons(pokemons) {
//	var ul = document.getElementById("pokemons");

//	pokemons.forEach(function (pokemon) {
//		var li = document.createElement("li");
//		li.textContent = pokemon.name;

//		ul.appendChild(li);
//	});
//}
//










