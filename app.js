var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var body = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var staffRouter = require('./routes/staff');
var db = "./db/db"
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(body.urlencoded({ extended: true }));

//Session Handling
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({ secret: 'lmslms',
            resave: false,
            saveUninitialized: false,
            store: new MongoStore({ url: 'mongodb://localhost/lms' })
          }));

//Session Handling Ends

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/staff',staffRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('pages/error',{
  	staff : null
  });
});

module.exports = app;
