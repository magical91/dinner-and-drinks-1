var archive = [];

function allStorage () {
    for (var i = 0; i<localStorage.length; i++) {
        archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    };
    console.log(archive);

};

console.log(archive);
allStorage();