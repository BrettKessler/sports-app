var express = require("express");
var app = express();
var request = require ("request");
app.set("view engine", "ejs");

// this gets the current date and converts it to numerical form.
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10){
    dd='0'+dd
} 
if(mm<10){
    mm='0'+mm
}

// this is getting information from the API and returning results in the ejs.
app.get("/sportsapp", function(req, res){
request("https://api.sportradar.us/ncaamb-t3/games/2017/03/15/schedule.json?api_key=j6mu95u99hsaayj5etfuzh6w", function(error, response, body){
    if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
          res.render("results", {data : data});
       
       }
  });   
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Sports App has Started");
});