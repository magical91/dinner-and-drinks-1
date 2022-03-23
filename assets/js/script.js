var dinnerNameEl = document.querySelector("#dinnerName");
var dinnerImageEl = document.querySelector("#dinnerImage");
var dinnerInstructionsEl = document.querySelector("#dinnerInstructions");
var dinnerBtnEl = document.querySelector("#dinnerBtn");
var dinnerFavEl = document.querySelector("#dinnerFav");



var dinnerCard = function() {
    // format the github api url
    var apiKey = "b596b6d1a386544c0aab56730e38ff084"
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
    var storageData = JSON.stringify(data.recipes[0]);
    localStorage.setItem("dinnerData", storageData);
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


var dinnerSave = function () {
    dinnerStorageData = localStorage.getItem("dinner-data");
    console.log(dinnerStorageData);
    //var dataID = storageData.id;
    //localStorage.setItem("dinner-data"+dataID, JSON.stringify(storageData));
};










































