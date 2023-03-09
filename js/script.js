const sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click", function() {
    const inputUserKm = document.getElementById("user-km");
    const inputUserAge = document.getElementById("user-age");
    const inputUserName = document.getElementById("user-name");
    const userKm = inputUserKm.value; 
    const userAge = inputUserAge.value;
    const userName = inputUserName.value; 
    const nTreno = document.getElementById("n-card");
    nTreno.innerHTML = Math.floor(Math.random() * 99999) + 10000;
    console.log(userKm, userAge, userName);

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
        finalPrice = finalPrice.toFixed(2);
        console.log(finalPrice);
    } else if (userAge > 65) {
        discountOver = 0.4;
        reducedPrice = priceJourney * discountOver;
        finalPrice = priceJourney - reducedPrice;
        finalPrice = finalPrice.toFixed(2);
        console.log(reducedPrice);
    } else {
        console.log(priceJourney);
    }

    document.getElementById('price').innerHTML = `${finalPrice}`;
    document.getElementById('price').innerHTML = `${priceJourney}`;

    inputUserKm.value = "";
    inputUserAge.value = "";
    inputUserName.value = "";

    
    document.getElementById('card-name').innerHTML = `${userName}`;
    document.getElementById('price-card').innerHTML = `${finalPrice}`;
    document.getElementById('price-card').innerHTML = `${priceJourney}`;
    document.getElementById('discount-card').innerHTML = `${discountOver}`;
    document.getElementById('discount-card').innerHTML = `${discountUnder}`;
})



