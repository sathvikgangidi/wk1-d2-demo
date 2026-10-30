var express =require('express');
var app=express();
app.get('/home',function (req,res){
    res.send("home")});
app.get('/about',function (req,res){
    res.send("about!");
});
app.listen(3000);



