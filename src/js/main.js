
let stadiumsDropMenu = document.querySelector('.stadium-dropdown-div .stadiums-dropdown-menu')
let stadiumList = document.querySelector('.stadium-list');

let stadiumName = document.querySelector('.stadium-name');
let stadiumCity = document.querySelector('.stadium-city');
let stadiumCapacity = document.querySelector('.stadium-capacity');
let stadiumYearOpened = document.querySelector('.stadium-year-opened');
let stadiumHomeTeam = document.querySelector('.stadium-home-team');
let stadiumImageDiv = document.querySelector('.stadium-image-div');

// Loading Stadiums JSON
const stadiums = (() => {
    let json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../util/stadiums.json',
        'dataType': 'json',
        'success': data => {
            json = data;
        }
    });
    return json;
})();


stadiums.forEach(stadium => {
    stadiumList.innerHTML += `<li>
                                <a class="stadium-item" href="#${stadium.stadium}">${stadium.stadium}</a>
                            </li>`
    stadiumsDropMenu.innerHTML += `<a class="stadium-item dropdown-item" href="#${stadium.stadium}">${stadium.stadium}</a>`

})

let stadiumItems = document.querySelectorAll('.stadium-item');

// console.log(stadiumItems[2]);

stadiumItems.forEach(item => {
    let stdName = item.innerText;

    let stadiumObj = stadiums.find(item => {
        return item.stadium == stdName;
    });

    // console.log(stadiumObj);

    item.addEventListener('click', () => {
        stadiumName.textContent = stadiumObj.stadium;
        stadiumCity.textContent = stadiumObj.city;
        stadiumCapacity.textContent = stadiumObj.capacity;
        stadiumYearOpened.textContent = stadiumObj.stadiumYearOpened;
        stadiumImageDiv.innerHTML = `<img class="stadium-image" src="/img/${stadiumObj.image}.jpg" alt="${stadiumObj.name} Stadium">`;
    })
})