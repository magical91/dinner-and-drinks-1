var archive = [];
var favSectionEl = document.querySelector("#favSection");

function allStorage () {
    for (var i = 0; i<localStorage.length; i++) {
        archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    };
    console.log(archive);
    for (var i = 0; i<localStorage.length; i++) {

        var favCardEl = document.createElement("div");
        favSectionEl.appendChild(favCardEl);
        
            var cardTitleEl = document.createElement("h5");
            favCardEl.appendChild(cardTitleEl);
            var cardBodyEl = document.createElement("div")
            favCardEl.appendChild(cardBodyEl);

                var favCardEl = document.createElement("img");
                favSectionEl.appendChild(cardBodyEl);               
                var favCardEl = document.createElement("p");
                favSectionEl.appendChild(cardBodyEl);
                var favCardEl = document.createElement("a");
                favSectionEl.appendChild(cardBodyEl);

    };
};

console.log(archive);
allStorage();