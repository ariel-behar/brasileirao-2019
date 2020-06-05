const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'HOME',
        team1: {
            name: 'Avaí FC',
            image: ''
        },
        team2: {
            name: 'SPFC',
            image: ''
        },
        event: {
            series: 'A',
            location: 'Estádio Cícero Pompeu de Toledo (Morumbi)',
            date: '28/09/2019',
            hour: '19:00'
        }
    });
});

router.get('/league', (req, res, next) => {
    res.render('league', {
        title: 'LEAGUE',
        headerID: 'league-page-id',
        pageSummary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit hic quia molestias debitis. Reprehenderit voluptatibus rem sint esse dicta perferendis corporis dolorum, ut a eligendi, quisquam tempore quos debitis doloremque.'
    })
})

router.get('/teams', (req, res, next) => {
    res.render('teams', {
        title: 'TEAMS',
        headerID: 'teams-page-id'
    })
})

router.get('/fanclub', (req, res, next) => {
    res.render('fanclub', {
        title: 'FAN CLUB',
        headerID: 'fanclub-page-id'
    })
})

router.get('/events', (req, res, next) => {
    res.render('events', {
        title: 'EVENTS',
        headerID: 'events-page-id'
    })
})

router.get('/tickets', (req, res, next) => {
    res.render('tickets', {
        title: 'GET TICKETS',
        headerID: 'tickets-page-id',
    })
})



router.get('/*', (req, res, next) => {
    res.render('404', {
        title: '404'
    })
})


module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
