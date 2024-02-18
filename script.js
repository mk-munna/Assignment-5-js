
let countSeat = 0;
let leftSeatcount = 40;
let totalPrice = 0;
let grandTotalPrice = 0;

const seats = document.querySelectorAll('.seat');
for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', function (event) {

        const selectedSeatName = event.target.innerText;
        countSeat++;
        leftSeatcount--;
        totalPrice += 550;
        grandTotalPrice += 550;
        if (countSeat > 4) {
            alert('You can select only 4 seat');
            return;
        } 
        if (countSeat === 4) {
            document.getElementById('coupon-input').removeAttribute('disabled');
            document.getElementById('coupon-btn').removeAttribute('disabled');
            document.getElementById('coupon-btn').style.backgroundColor = '#1DD100';

        }
        if (countSeat > 0 && element('input-phone').value.length > 0) {
            element('next-btn').removeAttribute('disabled');
            element('next-btn').style.backgroundColor = '#1DD100'
            offTooltip()
        }
        
        // add style to seat button 
        event.target.setAttribute('class', 'bg-[#1DD100] border-none rounded-xl text-white w-[56px] lg:w-[100px]  h-[50px]  cursor-auto')
        const seatNameDiv = document.getElementById('seat-name');
        const newP = document.createElement('p');
        newP.innerText = selectedSeatName;
        seatNameDiv.appendChild(newP);
        const categoryDiv = document.getElementById('category');
        const newCategory = document.createElement('div');
        newCategory.innerHTML = `<p>Economy</p>
                                <p>550 </p>
                                <p></p>`
        newCategory.setAttribute('class', 'flex gap-[53px]  lg:gap-[100px] mb-4')
        categoryDiv.appendChild(newCategory)
        setElementValueById('leftSeat', leftSeatcount);
        setElementValueById('seat-count', countSeat);
        setElementValueById('total-price', totalPrice);
        setElementValueById('grand-total', grandTotalPrice);

        // next button 
        
    })
}

document.getElementById('coupon-btn').addEventListener('click', function () {
            const coupon = document.getElementById('coupon-input').value
            if (coupon === 'NEW15') {
                const grandTotal = getElementValueById('grand-total')
                setElementValueById('grand-total', getDiscountedTotalValue(grandTotal, 15));
                setElementValueById('discount-amount', getDiscountAmount(grandTotal, 15));
                element('coupon-div').setAttribute('hidden', 'true');
                element('discount-div').removeAttribute('class', 'hidden');

            }
        else if (coupon === 'Couple 20') {
                const grandTotal = getElementValueById('grand-total')
                setElementValueById('grand-total', getDiscountedTotalValue(grandTotal, 20));
                setElementValueById('discount-amount', getDiscountAmount(grandTotal, 20));
                element('coupon-div').setAttribute('hidden', 'true');
                element('discount-div').removeAttribute('class', 'hidden');

    }
    else {
        alert('Please input a valid discount code');
        return;
    }
})


// more validation for "next button"

element('input-phone').addEventListener('keyup', function () {
    if (countSeat > 0 && element('input-phone').value.length > 0) {
        element('next-btn').removeAttribute('disabled');
        element('next-btn').style.backgroundColor = '#1DD100'
        offTooltip()
    } else {
        element('next-btn').setAttribute('disabled', true);
        element('next-btn').style.backgroundColor = '#0499046e'
        onTooltip()
        
    }

})
element('input-phone').addEventListener('mousout', function () {
    if (element('input-phone').value.length === 0) {
        element('next-btn').setAttribute('disabled', true);
        element('next-btn').style.backgroundColor = '#0499046e'
        onTooltip()
    } 

})

onTooltip()
