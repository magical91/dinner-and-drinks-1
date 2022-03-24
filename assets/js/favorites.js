var drinkInfo = [{"id": "0", "name":"drink", "sum":"here are some words", "img":"http://"}, 
                {"id": "1", "name":"otherDrink", "sum":"here are some different words", "img":"https://"}];

var dinnerInfo = [{"id": "0", "name":"dinner", "sum":"here are some words", "img":"http://"}, 
                {"id": "1", "name":"otherDinner", "sum":"here are some different words", "img":"https://"}];

var dummyDataPush = function() {
    localStorage.setItem("drinkInfo", JSON.stringify(drinkInfo));
    localStorage.setItem("dinnerInfo", JSON.stringify(drinkInfo));
};

dummyDataPush();

console.log(JSON.parse(localStorage.getItem("drinkInfo")));

array.forEach(element => {
    
});