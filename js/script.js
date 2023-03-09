const priceKm = 0.21;
const userKm = inputUserKm.value;

const priceJourney = userKm * priceKm;
console.log(priceJourney);

const sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click", function() {
    const inputUserKm = document.getElementById("user-km");
    const inputUserAge = document.getElementById("user-age");
    const userKm = inputUserKm.value; 
    const userAge = inputUserAge.value;
    console.log(userKm, userAge);
})


let discountUnder = 0; 
let discountOver = 0;
let reducedPrice = 0; 

if(userAge < 18) {
    discountUnder = 0.02;
    reducedPrice = priceJourney - discountUnder; 
    console.log(reducedPrice);
} else if (userAge > 65) {
    discountOver = 0.4;
    reducedPrice = priceJourney - discountOver;
    console.log(reducedPrice);
} else {
    console.log(priceJourney);
}

