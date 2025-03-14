const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let loginCredentials = {username:"john",password:"doe"}; // In-memory storage for credentials
let recievedCredentials = {recievedUsername:"", recievedPassword:""};

// Get all tasks
app.get("/getAll", (req, res) => {
res.json({loginCredentials,recievedCredentials});
});
//displays stuff

// checkCredentials
app.post("/loginCredentials", (req, res) => {
  recievedCredentials = { 
      recievedUsername:req.body.recievedUsername,
      recievedPassword:req.body.recievedPassword
    };

  if(loginCredentials.username === recievedCredentials.recievedUsername && loginCredentials.password === recievedCredentials.recievedPassword){
    res.json({status:"success",message:`Welcome ${recievedCredentials.recievedUsername}`});
  }else{
    res.json({status:"failed",message:"Please try again."});
  }
  
});

// Delete a task NOT USEDs
app.delete("/loginCredentials/:id", (req, res) => {
  tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
  res.json({ message: "loginCredentials deleted" });
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));

//code for server.js
 

//notes

/*

in post and get etc. the callback fn after the url is req and res
  req is what is being sent into
  res is what is being sent back. It is the response.data 

 */