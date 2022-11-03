// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let numbersArray = []; 
let numbersUser = []; 
let numbersCorrect = []; 
let correctNum = document.getElementById('correctNum');

for(let i = 0; i < 5; i++){ 
    
    function randomNumber(){

    let randomNumber = Math.floor(Math.random(1) * 100);
    return randomNumber;

    }

    let casualNumber = randomNumber();

    numbersArray.push(casualNumber)
}

console.log(numbersArray)

