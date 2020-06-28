var createError = require("http-errors");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const jwt = require("jsonwebtoken");

var app = express();

app.use(cors());
app.use(cookieParser());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const privateRoute = (req, res, next) => {
  if (req.cookies && req.cookies.token) {
    try {
      req.user = jwt.verify(req.cookies.token, "12345");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  next();
};
app.use((req, res, next) => {
  console.log(req.cookies);
  if (req.cookies && req.cookies.token) {
    req.user = jwt.verify(req.cookies.token, "12345");
  }
  next();
});

var indexRouter = require("./routes/index");
app.use("/", indexRouter);
var usersRouter = require("./routes/users");
app.use("/users", usersRouter);
var vehiclesRouter = require("./routes/vehicles");
app.use("/vehicles", privateRoute, vehiclesRouter);

var reservationRouter = require("./routes/reservations");
app.use("/reservations", reservationRouter);

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
