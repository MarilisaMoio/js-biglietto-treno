//fornire il prezzo del biglietto sulla base di kilometraggio ed età, arrotondato a 2 cifre dopo la virgola
//0.21 e/km
//20% di sconto per i minorenni
//40% di sconto per gli over 65

//raccolta dei dati
const travelKm = parseInt(prompt("Inserire qui i kilometri da percorrere"));

const userAge = parseInt(prompt("Inserire qui la propria età"));

//prezzo base del biglietto
const fare = 0.21;

const basePrice = fare * travelKm;

//definire l'eventuale scontistica
const teenFare = 20;

const elderlyFare = 40;

//definire il prezzo finale e l'eventuale messaggio
let finalPrice = basePrice;

let discountMessage;

if (userAge < 18) {
    finalPrice = basePrice / 100 * (100 - teenFare);
    discountMessage = `Complimenti, hai ricevuto uno sconto del ${teenFare}%!`;
} else if (userAge > 65){
    finalPrice = basePrice / 100 * (100 - elderlyFare);
    discountMessage = `Complimenti, hai ricevuto uno sconto del ${elderlyFare}%!`;
}

//output
document.getElementById("price-shown").innerHTML = finalPrice.toFixed(2);

if (discountMessage != undefined){
    document.getElementById("discount-message").innerHTML = discountMessage;
}


