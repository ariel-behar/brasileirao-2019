let eventsSelect = document.querySelector('#events-multi-select');

// Loading Events JSON
const events = (() => {
    let json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../util/events.json',
        'dataType': 'json',
        'success': data => {
            json = data;
        }
    });
    return json;
})();


//Events Dropdown related Functions
events.forEach(event => {
    eventsSelect.innerHTML += `<option class="event-dropdown-item">$${event.price} - ${event.date} - ${event.teamOne} VS ${event.teamTwo} (Football Match)</option>`

})

//Tickets Form handling
let form = document.getElementById('tickets-form');

form.addEventListener('click', form => {
    form.preventDefault();
    // console.log('working');
});

form.addEventListener('submit', form => {
    form.preventDefault();
});

function calcTicketsPrice() {
    let event = document.querySelector('#events-multi-select option:checked').value;
    let ticketQuantity = document.querySelector('#tickets-quantity option:checked').value;
    let calculatedPrice = document.getElementById('calculated-price');

    let eventPrice = parseFloat(event.substring(1, 6));
    let ticketQuantityNum = parseInt(ticketQuantity);

    calculatedPrice.value = `$${(ticketQuantityNum * eventPrice).toFixed(2)}`;
}
//Finished Events Dropdown related Functions