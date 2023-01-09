const express = require("express");

const app = express();

// When a get request is done at the root the callback function is triggerd.
app.get("/",function(request,response){
    console.log(request);
    response.send("<h1>Hello World</h1>");

})

app.listen(3000, function(){
    console.log("Server started on port 3000");
    // when our browser try to get in touch with our server then it didnt get anything back. so it says get error.

});