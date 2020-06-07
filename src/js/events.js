
// // let upcomingEventDiv = document.querySelector('.next-match-teams');
// let eventsSection = document.getElementById('events-second-section');
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

// // function loadUpcomingEvent() {
// //     let eventTemplate = `
// //                 <div class="card promoting-card">
// //                     <div class="card-body d-flex flex-row justify-content-around">
// //                         <div class="d-flex flex-column justify-content-between align-items-center">
// //                             <img src="/img/teams/${events[0].teamOne}.png" alt="${events[0].teamOne} LOGO">
// //                             <p class="text-center mb-0">${events[0].teamOne}</p>
// //                         </div>
// //                         <div class="card-title-date">

// //                             <h5 class="card-title font-weight-bold mb-2">Upcoming Match</h5>

// //                             <p class="card-text"><i class="far fa-calendar pr-2"></i>${events[0].date}</p>
// //                         </div>
// //                         <div class="d-flex flex-column justify-content-between align-items-center">
// //                             <img src="/img/teams/${events[0].teamTwo}.png" alt="${events[0].teamTwo} LOGO">
// //                             <p class="text-center mb-0">${events[0].teamTwo}</p>
// //                         </div>
// //                     </div>
// //                     <div class="stadium-pic-div">
// //                         <a href="/tickets">
// //                             <img class="img-responsive" src="/img/stadiums/${events[0].stadium}.jpg" alt="Stadium ${events[0].stadium}">
// //                         </a>
// //                     </div>
// //                     <div class="card-body pt-2">
// //                         <h6 class="text-center">
// //                            Stadium: <b>${events[0].stadium}</b>
// //                         </h6>
// //                         <div class="d-flex flex-row justify-content-between mt-3">
// //                             <div class="card-content">
// //                                 <p class="card-text">
// //                                     <i class="far fa-clock pr-2"></i>${events[0].hour}
// //                                 </p>
// //                                 <p class="card-text">
// //                                     <i class="fas fa-map-marker-alt pr-2"></i>${events[0].city}
// //                                 </p>
// //                             </div>
// //                             <div class="card-call-to-action w-50 d-flex flex-column justify-content-end">
// //                                 <a href="/tickets" class="btn btn-primary btn-md">GET YOUR TICKET</a>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>`;

// //     upcomingEventDiv.insertAdjacentHTML('beforeend', eventTemplate);
// // }

// // loadUpcomingEvent();

// function loadEvents() {
//     let eventsCounter = 0;

//     for (let i = eventsCounter; i <= eventsCounter + 3; i++) {
//         let eventTemplate = `
//         <div class="col-12 col-lg-4">
//                 <div class="card promoting-card">
//                     <div class="card-body d-flex flex-row justify-content-between">
//                         <div class="d-flex flex-column justify-content-between align-items-center w-25">
//                             <img src="/img/teams/${events[i].teamOne}.png" height="50px" width="50px" alt="${events[i].teamOne} LOGO">
//                             <p class="text-center mb-0">${events[i].teamOne}</p>
//                         </div>
//                         <div class="px-2 text-center">

//                             <h6 class="card-title font-weight-bold mb-2">Football Match</h6>

//                             <p class="card-text"><i class="far fa-calendar pr-2"></i>${events[i].date}</p>
//                         </div>
//                         <div class="d-flex flex-column justify-content-between align-items-center w-25">
//                             <img src="/img/teams/${events[i].teamTwo}.png" height="50px" width="50px" alt="${events[i].teamTwo} LOGO">
//                             <p class="text-center mb-0">${events[i].teamTwo}</p>
//                         </div>
//                     </div>
//                     <div>
//                         <a href="/tickets">
//                             <img class="card-img-top" src="/img/stadiums/${events[i].stadium}.jpg" alt="Stadium ${events[i].stadium}">
//                         </a>
//                     </div>
//                     <div class="card-body pt-2">
//                         <p class="text-center">
//                            Stadium: <b>${events[i].stadium}</b>
//                         </p>
//                         <div class="d-flex flex-row justify-content-between mt-3">
//                             <div class="card-content">
//                                 <p class="card-text">
//                                     <i class="far fa-clock pr-2"></i>${events[i].hour}
//                                 </p>
//                                 <p class="card-text">
//                                     <i class="fas fa-map-marker-alt pr-2"></i>${events[i].city}
//                                 </p>
//                             </div>
//                             <div class="card-call-to-action w-50 d-flex flex-column justify-content-end">
//                                 <a href="/tickets" class="btn btn-primary btn-sm">GET YOUR TICKET</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>`;

//         if (i % 3 === 0 && i !== 0) {
//             eventsSection.insertAdjacentHTML('beforeend', `<div class="container main-borders-top mt-0 pt-0"></div>`);
//             eventsSection.insertAdjacentHTML('beforeend', eventTemplate);
//         } else {
//             eventsSection.insertAdjacentHTML('beforeend', eventTemplate);
//         }
//         console.log(eventsCounter);
//         eventsCounter++;
//     }
// }

// loadEvents();


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
    // console.log('working');
});

function calcTicketsPrice() {
    let event = document.querySelector('#events-multi-select option:checked').value;
    let ticketQuantity = document.querySelector('#tickets-quantity option:checked').value;
    let calculatedPrice = document.getElementById('calculated-price');

    let eventPrice = parseFloat(event.substring(1, 6));
    let ticketQuantityNum = parseInt(ticketQuantity);

    calculatedPrice.value = `$${(ticketQuantityNum * eventPrice).toFixed(2)}`;
}

// let eventDropdownItem = document.querySelectorAll('.event-dropdown-item');


// eventDropdownItem.forEach(item => {
//     let stdName = item.innerText;

//     let stadiumObj = stadiums.find(item => {
//         return item.stadium == stdName;
//     });


//     item.addEventListener('click', () => {
//         stadiumName.textContent = stadiumObj.stadium;
//         stadiumCity.textContent = stadiumObj.city;
//         stadiumCapacity.textContent = stadiumObj.capacity;
//         stadiumYearOpened.textContent = stadiumObj.yearOpened;
//         stadiumHomeTeam.textContent = stadiumObj.homeTeam;

//         stadiumImageDiv.innerHTML = `<img class="stadium-image img-fluid" src="/img/stadiums/${stadiumObj.stadium}.jpg" alt="${stadiumObj.stadium} Stadium">`;
//     })
// })
//Finished Events Dropdown Related Functions