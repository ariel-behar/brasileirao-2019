const express = require('express');
const router = express.Router();

router.get('/*', (req, res, next) => {
    res.render('404', {
        title: '404 | Brasileirao 2019'
    })
})

module.exports = router;