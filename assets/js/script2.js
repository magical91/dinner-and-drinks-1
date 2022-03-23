
var getRandomCocktail = function() {

    // make a request to the url
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function(response) {
    // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayRandomCocktail(data);
            });
        } else {
            alert('Error - looks like somehting went wrong');
        }
    })
    .catch(function(error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()` method
        if (error) {
        alert("Unable to connect to GitHub");
        }
    });
};

getRandomCocktail();

function displayRandomCocktail(cocktail){
    console.log(cocktail.drinks[0].idDrink);
    console.log(cocktail.drinks[0].strDrink);
    console.log(cocktail.drinks[0].strInstructions);
    console.log(cocktail.drinks[0].strDrinkThumb);

}