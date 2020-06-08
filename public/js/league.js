let stadiumsDropMenu = document.querySelector(".stadium-dropdown-div .stadiums-dropdown-menu"), stadiumList = document.querySelector(".stadium-list"), stadiumName = document.querySelector(".stadium-name"), stadiumCity = document.querySelector(".stadium-city"), stadiumCapacity = document.querySelector(".stadium-capacity"), stadiumYearOpened = document.querySelector(".stadium-year-opened"), stadiumHomeTeam = document.querySelector(".stadium-home-team"), stadiumImageDiv = document.querySelector(".stadium-image-div"); const stadiums = (() => { let t = null; return $.ajax({ async: !1, global: !1, url: "../util/stadiums.json", dataType: "json", success: e => { t = e } }), t })(); stadiums.forEach(t => { stadiumList.innerHTML += `<li>\n                                <a class="stadium-item" href="#${t.stadium}">${t.stadium}</a>\n                            </li>`, stadiumsDropMenu.innerHTML += `<a class="stadium-item dropdown-item" href="#${t.stadium}">${t.stadium}</a>` }); let stadiumItems = document.querySelectorAll(".stadium-item"); stadiumItems.forEach(t => { let e = t.innerText, a = stadiums.find(t => t.stadium == e); t.addEventListener("click", () => { stadiumName.textContent = a.stadium, stadiumCity.textContent = a.city, stadiumCapacity.textContent = a.capacity, stadiumYearOpened.textContent = a.yearOpened, stadiumHomeTeam.textContent = a.homeTeam, stadiumImageDiv.innerHTML = `<img class="stadium-image img-fluid" src="/img/stadiums/${a.stadium}.jpg" alt="${a.stadium} Stadium">` }) });