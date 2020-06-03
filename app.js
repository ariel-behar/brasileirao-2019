const express = require('express');
const hbs = require('hbs');
const path = require('path');
const livereload = require('livereload'); // Live Reload
const connectLiveReload = require('connect-livereload');// Live Reload

const indexRouter = require('./routes/index');
const badRequestRouter = require('./routes/404');



const app = express();
const PORT = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

//Live Reload ----------------------------------
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirPath);
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});

app.use(connectLiveReload());
//Finish Live Reload ----------------------------

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath));

app.use('/', indexRouter);
app.use('/*', badRequestRouter)
// router.initialize(app);




app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`);
});

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
