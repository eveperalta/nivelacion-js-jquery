$(document).ready( function(){
	$(document).ready(function(){
	$(".js-back").hide();
});

$(".callout-news p").append("NUEVAS RECETAS")
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
for (var i = recipesArray.length - 1; i >= 0; i--) {
	recipesArray[i]
}
	if($(recipesArray).attr("highlighted", true))
		console.log("Recipes: ", [i]);
	
	}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

}

renderRecipe([1]);

/*
* Función que se encarga de pintar todas las actividades
*/
$(document).ready (function renderActivities(activitiesArray){

console.log('Activities: ', activitiesArray);

for (var i = renderActivities.length - 1; i >= 0; i--) {
	renderActivities[i]
}
	if($().attr("highlighted", true))
		console.log("Recipes: ", [i]);
	
	}
}) 
	


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


