function setElementValueById(elementId, value) {
    document.getElementById(elementId).innerText = value;
}


function getElementValueById(elementId) {
    return document.getElementById(elementId).innerText;
}

function element(elementId) {
    return document.getElementById(elementId);
}
function getDiscountedTotalValue(inputValue, discountRate) {
    discountRate = discountRate / 100;
    return inputValue - inputValue * discountRate;
}
function getDiscountAmount(inputValue, discountRate) {
    discountRate = discountRate / 100;
    return inputValue * discountRate;
}







function alertForPhoneNumber() {
    let phoneNumber = '';
    phoneNumber += (element('input-phone').value)
    
    if (phoneNumber.includes('01') === false || phoneNumber.length <=10) {
        alert('Please input a valid Bangladeshi phone number');
        return;
    }
}



// tooltip

function onTooltip() {
    
    document.getElementById('next-btn').addEventListener('mouseover', function tooltipOn() {

            document.getElementById('tooltip').style.visibility = 'visible';
        });
    document.getElementById('next-btn').addEventListener('mouseout', function tooltipOff() {
        document.getElementById('tooltip').style.visibility = 'hidden';
    });
    return
}


function offTooltip() {
    document.getElementById('tooltip').style.display = 'none';
}
