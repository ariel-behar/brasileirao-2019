let eventsSection = document.getElementById('events-second-section');

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

function loadEvents() {

    for (let i = 0; i < events.length; i++) {
        let eventTemplate = `
        <div class="col-12 col-lg-4">
                <div class="card promoting-card">
                    <div class="card-body d-flex flex-row justify-content-between">
                        <div class="d-flex flex-column justify-content-between align-items-center w-25">
                            <img src="/img/teams/${events[i].teamOne}.png" height="50px" width="50px" alt="${events[i].teamOne} LOGO">
                            <p class="text-center mb-0">${events[i].teamOne}</p>
                        </div>
                        <div class="px-2 text-center">

                            <h6 class="card-title font-weight-bold mb-2">Football Match</h6>

                            <p class="card-text"><i class="far fa-calendar pr-2"></i>${events[i].date}</p>
                        </div>
                        <div class="d-flex flex-column justify-content-between align-items-center w-25">
                            <img src="/img/teams/${events[i].teamTwo}.png" height="50px" width="50px" alt="${events[i].teamTwo} LOGO">
                            <p class="text-center mb-0">${events[i].teamTwo}</p>
                        </div>
                    </div>
                    <div>
                        <a href="/tickets">
                            <img class="card-img-top" src="/img/stadiums/${events[i].stadium}.jpg" alt="Stadium ${events[i].stadium}">
                        </a>
                    </div>
                    <div class="card-body pt-2">
                        <p class="text-center">
                           Stadium: <b>${events[i].stadium}</b>
                        </p>
                        <div class="d-flex flex-row justify-content-between mt-3">
                            <div class="card-content">
                                <p class="card-text">
                                    <i class="far fa-clock pr-2"></i>${events[i].hour}
                                </p>
                                <p class="card-text">
                                    <i class="fas fa-map-marker-alt pr-2"></i>${events[i].city}
                                </p>
                            </div>
                            <div class="card-call-to-action w-50 d-flex flex-column align-items-end justify-content-end">
                                <a href="/tickets" class="btn btn-primary btn-md">GET YOUR TICKET</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        if (i % 3 === 0 && i !== 0) {
            eventsSection.insertAdjacentHTML('beforeend', `<div class="container main-borders-top mt-0 pt-0"></div>`);
            eventsSection.insertAdjacentHTML('beforeend', eventTemplate);
        } else {
            eventsSection.insertAdjacentHTML('beforeend', eventTemplate);
        }
    }
}

loadEvents();