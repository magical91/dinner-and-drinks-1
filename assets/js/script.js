var getUserRepos = function() {
    // format the github api url
    var apiKey = "418dfdd00ed74c70b2324cdd2a245a64"
    var apiUrl = "https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=" + apiKey;
    ;

    // make a request to the url
    fetch(apiUrl)
    .then(function(response) {
    // request was successful
        if (response.ok) {
            response.json()
            .then(function(data) {
                console.log(data);
            });
        } else {
            alert('Error');
        }
    })
    .catch(function(error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()` method
        if (error) {
        alert("Unable to connect to GitHub");
        }
    });
};

getUserRepos();











































