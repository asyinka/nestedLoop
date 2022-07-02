let symbol = window.prompt("enter a symbol");
let row = prompt("Enter no rows")
row = Number(row);
let column = prompt("Enter no of columns")
column = Number(column);
for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= column; j++) {
        document.getElementById("draw").innerHTML += symbol;
    } 
    document.getElementById("draw").innerHTML += "<br>";
    
}



// let age;
// age = 14;
// age = Number(age);
// document.getElementById("submitButton").onclick = function(){
//     age = document.getElementById("ageInput").value;
//     if(age >= 65){
//         alert("You are a senior!");
//     }
//     else if(age >= 18) {
//         alert("You are an adult!");
//     }
//     else if (age < 0) {
//         alert("You are still raining in the heavens!");
//     }
//         alert("You are a child!");
//     }  

// document.getElementById("submitButton2").onclick = function(){
//     const myCheckBox = document.getElementById("subscribeBox");
//     const visaPayment = document.getElementById("visaInput");
//     const mastercardPayment = document.getElementById("mastercardInput");
//     const paypalPayment = document.getElementById("paypalInput");

//     if (myCheckBox.checked) {
//         alert("Kindly proceed to make payment to complete subscription process");
//     }
//     else{
//         alert("Kindly subscribe");
//     }
//     if (visaPayment.checked) {
//         alert("You have chosen to pay with Visa Card");
//     } 
//     else if (mastercardPayment.checked) {
//         alert("You have chosen to pay with Master Card")
//     }
//     else if (paypalPayment.checked) {
//         alert("You are paying with Paypal")
//     }
//     else {
//         alert("Please select a payment type")
//     }
// }









