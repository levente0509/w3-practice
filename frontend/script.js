/* var myVariable;
!!SOHA NE használjuk!! => helyette mindig let
"mindenre rászarik"
függvényen kívül is látható/elérhető, így összeakadhat mindenhol -> elavult technológia
*/

// let myVariable;
// // console.log(myVariable);

// myVariable = "newValue"
// // console.log(myVariable);

// myVariable = 2
// // console.log(myVariable);

// myVariable = true
// // console.log(myVariable);

// let myVariable2 = "szöveg"

// myVariable = myVariable2
// // console.log(myVariable);

// let myVariable3 = myVariable+myVariable2
// // console.log(myVariable3);

// function sumVariables(variable1, variable2) {
// console.log(variable1 + variable2)
// }
// sumVariables(myVariable,myVariable2);
// sumVariables(8,6);
// sumVariables("word1","word2");

// function loadEvent() {
//     console.log("loaded");
//     let rootElement = document.getElementById("root");
//     rootElement.insertAdjacentHTML("beforeend", "Hello There");
// }

// window.addEventListener("click", loadEvent());


// CATS START HERE

function loadEvent() {
const newCatButton = document.querySelector(".add-cat");
newCatButton.addEventListener("click", function () {
const catContainer = document.querySelector(".cats");
const now = new Date ().getTime();
const newCat = `<img src="https://cataas.com/cat?random=${now}" alt=""/>`;
catContainer.insertAdjacentHTML("beforeend", newCat);
})
}

window.addEventListener("load", loadEvent);