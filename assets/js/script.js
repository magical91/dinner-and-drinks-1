var dinnerNameEl = document.querySelector("#dinnerName");
var dinnerImageEl = document.querySelector("#dinnerImage");
var dinnerInstructionsEl = document.querySelector("#dinnerInstructions");
var dinnerBtnEl = document.querySelector("#dinnerBtn");



var dinnerCard = function() {
    // format the github api url
    var apiKey = "b992d58c769a431bbb2cf392882f3967"
    var apiUrl = "https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=" + apiKey;
    

    // make a request to the url
    fetch(apiUrl)
    .then(function(response) {
    // request was successful
        if (response.ok) {
            response.json()
            .then(function(data) {
                console.log(data.id);
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

// var apiData = function (recipes) {
//     console.log(recipes);
// };

dinnerCard();











































