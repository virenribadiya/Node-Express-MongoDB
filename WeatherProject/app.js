const express = require("express");
const app = express();
const axios = require("axios");

app.get("/",function(request,response) {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=cd328b51ba624ce4d065295aea7211d1")
         .then(function(res){
        response.sendStatus(res.data.main.temp);
        console.log(res.data.weather[0].description); // array element access
    });
})

app.listen(3000,function(){
    console.log("Good to go!!!");
});