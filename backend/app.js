const express = require("express");
const cors = require("cors");
const todosRouter = require("./routes/todos")
const session = require("express-session");

const app = express();

app.use(cors());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use("/todos", todosRouter);

app.use(function (req, res, next) {
    res.status(200);
    res.send('Hello World!');
    next();
});

module.exports = app;