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

    let PessengerPhone = element('input-phone').value;
    if (/^(?:\880|0)(?:1[3-9]\d{8})$/.test(PessengerPhone)) {
        window.location.href = 'success.html';
        setElementValueById('result-name', PessengerName);
        setElementValueById('result-phone', PessengerPhone);
        setElementValueById('result-email', PessengerEmail);
        
    } else {
            alert('Please enter a valid Bangladeshi phone number 🥺');
            
        }

    return;
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




