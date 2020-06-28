const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const logger = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());
app.use(session({
  key: 'token',
  secret: '12345',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));
// private routes
const privateRoute = (req, res, next) => {
  if (req.session.user && req.cookies.token) {
    next();
  } else {
      res.status(500).send('token or session expired')
  }
}

const indexRouter = require("./routes/index");
app.use("/", indexRouter);
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
const vehiclesRouter = require("./routes/vehicles");
app.use("/vehicles", vehiclesRouter);

const reservationRouter = require("./routes/reservations");
app.use("/reservations", privateRoute, reservationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message).status(err.status);
});

module.exports = app;
