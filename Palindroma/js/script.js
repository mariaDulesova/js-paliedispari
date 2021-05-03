// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Soluzione 1
function invertireParola(parola){
    var parolaInvertita = "";    
    for (var i = parola.length - 1; i >= 0; i--){        
          parolaInvertita += parola[i];
    }    
    return parolaInvertita;
}

var parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);
console.log(invertireParola(parolaUtente));

if (parolaUtente == invertireParola(parolaUtente)){
    console.log("La parola inserita e' palindroma");
} else {
    console.log("La parola non e' palindroma");
}

// Soluzione 2
function palindroma (parola) {
    return parola == parola.split("").reverse().join("");
}

var parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);
console.log(palindroma(parolaUtente));

//Funzione SPLIT separa le lettere di una parola trafromando la variabile in un array:
// var parolaUtenteArray = parolaUtente.split(""); //virgolette sono importanti!
// console.log(parolaUtenteArray);

//Funzione REVERSE puo' essere applicata solo alle variabili array. Inverte l'ordine delle variabili
// var parolaUtenteArrayInvertita = parolaUtenteArray.reverse();
// console.log(parolaUtenteArrayInvertita);

//Funzione JOIN unisce gli elementi di un array in una stringa
// var parolaUtenteInvertita = parolaUtenteArrayInvertita.join(""); //virgolette sono importanti!
// console.log(parolaUtenteInvertita);

