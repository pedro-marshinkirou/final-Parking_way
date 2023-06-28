var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var clienteRouter = require('./routes/cliente');
var funcioRouter = require('./routes/funcionario');
var validRouter = require('./routes/validacao');
var estacRouter = require('./routes/estacionamento');
var reservRouter = require('./routes/reserva');


var app = express();

require('dotenv').config({path: __dirname + '/.env' })

// CORS
app.use(cors());
app.options('*', cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/apicliente', clienteRouter);
app.use('/apifuncio', funcioRouter);
app.use('/validUsuario', validRouter);
app.use('/apiestacionamento', estacRouter);
app.use('/apireserva', reservRouter);

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
  res.render('error');
});

module.exports = app;
