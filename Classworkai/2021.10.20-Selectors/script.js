// Sukurkite HTML dokumentą su lentele (table) ir forma (form). Dokumentu turi būti žemiau aptartos žymos (angl. tags) ir jų atributai.

// Suraskite ir konsolėje atvaizduokite:

// Lentelę su id = "age-table".
	
// Pirmasis <td> toje lentelėje (su id “age”).
	
// Visus <label> elementus lentelės viduje (jų turėtų būti 3).
	
// Pirmasis įvestį (<input>) į formą.
	
// Paskutinę įvestį (<input>) į formą.

let tableAge = document.querySelector('#age-table');
console.log(tableAge);

let tableTd = document.querySelector('#age');
console.log(tableTd);


let allLabel = document.querySelectorAll('label');
allLabel.forEach(i => {
    console.log(i);
 }); 
 
 let firstInput = document.querySelector('input');
 console.log(firstInput);

 let lastInput = document.querySelector('input:last-of-type');
 console.log(lastInput);
