// function updatePhnNumber(isIncrease) {
//     const previousPhnInputField = document.getElementById('phone-input-field');
//     const previousPhnInputFieldString = previousPhnInputField.value;
//     const previousPhnInputFieldValue = parseInt(previousPhnInputFieldString);

//     let newPhnNumber;
//     if (isIncrease === true) {
//         newPhnNumber = previousPhnInputFieldValue + 1;
//     }
//     else {
//         newPhnNumber = previousPhnInputFieldValue - 1;
//     }
//     previousPhnInputField.value = newPhnNumber;
//     return newPhnNumber;
// }
// function updatePhnPrice(newPhnNumber) {
//     const phnTotalPrice = newPhnNumber * 1219;
//     const phnTotalElement = document.getElementById('phone-total');
//     phnTotalElement.innerText = phnTotalPrice;
// }
// document.getElementById('btn-phone-plus').addEventListener('click', function () {

//     const newPhnNumber = updatePhnNumber(true);
//     updatePhnPrice(newPhnNumber);


// });
// document.getElementById('btn-phone-minus').addEventListener('click', function () {

//     const newPhnNumber = updatePhnNumber(false);
//     updatePhnPrice(newPhnNumber);

// });


//simplified way using same functions
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhnNumber = updateCaseNumber(true, 'phone-input-field');
    updatePhnPrice(newPhnNumber);
    calculateSubTotal();
});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhnNumber = updateCaseNumber(false, 'phone-input-field');
    updatePhnPrice(newPhnNumber);
    calculateSubTotal();
});