const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response) {
    response.sendFile(__dirname+"/index.html");
})

app.post("/",function(request,response){
    var city = request.body.cityName;
    console.log(request.body.cityName);
    APIURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=cd328b51ba624ce4d065295aea7211d1&units=metric";
    console.log(APIURL);
    axios.get("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=cd328b51ba624ce4d065295aea7211d1&units=metric")
         .then(function(res){
            console.log(response.data);
            var temp = res.data.main.temp;
            var description =  res.data.weather[0].description;
            var image = res.data.weather[0].icon;
            var imageURL = "https://openweathermap.org/img/wn/"+image+"@2x.png";            
            response.write("<h1>Temperature of "+city+ " is " + temp +" degree Celcius.</h1>");
            response.write("<p> Description: "+ description + "</p>" );
            response.write("<img src="+imageURL+">");
            response.end();
            // we can have only one response.send or response.sendStatus()
            // we can have multiple response.write before response.send( )
    });
})




app.listen(3000,function(){
    console.log("Good to go!!!");
});