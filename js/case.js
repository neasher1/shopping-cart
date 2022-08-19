// function updateCaseNumber(isIncrease) {
//     const previousCaseInputField = document.getElementById('case-input-field');
//     const previousCaseInputFieldString = previousCaseInputField.value;
//     const previousCaseInputFieldNumber = parseInt(previousCaseInputFieldString);

//     let newCaseInputFieldValue;
//     if (isIncrease === true) {
//         newCaseInputFieldValue = previousCaseInputFieldNumber + 1;
//     }
//     else {
//         newCaseInputFieldValue = previousCaseInputFieldNumber - 1;
//     }
//     previousCaseInputField.value = newCaseInputFieldValue;
//     return newCaseInputFieldValue;
// }

// function updateCasePrice(newCaseInputFieldValue) {
//     const caseTotalPrice = newCaseInputFieldValue * 59;
//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerText = caseTotalPrice;
// }

// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const newCaseInputFieldValue = updateCaseNumber(true);
//     updateCasePrice(newCaseInputFieldValue);
// });

// document.getElementById('btn-case-minus').addEventListener('click', function () {
//     const newCaseInputFieldValue = updateCaseNumber(false);
//     updateCasePrice(newCaseInputFieldValue);
// });

//simplified way using same functions
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseInputFieldValue = updateCaseNumber(true, 'case-input-field');
    updateCasePrice(newCaseInputFieldValue);
    calculateSubTotal()
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseInputFieldValue = updateCaseNumber(false, 'case-input-field');
    updateCasePrice(newCaseInputFieldValue);
    calculateSubTotal()
});