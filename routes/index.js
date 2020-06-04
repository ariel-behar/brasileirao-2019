const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'HOME | Brasileirao 2019',
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

router.get('/teams', (req, res, next) => {
    res.render('teams')
})

router.get('/tickets', (req, res, next) => {
    res.render('tickets')
})


router.get('/*', (req, res, next) => {
    res.render('404', {
        title: '404 | Brasileirao 2019'
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
