/* var myVariable;
!!SOHA NE használjuk!! => helyette mindig let
"mindenre rászarik"
függvényen kívül is látható/elérhető, így összeakadhat mindenhol -> elavult technológia
*/

let myVariable;
console.log(myVariable);

myVariable = "newValue"
console.log(myVariable);

myVariable = 2
console.log(myVariable);

myVariable = true
console.log(myVariable);

let myVariable2 = "szöveg"

myVariable = myVariable2
console.log(myVariable);

let myVariable3 = myVariable+myVariable2
console.log(myVariable3);
