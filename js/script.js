const sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click", function() {
    const inputUserKm = document.getElementById("user-km");
    const inputUserAge = document.getElementById("user-age");
    const userKm = inputUserKm.value; 
    const userAge = inputUserAge.value;
    console.log(userKm, userAge);

    const priceKm = 0.21;

    const priceJourney = userKm * priceKm;
    console.log(priceJourney);

    let discountUnder = 0; 
    let discountOver = 0;
    let reducedPrice = 0; 
    let finalPrice;

    if(userAge < 18) {
        discountUnder = 0.2;
        reducedPrice = priceJourney * discountUnder;
        finalPrice = priceJourney - reducedPrice;
        console.log(finalPrice);
    } else if (userAge > 65) {
        discountOver = 0.4;
        reducedPrice = priceJourney - discountOver;
        console.log(reducedPrice);
    } else {
        console.log(priceJourney);
    }

    inputUserKm.value = "";
    inputUserAge.value = "";
})



