// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Chiediamo all utente PARI o DISPARI:

var pariDispari = prompt("Scegli PARI o DISPARI");
console.log(pariDispari);

while (!isNaN(pariDispari) || (pariDispari != "pari") && (pariDispari != "dispari")) {
    var pariDispari = prompt("Scegli PARI o DISPARI");
}
console.log(pariDispari);


//Chiediamo all'utente di scegliere il numero tra 1 e 5:
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
while (numeroUtente<1 || numeroUtente > 5 || isNaN(numeroUtente)) {
    var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
}
console.log(numeroUtente);

//Creiamo una funzione che genera un numero random nell'intervallo MIN-MAX (in questo caso 1 e 5)
function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
var numeroComputer = getRandomNumber(1,5);
console.log(numeroComputer);

//Creiamo una funzione per verificare se la somma tra i due numero e' pari
function verificaNumero (num1, num2) {
    if((num1+num2)%2==0){
        return "pari";
    } else{
        return "dispari";
    }
}
var somma = verificaNumero(numeroUtente, numeroComputer);
console.log(somma);

//Dichiariamo il vincitore
if (somma == pariDispari) {
    console.log("Congratulazione! Hai vinto!");
    document.getElementById("messaggio").innerHTML = "Congratulazione! Hai vinto!";
} else {
    console.log("Hai perso! Riprova ancora!");
    document.getElementById("messaggio").innerHTML = "Hai perso! Riprova ancora!";
}

