let eventsSection = document.getElementById("events-second-section"); const events = (() => { let e = null; return $.ajax({ async: !1, global: !1, url: "../util/events.json", dataType: "json", success: t => { e = t } }), e })(); function loadEvents() { for (let e = 0; e < events.length; e++) { let t = `\n        <div class="col-12 col-lg-4">\n                <div class="card promoting-card">\n                    <div class="card-body d-flex flex-row justify-content-between">\n                        <div class="d-flex flex-column justify-content-between align-items-center w-25">\n                            <img src="/img/teams/${events[e].teamOne}.png" height="50px" width="50px" alt="${events[e].teamOne} LOGO">\n                            <p class="text-center mb-0">${events[e].teamOne}</p>\n                        </div>\n                        <div class="px-2 text-center">\n\n                            <h6 class="card-title font-weight-bold mb-2">Football Match</h6>\n\n                            <p class="card-text"><i class="far fa-calendar pr-2"></i>${events[e].date}</p>\n                        </div>\n                        <div class="d-flex flex-column justify-content-between align-items-center w-25">\n                            <img src="/img/teams/${events[e].teamTwo}.png" height="50px" width="50px" alt="${events[e].teamTwo} LOGO">\n                            <p class="text-center mb-0">${events[e].teamTwo}</p>\n                        </div>\n                    </div>\n                    <div>\n                        <a href="/tickets">\n                            <img class="card-img-top" src="/img/stadiums/${events[e].stadium}.jpg" alt="Stadium ${events[e].stadium}">\n                        </a>\n                    </div>\n                    <div class="card-body pt-2">\n                        <p class="text-center">\n                           Stadium: <b>${events[e].stadium}</b>\n                        </p>\n                        <div class="d-flex flex-row justify-content-between mt-3">\n                            <div class="card-content">\n                                <p class="card-text">\n                                    <i class="far fa-clock pr-2"></i>${events[e].hour}\n                                </p>\n                                <p class="card-text">\n                                    <i class="fas fa-map-marker-alt pr-2"></i>${events[e].city}\n                                </p>\n                            </div>\n                            <div class="card-call-to-action w-50 d-flex flex-column align-items-end justify-content-end">\n                                <a href="/tickets" class="btn btn-primary btn-md">GET YOUR TICKET</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>`; e % 3 == 0 && 0 !== e ? (eventsSection.insertAdjacentHTML("beforeend", '<div class="container main-borders-top mt-0 pt-0"></div>'), eventsSection.insertAdjacentHTML("beforeend", t)) : eventsSection.insertAdjacentHTML("beforeend", t) } } loadEvents();