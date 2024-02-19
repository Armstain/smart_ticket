const sitbtn = document.getElementsByClassName("sit-btn");

let count = 0

for (const btn of sitbtn) {
    btn.addEventListener("click", function (event) {
        if (count >=  4) {  
            alert("You cannot select more than  4 seats.");
            return; 
        }
       count = count+ 1;
       setInnerText("sit-count", count);                                            
       const seatNumber = event.target.parentNode.parentNode.innerText;
        event.target.parentNode.childNodes[1].style = "background-color: #1DD100;";
        event.target.setA
        const selectedSeat = document.getElementById("selected-place-container");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = seatNumber;
        li.appendChild(p);
        selectedSeat.appendChild(li);
        const price = document.createTextNode("550");
        li.appendChild(price);

        const sitLeft =document.getElementById("sit-left").innerText

        const convertedSit = parseInt(sitLeft)
        document.getElementById("sit-left").innerText = convertedSit - 1


    
totalCost("total-cost", parseInt(price.textContent));

grandTotalCost();


    });
}


function totalCost(id, value){

    const totalCost = document.getElementById(id).innerText;
const convertedCost = parseInt(totalCost);
const sum = convertedCost + parseInt(value);
setInnerText(id, sum);            


}
// function grandTotalCost(id, value){

//     const totalCost = document.getElementById(id).innerText;
// const convertedCost = parseInt(totalCost);
// const sum = convertedCost + parseInt(value);
// setInnerText("grand-total", sum);

// }


function grandTotalCost(){
    const totalCost = document.getElementById("total-cost").innerText;
    const convertedCost = parseInt(totalCost);
    setInnerText("grand-total", convertedCost);
}

function applyCoupon() {
    const couponCode = document.getElementById("coupon-code").value;
    const totalCost = document.getElementById("total-cost").innerText;
    const convertedCost = parseInt(totalCost);

    const coupons = {
        'NEW15%':  0.15, 
        'COUPLE20':  0.20,};
    
    if (coupons.hasOwnProperty(couponCode)) {
        const discount = coupons[couponCode];
        setInnerText("grand-total", convertedCost - (convertedCost * discount));
        alert("Coupon applied!");
        
    } else{ 
        setInnerText("grand-total", convertedCost);
    }
}


function setInnerText(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

function setInnerText(id, value ) {
  document.getElementById(id).innerText = value;
}