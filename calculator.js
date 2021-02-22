const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post('/', function(req, res){

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("The result is " + result);
});


app.get('/bmi', function(req, res){
    res.sendFile(__dirname + "/BMICalculator.html")
});
app.post('/bmi',function(req, res){
    //take the number feom html name weight
    var w = Number(req.body.weight);
    //take the number feom html name height
    var h = Number(req.body.height);
    var result = w/(h*h)
    res.send("Your bmi is: " + result);
});


//set loacl server channel to 3000
app.listen(3000, function(){
    console.log("calculator server: 3000");
});