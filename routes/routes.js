const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        jsFile: 'main',
        title: 'HOME'
    });
});

router.get('/league', (req, res, next) => {
    res.render('league', {
        jsFile: 'league',
        title: 'LEAGUE',
        pageClass: 'league-page-class',
        footerTitleCTA: '',
        footerCTA: ''
    })
})

router.get('/teams', (req, res, next) => {
    res.render('teams', {
        jsFile: 'teams',
        title: 'TEAMS',
        pageClass: 'teams-page-class'
    })
})

router.get('/fanclub', (req, res, next) => {
    res.render('fanclub', {
        jsFile: 'fanclub',
        title: 'FAN CLUB',
        pageClass: 'fanclub-page-class'
    })
})

router.get('/events', (req, res, next) => {
    res.render('events', {
        jsFile: 'events',
        title: 'EVENTS',
        pageClass: 'events-page-class'
    })
})

router.get('/tickets', (req, res, next) => {
    res.render('tickets', {
        jsFile: 'tickets',
        title: 'TICKETS',
        pageClass: 'tickets-page-class',
    })
})



router.get('/*', (req, res, next) => {
    res.render('404', {
        title: '404',
        bodyId: 'body-404'
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
