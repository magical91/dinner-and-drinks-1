var dinnerNameEl = document.querySelector("#dinnerName");
var dinnerImageEl = document.querySelector("#dinnerImage");
var dinnerInstructionsEl = document.querySelector("#dinnerInstructions");
var dinnerBtnEl = document.querySelector("#dinnerBtn");



var dinnerCard = function() {
    // format the github api url
    var apiKey = "596b6d1a386544c0aab56730e38ff084"
    var apiUrl = "https://api.spoonacular.com/recipes/random?number=1&cuisine=italian,american,japanese,mexican,chinese&apiKey=" + apiKey;
    

    // make a request to the url
    fetch(apiUrl)
    .then(function(response) {
    // request was successful
        if (response.ok) {
            response.json()
            .then(function(data) {
                apiData(data);
            });
        } else {
            alert('Error');
        }
    })
    .catch(function(error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()` method
        if (error) {
        alert("Unable to connect to api");
        }
    });
};

dinnerBtnEl.addEventListener("click", dinnerCard);

var apiData = function (data) {
    var storageData = data.recipes[0];
    console.log(storageData);

    dinnerNameEl.innerHTML = ""
    dinnerImageEl.innerHTML = ""
    dinnerInstructionsEl.innerHTML = ""

    var dinHeading = document.createElement('a');
    dinHeading.setAttribute("class", "font-weight-bold text-uppercase");
    dinHeading.textContent = data.recipes[0].title;
    dinHeading.href = data.recipes[0].sourceUrl;
    dinnerNameEl.appendChild(dinHeading);
    

    var dinImg = document.createElement('img')
    dinImg.src = data.recipes[0].image
    dinImg.style.width = "200px";
    dinImg.style.height = "200px";
    dinnerImageEl.appendChild(dinImg);

    var dinIns = document.createElement('p');
    dinIns.textContent = data.recipes[0].instructions;
    dinnerInstructionsEl.appendChild(dinIns);

};

dinnerCard();

var drinkNameEl = document.querySelector("#drinkName");
var drinkImageEl = document.querySelector("#drinkImage");
var drinkInstructionsEl = document.querySelector("#drinkInstructions");
var drinkBtnEl = document.querySelector("#drinkBtn");

var getrandomCocktail = function() {

    // make a request to the url
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function(response) {
    // request was successful
        if (response.ok) {
            response.json()
            .then(function(data) {
                apiCocktail(data);
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

getrandomCocktail();


drinkBtnEl.addEventListener("click", getrandomCocktail);

var apiCocktail = function (data) {
    var cocktailData = data.drinks[0];
    console.log(cocktailData);

    drinkNameEl.innerHTML = ""
    drinkImageEl.innerHTML = ""
    drinkInstructionsEl.innerHTML = ""

    var drinkHeading = document.createElement('a');
    drinkHeading.setAttribute("class", "font-weight-bold text-uppercase");
    drinkHeading.textContent = data.drinks[0].strDrink;
    drinkHeading.href = data.drinks[0].sourceUrl;
    drinkNameEl.appendChild(drinkHeading);
    

    var drinkImage = document.createElement('img')
    drinkImage.src = data.drinks[0].strDrinkThumb
    drinkImage.style.width = "200px";
    drinkImage.style.height = "200px";
    drinkImageEl.appendChild(drinkImage);

    var drinkInstructions = document.createElement('p');
    drinkInstructions.textContent = data.drinks[0].strInstructions;
    drinkInstructionsEl.appendChild(drinkInstructions);

};











































