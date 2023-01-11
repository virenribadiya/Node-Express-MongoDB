const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true})); // setting true to parse nested objects.

app.get("/",function(request,response){
    //response.send("hello world!");
    response.sendFile(__dirname + "/" + "index.html");
})

app.post("/",function(request,response){
    var result = Number(request.body.num1) + Number(request.body.num2);
    response.send("Result is "+result);
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});