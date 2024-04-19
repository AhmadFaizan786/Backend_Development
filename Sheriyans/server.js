//express.js 
// It's a minimalist web application framework for Node.js.
// Helps to define routes for different HTTP methods (GET, POST, etc.).
// Middleware: Allows you to execute code at various points during request processing.
// JSON handling: Simplifies handling of JSON data in requests and responses
// Error handling: Provides mechanisms for handling errors gracefully in your application.

const express = require('express')
const app = express()


//one way to write middleware
app.use(function(req,res,next){
  console.log("Middleware code is running.")
  next()
})

app.use(function(req,res,next){
  console.log("Again Middleware code is running.")
  next()
})

// syntax for creating routes
//app.get(route,requestHandler)
app.get('/', function(req,res){
  res.send('Home Page')
})

app.get('/profile', function(req,res){
  res.send("This is the profile page.")
})

app.get('/about',function(req,res){
  res.send("This is about page.")
})

// app.get('/contact',function(req,res,next){
//   return next(new Error("Something went wrong!"))
// })

// //Error Handling
// app.use((err,req,res,next) => {
//   console.log(err.stack)
//   res.status(500).send('Something broke')
// })

app.listen(3000)