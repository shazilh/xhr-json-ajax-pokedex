var cargarPagina = function () {
	$.getJSON("https://pokeapi.co/api/v2/pokemon/",
		function (response) {
		var pokemons = response.results;
		crearPokemons(pokemons);
        //console.log(pokemons);
		$(".modal").modal();
		$('.contenedorModal').click(masInformacion);
        
	});
    
var plantillaPokemones='<div class=" col s2 contenedorModal"  data-url="__url__" data-img="__imgPokemon__" >'+
		'<a href="#modalPokemon">'+
				'	<img src="__urlImagenPokemon__" alt="pokemon" class="responsive-img col s12 borderojo">'+
				'<span class="col s12">__nombreDePokemon__</span>'+
			'</a>'+
		'</div>';
var imagenesPokemones=['./img/bulbasaur.png',
		'./img/Ivysaur.png','./img/venusaur.png','./img/Charmander.png','./img/charmeleon.jpeg',
		'./img/charizard.png','./img/Squirtle.png','./img/Wartortle.png','./img/blastoise.png',
		'./img/Caterpie.png','./img/Metapod.png','./img/250px-012Butterfree.png','./img/weedle.png',
		'./img/Kakuna.png','./img/Beedrill.png','./img/Pidgey.png','./img/Pidgeotto.png',
		'./img/Pidgeot.png','./img/Rattata.png','./img/Raticate.png'];

var plantillaModal = '<div class="modal-content ">'+
		'<div class="col s12 m7 color">'+
			 '<h2 class="">__nombreDePokemon__</h2>'+
			 ' <div class="card horizontal row">'+
				 '<div class="card-image col s6 m6 ">'+
					'<img src="__imagenPokemon__" class="imagenModal responsive-img circle">'+
				 '</div>'+
				 '<div class="container">'+
					 	'<div class="row">'+
						 '<p class="col s12 m6">color:__color__</p>'+
						 '<p class="col s12 m6">habitat:__habitat__</p>'+
						 '<p class="col s12 m6">shape:__shape__</p>'+
						 '<p class="col s12 m6">generacion:__generacion__</p>'
					 '</div>'+
				 '</div>'+
			 '</div>'+
		 '</div>'+
	'</div>';
	

var obtenerDatos = function(pokemon,imagen){
	 var nombre = pokemon.names[0].name;
	 var color = pokemon.color.name;
	 var habitat = pokemon.habitat.name;
	 var forma = pokemon.shape.name;
	 var generacion = pokemon.generation.name;
	 var plantillaFinal ="";
	 plantillaFinal+=plantillaModal.replace('__nombreDePokemon__',nombre)
		 .replace('__color__',color)
		 .replace('__habitat__',habitat)
		 .replace('__shape__',forma)
		 .replace('__generacion__', generacion)
		 .replace('__imagenPokemon__',imagen);
		 $("#modalPokemon").html(plantillaFinal);
 }

var masInformacion = function(){
      var urlPokemonEspecie=$(this).data('url').replace('pokemon','pokemon-species').replace("http://",'https://');
			 console.log(urlPokemonEspecie);
			 console.log($(this).data("img"));
      var imagen = $(this).data("img");
			 $("#modalPokemon").html();
			 $.getJSON(urlPokemonEspecie,function(response){
				 obtenerDatos(response,imagen);
			 });
};

var crearPokemons=function(pokemons) {
    
	plantillaPokemonFinal = "";
	pokemons.forEach(function (pokemon,i) {
    plantillaPokemonFinal+=plantillaPokemones.replace("__nombreDePokemon__",pokemon.name)
		.replace("__urlImagenPokemon__",imagenesPokemones[i])
		.replace("__url__",pokemon.url)
		.replace("__imgPokemon__",imagenesPokemones[i]);
	});

	$('#pokes').html(plantillaPokemonFinal);
}
}

cargarPagina();