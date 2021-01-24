const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Todo = require("../models/todo");
let viewCount = 0;
//mongoose.connect('mongodb://localhost:37022/myApp', {useNewUrlParser: true, useUnifiedTopology: true});

router.get("/", (req, res, next) => {
    viewCount++;
    if (!req.session.viewCountInSession) {
        req.session.viewCountInSession = 1;
    } else{
        req.session.viewCountInSession ++;
    }
    
    // if you refresh the page in different browser, you can see the viewCount value is shared among browsers, meaning in one browser 
    // if you reload and increment the viewCount value, in another browser it starts from the incremented val, but in case of viewCountInSession
    // the value is not shared across browsers, it's for a user, if you reload and increment the value in one browser, it doesn't get
    // started from the incremented val
    message = "this is todos page, view count: " + viewCount + ", view count in session: " + req.session.viewCountInSession;
    res.status(200).send(message);
})

// router.post("/", (req, res, next) =>{
//     const todo = new Todo({
//         _id: new mongoose.Types.ObjectId(),
//         text: req.body.text
//     });
//     todo.save().then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     })
//     res.status(201).json({
//         message: "Handling post request to /todos",
//         createdTodo: todo
//     })
// })

module.exports = router;