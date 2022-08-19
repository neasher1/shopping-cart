function updateCaseNumber(isIncrease, elementId) {
    const previousCaseInputField = document.getElementById(elementId);
    const previousCaseInputFieldString = previousCaseInputField.value;
    const previousCaseInputFieldNumber = parseInt(previousCaseInputFieldString);

    let newCaseInputFieldValue;
    if (isIncrease === true) {
        newCaseInputFieldValue = previousCaseInputFieldNumber + 1;
    }
    else {
        newCaseInputFieldValue = previousCaseInputFieldNumber - 1;
    }
    previousCaseInputField.value = newCaseInputFieldValue;
    return newCaseInputFieldValue;
}

function updateCasePrice(newCaseInputFieldValue) {
    const caseTotalPrice = newCaseInputFieldValue * 59;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseTotalPrice;
}
function updatePhnPrice(newPhnNumber) {
    const phnTotalPrice = newPhnNumber * 1219;
    const phnTotalElement = document.getElementById('phone-total');
    phnTotalElement.innerText = phnTotalPrice;
}


//get total price from phone and case
function getTextElementValueById(elementId) {


    const phnTotalElemet = document.getElementById(elementId);
    const currentPhnTotalString = phnTotalElemet.innerText;
    const currentPhnTotal = parseInt(currentPhnTotalString);
    return currentPhnTotal;
}

//calculate all total price using functions
function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

//caculate total
function calculateSubTotal() {

    const currentPhnTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    //calculate sub total
    const subTotal = currentPhnTotal + currentCaseTotal;
    setTextElementValueById('sub-total', subTotal);

    //caculate tax
    const taxAmountString = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-total', taxAmount);

    //final amount
    const finalAmount = subTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}