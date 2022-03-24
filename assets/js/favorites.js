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
            gitEl.setAttribute("id","fav"+[i]);
            favCardEl.setAttribute("class","card col-5 m-2");

            var cardTitleEl = document.createElement("h5");
                favCardEl.appendChild(cardTitleEl);
                cardTitleEl.setAttribute("class", "card-header");
                cardTitleEl.innerText(archive[i].title);

            var cardBodyEl = document.createElement("div");
                favCardEl.appendChild(cardBodyEl);
                cardBodyEl.setAttribute("class","card-body");

                var cardImgEl = document.createElement("img");
                    favSectionEl.appendChild(cardImgEl);    
                    
                var cardTextEl = document.createElement("p");
                    favSectionEl.appendChild(cardTextEl);
                    fav

                var cardDeleteEl = document.createElement("a");
                    favSectionEl.appendChild(cardDeleteEl);
                    cardDeleteEl.setAttribute("class","btn btn-primary");
                    cardDeleteEl.innerText("Unfavorite :(")

    };
};

console.log(archive);
allStorage();