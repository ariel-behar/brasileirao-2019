//Teams related DOM Elements
let teamsInfoLogos = document.querySelector('.teams-info-logos');

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


teams.forEach(team => {
    teamsInfoLogos.innerHTML += `
    <div class="col-3 col-lg-3 team-column">
    <div class="card team-card hoverable">
        <img class="card-img-top" src="/img/teams/${team.team}.png" alt="${team.team} LOGO">
        <div class="card-body">
            <p class="card-text">${team.team}</p>
        </div>
        </div>
    </div>
`
})