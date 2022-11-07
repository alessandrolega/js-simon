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

document.getElementById('numbersRandom').innerHTML = `${numbersArray}`; 


function hideElements(){
        document.getElementById('numbersRandom').innerHTML = ''; 
}

function timePrompt(){ 
    for(let y = 0; y < 5; y++){
        let userPrompt = parseInt(prompt('Type Numbers!'))
        numbersUser.push(userPrompt)    
    }
    document.getElementById('newNum').innerHTML = `${numbersUser}`;
    
    check();
}

setTimeout( function(){ 
    hideElements();
}, 3000 );

setTimeout( function(){ 
    timePrompt(); 
}, 3100 );

function check(){ 
    for (let x = 0; x < numbersArray.length; x++){ 

        for (let k = 0; k < numbersUser.length; k++){

         if(numbersArray[x] == numbersUser[k]){ 

            numbersCorrect.push(numbersUser[k]); 
            

         }

      }

    }
console.log(numbersCorrect);
    let controlCorrect = numbersCorrect.length; 

    correctNum.innerHTML = `Hai inserito ${controlCorrect} numeri corretti su 5: ${numbersCorrect}` 

}



console.log(numbersArray)
console.log(numbersUser)

