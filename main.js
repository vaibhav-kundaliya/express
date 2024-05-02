const express = require("express")
const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs:   20 * 1000, // 10 sec in milliseconds
  max: 1, // 1 request
  message: {
    status: "error",
    message:   'Too many requests from this IP, please try again after some time.'
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req, res)=>{
    console.log(req.ip, req.path)
    return req.ip + req.path
  }
 });

app = express()


app.get("/", rateLimiter, (req, res)=>{
    console.log("Hello world");
    res.send("Hellooooo")
})

app.get("/api2", rateLimiter, (req, res)=>{
    console.log("Hello world 2");
    res.send("Hellooooo 2")
})


app.listen(3000, ()=>{
    console.log("up and running")
})