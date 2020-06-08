let upcomingEventDiv = document.querySelector('.next-match-teams');
let teamsIndexColumn = document.querySelector('#teams-column .teams-list');

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

// Loading Teams JSON
const teams = (() => {
    let json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../util/teams.json',
        'dataType': 'json',
        'success': data => {
            json = data;
        }
    });
    return json;
})();


function loadUpcomingEvent() {
    let eventTemplate = `
                <div class="card promoting-card">
                    <div class="card-body d-flex flex-row justify-content-around">
                        <div class="d-flex flex-column justify-content-between align-items-center">
                            <img src="/img/teams/${events[0].teamOne}.png" alt="${events[0].teamOne} LOGO">
                            <p class="text-center mb-0">${events[0].teamOne}</p>
                        </div>
                        <div class="card-title-date">

                            <h5 class="card-title font-weight-bold mb-2">Upcoming Match</h5>

                            <p class="card-text"><i class="far fa-calendar pr-2"></i>${events[0].date}</p>
                        </div>
                        <div class="d-flex flex-column justify-content-between align-items-center">
                            <img src="/img/teams/${events[0].teamTwo}.png" alt="${events[0].teamTwo} LOGO">
                            <p class="text-center mb-0">${events[0].teamTwo}</p>
                        </div>
                    </div>
                    <div class="stadium-pic-div">
                        <a href="/tickets">
                            <img class="img-responsive" src="/img/stadiums/${events[0].stadium}.jpg" alt="Stadium ${events[0].stadium}">
                        </a>
                    </div>
                    <div class="card-body pt-2">
                        <h6 class="text-center">
                           Stadium: <b>${events[0].stadium}</b>
                        </h6>
                        <div class="d-flex flex-row justify-content-between mt-3">
                            <div class="card-content">
                                <p class="card-text">
                                    <i class="far fa-clock pr-2"></i>${events[0].hour}
                                </p>
                                <p class="card-text">
                                    <i class="fas fa-map-marker-alt pr-2"></i>${events[0].city}
                                </p>
                            </div>
                            <div class="card-call-to-action w-50 d-flex flex-column justify-content-end">
                                <a href="/tickets" class="btn btn-primary btn-lg">GET YOUR TICKET</a>
                            </div>
                        </div>
                    </div>
                </div>`;

    upcomingEventDiv.insertAdjacentHTML('beforeend', eventTemplate);
}

loadUpcomingEvent();


for (let i = 0; i < 10; i++) {
    teamsIndexColumn.innerHTML += `<li><img src="/img/teams/${teams[i].team}.png" alt="${teams[i].team} LOGO"><span class="team-name">${teams[i].team}</span> <span class="team-points">${teams[i].ranking}</span></li>`
}




